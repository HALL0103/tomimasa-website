import type { Metadata } from 'next';
import { Camera } from 'lucide-react';
import { siteConfig, workImages } from './site-config';

export const metadata: Metadata = {
  title: '左官・外構工事ひとすじ35年',
  description: '和歌山市の富正。左官工事、外構・エクステリア工事、DOTCON施工を職人本人が丁寧に対応します。',
  alternates: { canonical: '/' },
};

const services = [
  { title: '左官工事', text: '長年の経験を活かし、住宅まわりの左官工事を丁寧に施工します。', image: siteConfig.images.plaster, smallImage: '/assets/tomimasa/optimized-v2/service-plaster-640.webp', mediumImage: '/assets/tomimasa/optimized-v2/service-plaster-768.webp', alt: '鏝跡を生かした左官仕上げ' },
  { title: '外構工事', text: '駐車場、アプローチ、玄関まわり、塀・土間など、住まいに合わせた外構工事に対応します。', image: siteConfig.images.exterior, smallImage: '/assets/tomimasa/optimized-v2/service-exterior-640.webp', mediumImage: '/assets/tomimasa/optimized-v2/service-exterior-768.webp', alt: '植栽と塗り壁を組み合わせた住宅外構' },
  { title: 'Dotcon施工', text: '雨水を地中へ浸透させる、透水性コンクリート舗装「Dotcon」に対応しています。', image: siteConfig.images.dotconCard, smallImage: '/assets/tomimasa/optimized-v2/service-dotcon-640.webp', mediumImage: '/assets/tomimasa/optimized-v2/service-dotcon-768.webp', alt: 'さまざまな形と色で仕上げたDOTCON舗装' },
] as const;

