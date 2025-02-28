/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vizta.in",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://vizta.in/home",
      hreflang: "es",
    },
    {
      href: "https://vizta.in/about",
      hreflang: "fr",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/additional-page"),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all bots to crawl
    ],
    additionalSitemaps: [
      "https://vizta.in/home", // Custom sitemap URLs
      "https://vizta.in/about",
      "https://vizta.in/blog1",
      "https://vizta.in/blog2",
      "https://vizta.in/blog3",
      "https://vizta.in/blog4",
      "https://vizta.in/blog5",
      "https://vizta.in/blog6",
      "https://vizta.in/contact",
      "https://vizta.in/trial",
      "https://vizta.in/verifypage",
      "https://vizta.in/viztablog",
    ],
  },
};
