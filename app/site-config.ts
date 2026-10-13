export const siteConfig = {
  // Netlify Forms の送信テストを有効にする。
  interactionsEnabled: true,
  siteUrl: 'https://yamada-sakan.haru-09261225.chatgpt.site',
  businessName: '富正',
  businessNameEn: 'TOMIMASA',
  businessSubtitle: '左官・外構工事・Dotcon施工',
  representative: '山下 正治',
  postalCode: '〒640-8303',
  address: '和歌山県和歌山市鳴神184-23',
  serviceArea: '近畿一円',
  businessHours: '9:00〜18:00',
  phoneDisplay: '090-1963-1830',
  phoneHref: 'tel:09019631830',
  faxDisplay: '073-472-1634',
  emailDisplay: '',
  emailHref: '',
  instagramUrl: '#works',
  dotconUrl: 'https://dotcon.com/',
  historyHeadline: '35年',
  historyYears: '35年',
  establishedYears: '約20年',
  constructionPermit: '',
  images: {
    logo: '/assets/tomimasa/logo-header-opt.webp', footerLogo: '/assets/tomimasa/logo-footer-opt.webp', mark: '/assets/tomimasa/mark.png', hero: '/assets/tomimasa/hero-2-opt.webp',
    plaster: '/assets/tomimasa/service-plaster-display.webp', exterior: '/assets/tomimasa/service-exterior-display.webp',
    dotconCard: '/assets/tomimasa/service-dotcon-display.webp', dotconHome: '/assets/tomimasa/home-dotcon.webp', craft: '/assets/tomimasa/about-2-opt.webp',
    dotconHero: '/assets/tomimasa/dotcon-hero.webp', dotconUnit: '/assets/tomimasa/dotcon-unit.webp',
    permeability: '/assets/tomimasa/permeability.webp', waterFunctions: '/assets/tomimasa/water-functions.webp',
    dotconPartner: '/assets/tomimasa/dotcon-partner.webp', contactHero: '/assets/tomimasa/contact-hero.webp',
  },
} as const;

export const workImages = [
  { src: '/assets/tomimasa/work-1-display.webp', alt: 'グレーの塗り壁門柱を施工した住宅外構' },
  { src: '/assets/tomimasa/work-2-display.webp', alt: '濃色の塗り壁と格子フェンスを組み合わせた外構' },
  { src: '/assets/tomimasa/work-3-display.webp', alt: '植栽と塗り壁門柱を組み合わせた住宅外構' },
] as const;

export const dotconDesigns = [
  { src: '/assets/tomimasa/design-square.webp', label: '正方形', alt: '正方形のDOTCONパーツによる舗装デザイン' },
  { src: '/assets/tomimasa/design-rectangle.webp', label: '長方形', alt: '長方形のDOTCONパーツによる舗装デザイン' },
  { src: '/assets/tomimasa/design-hexagon.webp', label: '六角形', alt: '六角形のDOTCONパーツによる舗装デザイン' },
  { src: '/assets/tomimasa/design-line.webp', label: '直線', alt: '直線状のDOTCONパーツによる舗装デザイン' },
] as const;

export const dotconWorks = [
  { src: '/assets/tomimasa/dotcon-work-1.webp', alt: '石目調の正方形DOTCON施工例' },
  { src: '/assets/tomimasa/dotcon-work-2.webp', alt: 'レンガ調の正方形DOTCON施工例' },
  { src: '/assets/tomimasa/dotcon-work-3.webp', alt: '扇形模様のDOTCON施工例' },
  { src: '/assets/tomimasa/dotcon-work-4.webp', alt: '長方形を組み合わせたDOTCON施工例' },
] as const;
