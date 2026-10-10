# 富正 公式サイト

富正の公式Webサイトです。TOP、DOTCON詳細、お問い合わせ、プライバシーポリシーの4ページで構成しています。Next.js互換のVinextで制作し、静的ファイルとしてNetlifyへ公開できます。

## ページ

- `/`：TOP
- `/dotcon`：DOTCON詳細
- `/contact`：お問い合わせ
- `/privacy`：プライバシーポリシー

## ローカル起動

Node.js 22を使用します。

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

静的ファイルは `dist/client` に生成されます。

## Netlify設定

- Gitブランチ：`main`
- ビルドコマンド：`npm run build`
- 公開ディレクトリ：`dist/client`
- Node.js：22
- 設定ファイル：`netlify.toml`
- GitHub連携後は、`main` ブランチの更新を自動デプロイできます。

今回のGitHub登録ではNetlifyへの公開は行っていません。

## お問い合わせフォーム

画面上のフォームにNetlify Forms検出用の属性と `form-name` を設定しています。フォーム名は `tomimasa-contact` です。

現在は `app/site-config.ts` の `interactionsEnabled` が `false` のため、電話発信とフォーム送信は停止した状態です。この設定を変更するまでは実送信されません。

## サイト設定

事業者情報、電話番号、Instagramリンク、画像参照などは `app/site-config.ts` に集約しています。公開前に変更する場合は、既存の確定情報と確認用サイトとの差分を確認してください。

## 主な編集箇所

- 共通情報：`app/site-config.ts`
- TOP：`app/page.tsx`
- DOTCON：`app/dotcon/page.tsx`
- お問い合わせ：`app/contact/page.tsx`、`app/contact/contact-form.tsx`
- プライバシーポリシー：`app/privacy/page.tsx`
- デザイン：`app/globals.css`
- Netlify：`netlify.toml`
