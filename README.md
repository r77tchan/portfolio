# T.A Portfolio

ポートフォリオサイトです。

公開URL: https://r77tchan.github.io/portfolio/

## セクション構成

- **Hero** — 自己紹介・GitHubリンク
- **Works** — 制作実績
- **Experience** — 職務経歴
- **Skills** — 技術スタック
- **Footer** — コピーライト

## 技術スタック

- [Next.js 16](https://nextjs.org/) (App Router / Static Export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## ディレクトリ構成

```
app/
  components/   # 各セクションのコンポーネント
  lib/          # 共通モジュール (BASE_PATH 等)
  layout.tsx    # ルートレイアウト
  page.tsx      # トップページ
public/         # 静的アセット (画像等)
.github/
  workflows/    # GitHub Actions (デプロイ用)
```

## 開発

依存関係のインストール:

```bash
npm install
```

開発サーバーの起動 ([http://localhost:3000](http://localhost:3000)):

```bash
npm run dev
```

その他のコマンド:

```bash
npm run build       # 本番ビルド (out/ に静的書き出し)
npm run lint        # ESLint
npm run typecheck   # TypeScript 型チェック
```

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動的に GitHub Pages へデプロイします (`.github/workflows/deploy.yml`)。

ビルド設定 (`next.config.ts`):

- `output: "export"` — 静的書き出し
- `trailingSlash: true` — GitHub Pages 用 URL 形式
- `basePath: "/portfolio"` (本番のみ) — リポジトリ名配下で公開
- `images.unoptimized: true` — 静的ホスティング向けに画像最適化を無効化

`public/` 配下の画像参照は `app/lib/basePath.ts` の `BASE_PATH` を付与してください (static export では `next/image` の `src` に basePath が自動付与されないため)。
