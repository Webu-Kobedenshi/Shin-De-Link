# Xserver Deploy

`web-u.dev` で `web` と `service` を xサーバー上の Docker にデプロイする手順です。

初回構築、通常リリース、検証、ロールバック、トラブル対応まで含む詳細手順は [XSERVER_DEPLOY_RUNBOOK.md](./XSERVER_DEPLOY_RUNBOOK.md) を参照してください。

## Prerequisites

- xサーバーの `webu_kd_xs` アカウントで SSH ログインできる（`~/.ssh/config` 設定後は `ssh webu`）
- Docker / Docker Compose を `webu_kd_xs` アカウントで実行できる
- 80 番と 443 番ポートが外部から到達できる
- `web-u.dev` と `www.web-u.dev` の A レコードが `162.43.91.89` を向いている
- Neon / Cloudflare R2 / Google OAuth の本番用 secret を確認できる

## Files

- `compose.xserver.yml`
- `web/Dockerfile.xserver`
- `service/Dockerfile.xserver`
- `deploy/xserver/Caddyfile`
- `.env.xserver.example`

## DNS

name.com で以下を設定します。

```text
Type: A
Host: @
Value: 162.43.91.89
```

```text
Type: A
Host: www
Value: 162.43.91.89
```

## Environment

サーバー上で `.env.xserver.example` をコピーして `.env.xserver` を作ります。

```bash
cp .env.xserver.example .env.xserver
```

最低限、以下を本番値に置き換えます。

```text
NEXTAUTH_SECRET
AUTH_JWT_SECRET
ADMIN_SEED_EMAILS（管理者を seed する場合のみ）
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
DATABASE_URL
ENDPOINT
PUBLIC_UPLOAD_ENDPOINT
PUBLIC_ENDPOINT
ACCESS_KEY
SECRET_KEY
BUCKET_NAME
```

`AUTH_JWT_SECRET` は `web` と `service` で同じ値を使います。

`ENDPOINT` と `PUBLIC_UPLOAD_ENDPOINT` には R2 S3 API のホスト名だけを設定し、bucket 名は URL に含めません。`PUBLIC_ENDPOINT` は独自ドメインを推奨しますが、初回公開時は R2 の Public Development URL（`https://pub-...r2.dev`）も使えます。

## Google OAuth

Google Cloud Console の OAuth Client に以下を追加します。

Authorized JavaScript origins:

```text
https://web-u.dev
```

Authorized redirect URIs:

```text
https://web-u.dev/api/auth/callback/google
https://web-u.dev/api/account/gmail/verify/callback
```

## Cloudflare R2 CORS

R2 bucket の CORS に `https://web-u.dev` を追加します。

```json
[
  {
    "AllowedOrigins": ["https://web-u.dev"],
    "AllowedMethods": ["PUT", "GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

## Deploy

初回はリポジトリを配置してから、最新の `main` を取得します。

```bash
ssh webu
mkdir -p ~/apps
cd ~/apps
git clone https://github.com/Webu-Kobedenshi/Webu-knowledge-base-obog.git
cd ~/apps/Webu-knowledge-base-obog
git fetch origin
git checkout main
git pull --ff-only origin main
```

すでに clone 済みの場合は `git clone` を省略し、`cd ~/apps/Webu-knowledge-base-obog` から実行します。

リポジトリを配置し、環境変数を設定したら起動します。

```bash
docker compose -f compose.xserver.yml up -d --build
```

入力済みの本番環境変数で compose の構文を確認します。

```bash
XSERVER_ENV_FILE=.env.xserver docker compose -f compose.xserver.yml config --quiet
```

初回 build は高負荷になるため、`docker compose ... up -d --build` を重複実行しません。SSH が一時的に応答しない場合は、Xserver VPS パネルのシリアルコンソールから状態を確認します。

migration を適用します。

```bash
docker compose -f compose.xserver.yml exec service pnpm prisma migrate status
docker compose -f compose.xserver.yml exec service pnpm prisma migrate deploy
```

`ADMIN_SEED_EMAILS` を設定した場合のみ、管理者メールを seed します。

```bash
docker compose -f compose.xserver.yml exec service pnpm db:seed:admin-emails
```

## Check

```bash
docker compose -f compose.xserver.yml ps
docker compose -f compose.xserver.yml logs -f web service caddy
curl -I https://web-u.dev
curl -I https://www.web-u.dev
```

未ログイン時の `https://web-u.dev` は `/login` への `307` redirect、`https://www.web-u.dev` は `https://web-u.dev` への `301` redirect が期待値です。

ブラウザでは以下を確認します。

1. `https://web-u.dev` が表示される
2. Google ログインできる
3. OB/OG 一覧が表示される
4. `/account` の保存が成功する
5. アバター画像アップロードが成功する
6. `https://www.web-u.dev` が `https://web-u.dev` にリダイレクトされる

## Operations

```bash
docker compose -f compose.xserver.yml pull
docker compose -f compose.xserver.yml up -d --build
docker compose -f compose.xserver.yml logs -f
docker compose -f compose.xserver.yml restart web
docker compose -f compose.xserver.yml restart service
```

旧 Fly.io 環境は、移行後しばらく rollback 用に残してから停止します。
