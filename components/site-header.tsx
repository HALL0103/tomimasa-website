'use client';

import { useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/app/site-config';

const navigation = [
  { href: '/', label: 'HOME' },
  { href: '/dotcon', label: 'DOTCON' },
  { href: '/#works', label: '施工例' },
  { href: '/contact', label: 'お問い合わせ' },
] as const;

export function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = () => { if (menuRef.current) menuRef.current.open = false; };
    window.addEventListener('popstate', close);
    window.addEventListener('hashchange', close);
    return () => { window.removeEventListener('popstate', close); window.removeEventListener('hashchange', close); };
  }, []);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };
  return <header className="site-header"><a className="brand" href="/" aria-label="富正 ホームへ"><img src={siteConfig.images.logo} alt="富正" width="640" height="219" /></a><nav className="desktop-nav" aria-label="メインナビゲーション">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><details ref={menuRef} className="mobile-menu"><summary aria-label="メニューを開く"><Menu aria-hidden="true" /></summary><nav aria-label="モバイルナビゲーション">{navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}</nav></details></header>;
}
