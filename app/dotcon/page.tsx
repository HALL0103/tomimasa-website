import type { Metadata } from 'next';
import { productionSiteUrl, siteConfig } from '../site-config';

export const metadata: Metadata = { title: 'DOTCON施工', description: '透水・貯留・浸透を一体にした次世代舗装システムDOTCONをご紹介します。', alternates: productionSiteUrl ? { canonical: '/dotcon' } : undefined, openGraph: { title: 'DOTCON施工｜富正', description: '雨の日の水たまりを抑える外構へ。' } };

const concerns = [
  ['/assets/tomimasa/dotcon-final-concern-rain-opt.webp', '雨の日に水たまりができる'], ['/assets/tomimasa/optimized-v2/parking-concern-840.webp', '駐車場がぬかるむ'], ['/assets/tomimasa/dotcon-final-concern-slope-opt.webp', '勾配設計が大変'], ['/assets/tomimasa/dotcon-final-concern-cost-opt.webp', '排水設備にコストがかかる'],
] as const;
const dotconCards = [
  ['/assets/tomimasa/dotcon-final-card-1-opt.webp', '透水性で環境に優しい', ['等間隔に設けた開口部から雨水を直接地面へ浸透させる構造です。', '舗装表層で雨水を分散させながら自然な水循環を回復し、流出ピークを抑制します。']],
  ['/assets/tomimasa/dotcon-final-card-2-opt.webp', '駐車場にも使える強度と、熱のこもりにくさ', ['地盤・路盤と想定車両に合わせて設計し、住宅の駐車場や車両乗り入れ部にも施工できます。', '通常のDotconでは、比較試験で一般的なコンクリート舗装より表面温度が低い結果が得られています。']],
  ['/assets/tomimasa/dotcon-final-card-3-opt.webp', '透水性を活かした水平施工', ['透水性を確保できる敷地では、排水のための水勾配を設けず、フラットに仕上げられます。']],
  ['/assets/tomimasa/dotcon-final-card-4-opt.webp', '仕上げのバリエーション', ['穴に砂利や植栽などを組み合わせ、さまざまな表情をつくることができます。', 'ドット部分に砂利や土壌を充填することで、芝や草花などを植えることができます。']],
] as const;
const designs = [['/assets/tomimasa/dotcon-final-design-1-opt.webp', '正方形'], ['/assets/tomimasa/dotcon-final-design-2-opt.webp', '長方形'], ['/assets/tomimasa/dotcon-final-design-3-opt.webp', '六角形'], ['/assets/tomimasa/dotcon-final-design-4-opt.webp', '直線']] as const;
const comparisons = [
  { label: '正方形', slug: 'square', before: [1506, 1045], after: [1473, 1068] },
  { label: '長方形', slug: 'rectangle', before: [1446, 1087], after: [1446, 1087] },
  { label: '六角形', slug: 'hexagon', before: [1447, 1087], after: [1459, 1078] },
  { label: '直線', slug: 'straight', before: [1478, 1064], after: [1481, 1062] },
] as const;

