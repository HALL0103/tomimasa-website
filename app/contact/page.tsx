import type { Metadata } from 'next';
import { CheckCircle2, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';
import { siteConfig } from '../site-config';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '富正への左官工事、外構工事、DOTCON施工のご相談・お見積りはこちらから。',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'お問い合わせ｜富正', description: '左官・外構・DOTCON施工のご相談はこちら。' },
};

const examples = [
  { image: '/assets/tomimasa/contact-example-exterior.webp', text: '新築の外構工事をお願いしたい' },
  { image: '/assets/tomimasa/contact-example-parking.webp', text: '駐車場・アプローチをつくりたい' },
  { image: '/assets/tomimasa/contact-example-wall.webp', text: 'ブロック塀・左官工事をお願いしたい' },
  { image: '/assets/tomimasa/contact-example-garden.webp', text: '庭まわり・植栽との組み合わせを相談したい' },
  { image: '/assets/tomimasa/contact-example-renovation.webp', text: '外構のリフォームをしたい' },
  { image: '/assets/tomimasa/contact-example-other.webp', text: 'その他のご相談' },
] as const;

export default function ContactPage() {
  return <main className="ct-page">
    <section className="ct-hero">
      <img src="/assets/tomimasa/contact-page-hero-opt.webp" srcSet="/assets/tomimasa/contact-page-hero-mobile.webp 900w, /assets/tomimasa/contact-page-hero-opt.webp 1600w" sizes="100vw" width="1600" height="900" alt="左官壁と木格子が印象的な和モダンの玄関ホール" fetchPriority="high" />
      <div className="ct-hero-shade" />
      <div className="tm-shell ct-hero-copy">
        <p className="ct-hero-lead">暮らしに寄り添う。</p>
        <span>CONTACT</span>
        <h1>お問い合わせ</h1>
        <p className="ct-hero-detail">左官工事・外構工事・Dotcon施工に関する<br />ご相談・お見積りなど<br />お気軽にお問い合わせください。</p>
      </div>
    </section>

    <section className="ct-form-section">
      <div className="tm-shell ct-form-layout">
        <ContactForm />
      </div>
    </section>

    <section className="ct-examples">
      <div className="tm-shell">
        <header className="ct-section-heading">
          <p>CONSULTATION EXAMPLES</p>
          <h2 className="ct-no-underline">このようなご相談を<span className="copy-nowrap">いただいています</span></h2>
        </header>
        <div className="ct-example-grid">
          {examples.map(({ image, text }) => <article key={text}>
            <span><img src={image} width="260" height="221" alt="" loading="lazy" decoding="async" /></span><p>{text === "外構のリフォームをしたい" ? <>外構の<span className="copy-nowrap">リフォームをしたい</span></> : text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="ct-support">
      <div className="tm-shell ct-support-grid">
        <article className="ct-support-card ct-phone-card">
          <p className="ct-kicker">PHONE</p>
          <h2>お電話でのお問い合わせも可能です</h2>
          <a className="ct-phone-number" href={siteConfig.phoneHref}><Phone />{siteConfig.phoneDisplay}</a>
          <p>受付時間　9:00〜18:00（日祝対応不可）</p>
          <a className="tm-button tm-button-dark ct-phone-button" href={siteConfig.phoneHref}><Phone />電話で問い合わせる<span>＞</span></a>
        </article>
        <article className="ct-support-card ct-promise-card">
          <p className="ct-kicker">OUR PROMISE</p>
          <h2>安心して<span className="copy-nowrap">ご相談いただくために</span></h2>
          <ul>
            <li><CheckCircle2 />通常、2〜3営業日以内にご連絡いたします。</li>
            <li><CheckCircle2 />現地調査が必要な場合は、日程を調整のうえ伺います。</li>
            <li><CheckCircle2 />お急ぎの場合は、お電話でご連絡ください。</li>
            <li><CheckCircle2 />営業・勧誘などのご連絡はご遠慮ください。</li>
          </ul>
        </article>
      </div>
    </section>
  </main>;
}
