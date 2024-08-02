// pages/api/sitemap.xml.js

const generateSitemap = () => {
  const baseUrl = 'http://www.adityasugandhi.com';
  const pages = [
    { loc: `${baseUrl}/index`, lastmod: '2024-07-01' },
    { loc: `${baseUrl}/resume`, lastmod: '2024-07-01' },
    // Add other pages dynamically here if needed
  ];

  const urls = pages.map(page => `
    <url>
      <loc>${page.loc}</loc>
      <lastmod>${page.lastmod}</lastmod>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
};

export default function handler(req, res) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
