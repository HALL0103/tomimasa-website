import type { Metadata } from 'next';
import { siteConfig } from '../site-config';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '富正の個人情報の取り扱いについてご案内します。',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="subpage legal-page" id="top">
      <header className="legal-hero"><p>PRIVACY POLICY</p><h1>プライバシーポリシー</h1></header>
      <article className="legal-content">
        <p>{siteConfig.businessName}（以下「当方」）は、お問い合わせ等を通じてお預かりする個人情報を、以下の方針に基づいて適切に取り扱います。</p>

        <section><h2>1. 取得する個人情報</h2><p>当方は、お問い合わせフォーム等を通じて、氏名、電話番号、メールアドレス、施工予定地域、お問い合わせ内容、ご希望の連絡方法その他ご入力いただいた情報を取得する場合があります。</p></section>
        <section><h2>2. 個人情報の利用目的</h2><p>取得した個人情報は、お問い合わせへの回答、連絡、見積り、現地調査や施工相談、サービスのご案内、およびこれらに付随する対応のために利用します。</p></section>
        <section><h2>3. 第三者への提供</h2><p>法令に基づく場合、人の生命・身体・財産の保護に必要な場合などを除き、ご本人の同意なく個人情報を第三者へ<span className="copy-nowrap">提供しません。</span></p></section>
        <section><h2>4. 個人情報の管理</h2><p>個人情報への不正アクセス、紛失、漏えい、改ざん等を防ぐため、必要かつ適切な安全管理措置を講じます。</p></section>
        <section><h2>5. 外部サービスの利用</h2><p>お問い合わせの受付にはNetlify Forms等の外部サービスを利用する場合があります。これらのサービスでは、各提供事業者のプライバシーポリシーに従って情報が取り扱われます。</p></section>
        <section><h2>6. 開示・訂正・削除等</h2><p>ご本人から、当方が保有する個人情報の開示、訂正、利用停止または削除等のお申し出があった場合は、ご本人確認のうえ、法令に従い適切に対応します。</p></section>
        <section><h2>7. 本方針の改定</h2><p>法令やサービス内容の変更等に応じて、本方針を改定することがあります。改定後の内容は本ページに掲載した時点から適用します。</p></section>
        <section><h2>8. お問い合わせ窓口</h2><p>{siteConfig.businessName}<br />所在地：{siteConfig.postalCode} {siteConfig.address}<br />電話番号：<a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p></section>
        <p className="legal-date">制定日：2026年10月1日</p>
      </article>
    </main>
  );
}
