// pages/api/sitemap.xml.js


const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const generateSitemap = () => {
  const baseUrl = 'http://www.adityasugandhi.com';
  const pages = [
    { loc: `${baseUrl}/index`, lastmod: getCurrentDate() },
    { loc: `${baseUrl}/resume`, lastmod: getCurrentDate() },
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
