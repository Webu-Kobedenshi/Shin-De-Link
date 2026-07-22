# Neon Deploy

Xserver 本番環境で使う Neon PostgreSQL を用意・接続する手順です。既存の Neon project を継続利用する場合、DB や branch を作り直す必要はありません。

## Create or Choose Project

- PostgreSQL version: `16`
- Region: API と近いリージョン
- Neon Auth: `OFF`

## Connection String

Neon の `Connect` から Direct 接続 URL を取得します。

確認すること:

- `-pooler` が入っていない
- `sslmode=require` が付いている

## Set Xserver Environment Variable

Xserver 上の `.env.xserver` に設定します。

```env
DATABASE_URL="<Neon Direct URL>"
```

## Migration

Xserver ではコンテナ起動後に明示的に実行します。

```bash
docker compose -f compose.xserver.yml exec service pnpm prisma migrate status
docker compose -f compose.xserver.yml exec service pnpm prisma migrate deploy
```

## Check

- `prisma migrate status` が up to date を返す
- `docker compose -f compose.xserver.yml logs --tail=100 service` に起動エラーがない

## Security

- 接続文字列は Git に書かない
- 漏れた場合は Neon で password を reset する