export default function HomePage() {
  return <main className="tm-home">
    <section className="tm-hero" id="top">
      <img src={siteConfig.images.hero} srcSet="/assets/tomimasa/optimized-v2/home-hero-480.webp 480w, /assets/tomimasa/optimized-v2/home-hero-768.webp 768w, /assets/tomimasa/hero-2-mobile.webp 960w, /assets/tomimasa/optimized-v2/home-hero-1440.webp 1440w, /assets/tomimasa/hero-2-opt.webp 1774w" sizes="100vw" width="1774" height="887" alt="職人が鏝で塗り壁を仕上げる様子" fetchPriority="high" />
      <div className="tm-hero-overlay" />
      <div className="tm-shell tm-hero-inner">
        <h1>左官・外構工事<br />ひとすじ35年</h1>
        <h2>確かな技術に、<br />新しい施工の選択肢を。</h2>
        <p>職人として35年、独立・創業して約20年。<br />住宅の左官工事・外構工事を中心に、<br />一つひとつの現場に丁寧に向き合っています。</p>
      </div>
    </section>

    <section className="tm-services" id="services">
      <div className="tm-shell">
        <header className="tm-section-heading tm-section-heading-line"><p>OUR SERVICES</p><h2>左官から外構まで、職人の手で美しく。</h2></header>
        <div className="tm-service-grid">
          {services.map((service) => <article className="tm-service-card" key={service.title}>
            <img src={service.image} srcSet={`${service.smallImage} 640w, ${service.mediumImage} 768w, ${service.image} 900w`} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) calc(50vw - 35px), 374px" alt={service.alt} width="900" height="600" loading="lazy" decoding="async" />
            <div><h3>{service.title}</h3><p>{service.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="tm-dotcon">
      <img src={siteConfig.images.dotconHome} srcSet="/assets/tomimasa/optimized-v2/home-dotcon-480.webp 480w, /assets/tomimasa/optimized-v2/home-dotcon-768.webp 768w, /assets/tomimasa/home-dotcon-mobile.webp 900w, /assets/tomimasa/optimized-v2/home-dotcon-1440.webp 1440w, /assets/tomimasa/home-dotcon.webp 1672w" sizes="100vw" width="1672" height="941" alt="さまざまな模様のDOTCON舗装パターン" loading="lazy" decoding="async" />
      <div className="tm-dotcon-overlay" />
      <div className="tm-shell tm-dotcon-inner">
        <p className="tm-kicker">PERMEABLE PAVEMENT</p>
        <h2>Dotconとは？</h2>
        <span className="tm-short-line" />
        <p>Dotcon（ドットコン）/ Dotcon＋（ドットコンプラス）は、雨水を地中へ浸透させる透水性を備えたコンクリート舗装です。</p>
        <p>水たまりや雨水の流出を抑え、住まいの外まわりを快適に整える選択肢の一つです。</p>
        <a className="tm-button tm-button-accent" href="/dotcon">Dotconについて詳しく見る <span aria-hidden="true">＞</span></a>
      </div>
    </section>

    <section className="tm-about" id="about">
      <img src={siteConfig.images.craft} srcSet="/assets/tomimasa/optimized-v2/home-about-640.webp 640w, /assets/tomimasa/about-2-mobile.webp 800w, /assets/tomimasa/about-2-opt.webp 1400w" sizes="(max-width: 900px) 100vw, 55vw" width="1400" height="1086" alt="塗り壁と木製門扉、植栽を組み合わせた住宅外構" loading="lazy" decoding="async" />
      <div className="tm-about-copy">
        <p className="tm-kicker">ABOUT TOMIMASA</p>
        <h2>職人歴35年。<br />一つひとつ、丁寧に。<br />「きれいな仕上がり」を<br />大切にしています。</h2>
        <p>左官の仕事を始めて35年。<br />独立・創業してから約20年。<br />地域の住宅を中心に施工してきました。</p>
        <p>外構は、完成後も毎日目にし、長く使い続ける住まいの一部です。下地から仕上げまで一つひとつ丁寧に施工することを大切にしています。</p>
        <p>これまで培ってきた技術を基本に、Dotconをはじめとする新しい施工方法も取り入れながら、住まいに合った外構づくりをご提案します。</p>
      </div>
    </section>

    <section className="tm-works" id="works">
      <div className="tm-shell">
        <header className="tm-section-heading tm-section-heading-line"><p>WORKS</p><h2>施工例</h2></header>
        <div className="tm-work-grid">{workImages.map((image) => <figure key={image.src}><img src={image.src} srcSet={`${image.smallSrc} 640w, ${image.mediumSrc} 768w, ${image.src} 900w`} sizes="(max-width: 600px) calc(100vw - 40px), 374px" width="900" height="676" alt={image.alt} loading="lazy" decoding="async" /></figure>)}</div>
        <div className="tm-instagram-row">
          <p>その他の施工事例・最新の施工状況は、<br />Instagramでご紹介しています。</p>
          <a className="tm-button tm-button-dark" href={siteConfig.instagramUrl}><Camera size={17} aria-hidden="true" />Instagramで施工例を見る <span aria-hidden="true">＞</span></a>
        </div>
      </div>
    </section>

    <section className="tm-contact">
      <div className="tm-shell">
        <header className="tm-section-heading tm-section-heading-line"><p>CONTACT</p><h2>ご相談・お見積り</h2></header>
        <p className="tm-contact-lead">「こんな工事でも頼める？」「Dotconについて聞いてみたい」<br />という段階でも大丈夫です。現場を確認し、ご希望を伺いながら施工内容を<span className="copy-nowrap">ご提案します。</span></p>
        <div className="tm-contact-grid">
          <article className="tm-contact-card">
            <img src="/assets/tomimasa/phone-opt.webp" alt="" loading="lazy" />
            <div className="tm-contact-card-copy"><h3>お電話でのお問い合わせ</h3><p>お気軽にご相談ください。</p><a className="tm-phone" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><small>受付時間 {siteConfig.businessHours}（日祝対応不可）</small><a className="tm-button tm-button-dark" href={siteConfig.phoneHref}>電話で相談する <span aria-hidden="true">＞</span></a></div>
          </article>
          <article className="tm-contact-card">
            <img src="/assets/tomimasa/mail-opt.webp" alt="" loading="lazy" />
            <div className="tm-contact-card-copy"><h3>フォームでのお問い合わせ</h3><p>ご相談・お見積りは<br />お問い合わせフォームからも承っております。<br />24時間いつでもご利用いただけます。</p><a className="tm-button tm-button-dark" href="/contact">お問い合わせフォーム <span aria-hidden="true">＞</span></a></div>
          </article>
        </div>
        <dl className="tm-contact-facts">
          <div><dt>対応エリア</dt><dd>{siteConfig.serviceArea}</dd></div>
        </dl>
      </div>
    </section>
  </main>;
}
