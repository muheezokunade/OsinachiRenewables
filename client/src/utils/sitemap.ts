// Sitemap configuration for Osinachi Renewable Energy
export const sitemapConfig = {
  baseUrl: 'https://osinachirenewables.com',
  pages: [
    {
      path: '/',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/about',
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/services',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/portfolio',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/contact',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/ourteam',
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/careers',
      priority: 0.6,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/newsblog',
      priority: 0.7,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/impact',
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/privacy-policy',
      priority: 0.3,
      changefreq: 'yearly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/cookies-policy',
      priority: 0.3,
      changefreq: 'yearly',
      lastmod: new Date().toISOString(),
    },
    {
      path: '/terms-conditions',
      priority: 0.3,
      changefreq: 'yearly',
      lastmod: new Date().toISOString(),
    },
  ],
};

export function generateSitemapXML(): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = sitemapConfig.pages
    .map(page => {
      return `  <url>
    <loc>${sitemapConfig.baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
}

// Robots.txt content
export const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://osinachirenewables.com/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
