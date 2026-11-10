import { writeFileSync, rmSync } from 'node:fs';
const value = process.env.NEXT_PUBLIC_SITE_URL;
let origin;
if (value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTPS origin');
  origin = url.origin;
}
writeFileSync('public/robots.txt', origin ? 'User-agent: *\nAllow: /\n\nSitemap: ' + origin + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n');
if (origin) {
  writeFileSync('public/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ['/', '/dotcon', '/contact', '/privacy'].map(path => '  <url><loc>' + origin + path + '</loc></url>').join('\n') + '\n</urlset>\n');
} else {
  rmSync('public/sitemap.xml', { force: true });
}