export default function DotconPage() {
  return <main className="df-page">
    <section className="df-hero">
      <img className="df-hero-photo" src="/assets/tomimasa/dotcon-final-hero-opt.webp" srcSet="/assets/tomimasa/optimized-v2/dotcon-hero-480.webp 480w, /assets/tomimasa/optimized-v2/dotcon-hero-768.webp 768w, /assets/tomimasa/dotcon-final-hero-mobile.webp 960w, /assets/tomimasa/optimized-v2/dotcon-hero-1440.webp 1440w, /assets/tomimasa/dotcon-final-hero-opt.webp 1920w" sizes="100vw" width="1920" height="804" alt="雨上がりの住宅外構とDOTCON舗装" fetchPriority="high" /><div className="df-hero-shade" />
      <div className="df-shell df-hero-inner"><div className="df-hero-copy"><h1>雨の日の<br /><span className="df-hero-nowrap">水たまりを抑える</span>外構へ。</h1><p>透水・貯留・浸透を一体にした<br />次世代舗装システム</p><img src="/assets/tomimasa/dotcon-final-partner-opt.webp" width="700" height="268" alt="Dotcon パートナー施工店" /></div></div>
    </section>

    <section className="df-concerns"><div className="df-shell"><header className="df-heading df-heading-center"><p>YOUR CONCERNS</p><div className="df-heading-title"><span aria-hidden="true" /><h2>こんな外構のお悩み、ありませんか？</h2><span aria-hidden="true" /></div></header><div className="df-concern-grid">{concerns.map(([src, alt]) => <img key={src} src={src} srcSet={src.includes('parking-concern') ? '/assets/tomimasa/optimized-v2/parking-concern-420.webp 420w, /assets/tomimasa/optimized-v2/parking-concern-840.webp 840w' : undefined} sizes={src.includes('parking-concern') ? '(max-width: 600px) 180px, 270px' : undefined} width="420" height="420" alt={alt} loading="lazy" decoding="async" />)}</div></div></section>

    <section className="df-about">
      <div className="df-about-top"><div className="df-about-copy"><p className="df-kicker">ABOUT DOTCON</p><h2>Dotconとは？</h2><p>Dotcon（ドットコン）は、雨水を地中へ浸透させる透水性コンクリート舗装です。</p><p>透水・貯留・浸透を組み合わせた構造により、雨水の流出を抑え、都市の水循環を支えます。</p><p>雨の日の水たまりを抑え、住まいの外まわりを快適に整えます。</p><p>さらに、車両荷重に配慮した構造と、多彩なデザインを備えたDotcon＋（ドットコンプラス）があります。</p><p>用途や施工場所に合わせて、適したタイプをご提案いたします。</p></div><img src="/assets/tomimasa/dotcon-final-about-opt.webp" srcSet="/assets/tomimasa/optimized-v2/dotcon-about-640.webp 640w, /assets/tomimasa/dotcon-final-about-mobile.webp 800w, /assets/tomimasa/dotcon-final-about-opt.webp 1302w" sizes="(max-width: 900px) 100vw, 50vw" width="1302" height="725" alt="多彩な形と色で仕上げたDOTCON舗装" loading="lazy" decoding="async" /></div>
      <div className="df-feature-grid"><article><img src="/assets/tomimasa/dotcon-final-permeation-opt.webp" width="520" height="481" alt="透水" loading="lazy" decoding="async" /><h3>雨水を速やかに舗装内部へ</h3><p>→ 地盤や排水条件に応じて、歩道やアプローチをフラットに仕上げられます。</p></article><article><img src="/assets/tomimasa/dotcon-final-storage-opt.webp" width="520" height="480" alt="貯留" loading="lazy" decoding="async" /><h3>舗装内に一時的に保持</h3><p>→ 一度に流れ出る量を抑えます</p></article><article><img src="/assets/tomimasa/dotcon-final-infiltration-opt.webp" width="520" height="415" alt="浸透" loading="lazy" decoding="async" /><h3>地盤へゆっくり浸透</h3><p>→ ピーク流出を抑制</p></article></div>
    </section>

    <section className="df-dotcon-wrap"><div className="df-dotcon df-product-card"><div className="df-dotcon-intro"><div className="df-product-copy"><p className="df-logo-caption">ドットコン</p><img src="/assets/tomimasa/dotcon-final-logo-opt.webp" width="900" height="300" alt="Dotcon" loading="lazy" decoding="async" /><div className="df-product-tagline"><span>雨水を地中に戻す</span><strong>“透水系コンクリート”</strong></div><p>表面のドット（穴）が特徴の透水性コンクリート舗装です。<br />雨水を舗装内部へ取り込み、地中へ浸透させます。</p><p className="df-product-highlight">雨をためて地面に戻す、透水貯留浸透コンクリート。</p><p>歩道や駐車場に必要な強度を備え、舗装の開口部から雨水を地中へ導くコンクリート舗装です。</p></div><img className="df-product-main" src="/assets/tomimasa/dotcon-final-main-opt.webp" srcSet="/assets/tomimasa/optimized-v2/dotcon-main-640.webp 640w, /assets/tomimasa/dotcon-final-main-mobile.webp 800w, /assets/tomimasa/dotcon-final-main-opt.webp 1200w" sizes="(max-width: 900px) 100vw, 50vw" width="1200" height="942" alt="DOTCONの仕上げバリエーション" loading="lazy" decoding="async" /></div><div className="df-dotcon-card-grid">{dotconCards.map(([src,title,paragraphs]) => <article key={src}><img src={src} width="700" height="700" alt={title} loading="lazy" decoding="async" /><h3>{title}</h3>{paragraphs.map((text) => <p key={text}>{text.endsWith("実現できます。") ? <>{text.slice(0, -"実現できます。".length)}<span className="copy-nowrap">実現できます。</span></> : text}</p>)}</article>)}</div></div></section>

    <section className="df-plus-wrap"><div className="df-plus-card">
      <div className="df-plus-intro"><div className="df-product-copy"><p className="df-kicker">ドットコンプラス</p><img src="/assets/tomimasa/dotcon-final-plus-logo-opt.webp" width="900" height="300" alt="Dotcon PLUS" loading="lazy" decoding="async" /><p className="df-plus-lead"><span>車両荷重に配慮した構造と、多彩なデザインを備えた</span><strong>Dotcon＋。</strong><span>用途に合わせて施工仕様をご提案します。</span></p><p>正方形・長方形・六角形など、タイルのように美しい仕上がりで、幅広いシーンに対応します。</p><p>目地から雨水を取り込み、舗装と路盤で一時的にためて地中へ。地盤や敷地に合わせて雨水処理を計画します。</p></div><img className="df-product-main" src="/assets/tomimasa/dotcon-final-plus-structure-opt.webp" srcSet="/assets/tomimasa/dotcon-final-plus-structure-mobile.webp 800w, /assets/tomimasa/dotcon-final-plus-structure-opt.webp 1200w" sizes="(max-width: 900px) 100vw, 50vw" width="1200" height="805" alt="DOTCON PLUSの透水構造" loading="lazy" decoding="async" /></div>
      <div className="df-plus-body"><header className="df-inline-heading"><div><p>DESIGN VARIATION</p><h2>自由なデザイン <small>（Dotcon＋）</small></h2></div><span>7つのパーツを組み合わせて、機能性とデザイン性を両立できます。</span></header><div className="df-design-grid">{designs.map(([src,alt]) => <img key={src} src={src} width="800" height="450" alt={alt} loading="lazy" decoding="async" />)}</div><header className="df-inline-heading df-works-heading df-comparison-heading">
        <div><p>WORKS</p><h2>施工イメージ <small>（Dotcon＋）</small></h2></div>
        <span>パーツの組み合わせにより、敷地や用途に合わせた多彩なデザインが可能です。<br />施工前後のイメージとして、仕上がりの違いをご覧いただけます。</span>
      </header>
      <div className="df-work-grid df-comparison-grid">
        {comparisons.map(({ label, slug, before, after }) => <figure key={slug}>
          <figcaption>{label}</figcaption>
          <img src={`/assets/tomimasa/dotcon-plus-comparisons/${slug}-before.png`} width={before[0]} height={before[1]} alt={`${label}の施工前イメージ`} loading="lazy" decoding="async" />
          <span className="df-comparison-arrow" aria-hidden="true">↓</span>
          <img src={`/assets/tomimasa/dotcon-plus-comparisons/${slug}-after.png`} width={after[0]} height={after[1]} alt={`${label}の施工後イメージ`} loading="lazy" decoding="async" />
        </figure>)}
      </div></div>
    </div></section>

    <section className="df-contact"><img className="df-contact-bg" src="/assets/tomimasa/dotcon-contact-bg-opt.webp" alt="" loading="lazy" /><div className="df-contact-shade" /><div className="df-shell df-contact-inner"><header className="df-heading df-heading-center df-heading-light"><p>CONTACT</p><h2>ご相談・お見積り</h2></header><div className="df-contact-message"><h3>Dotconの施工について お気軽にご相談ください。</h3><p>「自宅の駐車場にも施工できる？」<br />「どんなデザインが合う？」</p><strong>そんなご相談からでもお気軽にお問い合わせください。</strong></div><div className="df-contact-grid"><article><img src="/assets/tomimasa/phone-opt.webp" alt="" loading="lazy" /><div><h3>お電話でのお問い合わせ</h3><p>お気軽にご相談ください。</p><a className="df-phone" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><small>受付時間 {siteConfig.businessHours}（日祝対応不可）</small><a className="tm-button tm-button-dark" href={siteConfig.phoneHref}>電話で相談する <span aria-hidden="true">＞</span></a></div></article><article><img src="/assets/tomimasa/mail-opt.webp" alt="" loading="lazy" /><div><h3>フォームでのお問い合わせ</h3><p>ご相談・お見積りは<br />お問い合わせフォームからも承っております。<br />24時間いつでもご利用いただけます。</p><a className="tm-button tm-button-outline" href="/contact">お問い合わせフォーム <span aria-hidden="true">›</span></a></div></article></div></div></section>
  </main>;
}
