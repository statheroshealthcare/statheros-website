/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: 'https://www.statheroshealthcare.com',
  generateRobotsTxt: true, // Automatically creates robots.txt
  changefreq: 'daily',     // Tells search engines how often pages change
  priority: 1.0,           // Importance of pages
  sitemapSize: 7000,       // Max URLs per sitemap file
};

module.exports = nextSitemapConfig;
