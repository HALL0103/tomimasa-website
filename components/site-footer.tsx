import { siteConfig } from '@/app/site-config';

const links = [
  ['/', 'HOME'],
  ['/dotcon', 'DOTCON'],
  ['/#works', '施工例'],
  ['/contact', 'お問い合わせ'],
] as const;

export function SiteFooter() {
  return <footer className="tm-footer">
    <div className="tm-shell tm-footer-inner">
      <div className="tm-footer-brand"><span className="tm-footer-logo"><img src={siteConfig.images.footerLogo} alt="富正" width="900" height="308" loading="lazy" /></span><p>{siteConfig.businessSubtitle}</p><strong>確かな技術で、住まいを美しく。</strong></div>
      <dl className="tm-footer-info">
        <div><dt>代表</dt><dd>{siteConfig.representative}</dd></div>
        <div><dt>所在地</dt><dd>{siteConfig.postalCode}<br />{siteConfig.address}</dd></div>
        <div><dt>電話</dt><dd><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></dd></div>
        <div><dt>FAX</dt><dd className="tm-footer-fax">{siteConfig.faxDisplay}</dd></div>
      </dl>
      <nav className="tm-footer-nav" aria-label="フッターナビゲーション">{links.map(([href, label]) => <a key={href} href={href}><span aria-hidden="true">›</span>{label}</a>)}</nav>
    </div>
  </footer>;
}
