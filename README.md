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

現在は `app/site-config.ts` の `interactionsEnabled` が `true` のため、確認画面からNetlify Formsへ送信できます。

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

## 採用応募フォーム

HOMEの `#recruit` に募集概要と初期状態が閉じた応募フォームを設置しています。フォーム名は `recruit-form`（お問い合わせの `tomimasa-contact` と別管理）、件名は `【富正】求人応募` です。静的検出用の定義は `public/forms/recruit.html` にあります。
公開後、Netlify Formsで `recruit-form` の検出を確認し、既存お問い合わせフォームと同じ通知先を設定してください。通知設定はソースコードだけでは引き継がれません。受信テストは管理者の確認のもとで行ってください。

### 送信テスト準備（2026-11-03）

- 求人応募に「左官・外構工事の経験」（未経験／経験あり／その他）の必須単一選択を追加。
- お問い合わせにも個人情報の取り扱いへの必須同意を追加。既存の `tomimasa-contact` は維持。
- 両フォームの静的検出用定義を `public/forms/` に配置。通知先メールはソースコードに固定せず、Netlify管理画面で設定。
- 独立テスト環境の登録・通知先・利用プランはNetlify認証後に確認する。本番へは未公開。
- ローカル模擬受付での成功・エラー表示確認は、Netlifyへの保存や通知メール受信の確認を意味しない。
