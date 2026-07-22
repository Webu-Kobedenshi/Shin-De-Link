# Add Production Admin

本番データに管理者メールを追加する手順です。

このアプリでは、管理者判定は `User.role` を直接変更するのではなく、`AdminEmail` テーブルに登録されたメールアドレスで行います。
登録済みメールでログインすると、新規ユーザーは `ADMIN` として作成され、既存ユーザーもログイン時に `ADMIN` へ更新されます。

## Target

例:

```text
shiki@st.kobedenshi.ac.jp
```

## Command

Xserver の本番 service 上で、`ADMIN_SEED_EMAILS` を一時環境変数として渡して seed を実行します。

```bash
ssh webu
cd ~/apps/Webu-knowledge-base-obog
docker compose -f compose.xserver.yml exec -T -e ADMIN_SEED_EMAILS="shiki@st.kobedenshi.ac.jp" service pnpm db:seed:admin-emails
```

## Expected Output

```text
No pending migrations to apply.
Admin email seed completed: 1 admin emails ensured.
```

## Notes

- `pnpm db:seed:admin-emails` は `AdminEmail` に対して `upsert` するため、同じメールを再実行しても問題ありません。
- 既存の本番 secret `ADMIN_SEED_EMAILS` は変更しません。一時環境変数で実行するため、既存管理者メールの設定を上書きしません。
- 追加後、対象ユーザーはログアウトして再ログインすると `ADMIN` として扱われます。
- 教職員形式の学校メールは、`AdminEmail` に登録されている場合のみログイン可能な管理者として扱われます。

