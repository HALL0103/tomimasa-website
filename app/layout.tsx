import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from './site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: '富正｜左官・外構工事ひとすじ35年', template: '%s｜富正' },
  description: '和歌山の左官・外構工事・DOTCON施工。職人歴35年の確かな技術で、住まいの外まわりを丁寧に仕上げます。',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'ja_JP', title: '富正｜左官・外構工事ひとすじ35年', description: '確かな技術に、新しい施工の選択肢を。左官・外構・DOTCON施工に対応します。', images: [{ url: '/og.png', width: 1200, height: 630, alt: '富正 左官・外構工事ひとすじ35年' }] },
  twitter: { card: 'summary_large_image', title: '富正｜左官・外構工事ひとすじ35年', description: '確かな技術に、新しい施工の選択肢を。', images: ['/og.png'] },
  icons: { icon: siteConfig.images.mark },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body><div className="site-frame"><SiteHeader />{children}<SiteFooter /></div></body></html>;
}
