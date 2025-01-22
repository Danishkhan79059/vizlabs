// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//     siteUrl: 'https://vizta.in', // Updated base site URL
//     generateRobotsTxt: true, // Generate robots.txt
//     sitemapSize: 7000, // Adjusted sitemap size
//     exclude: ['/404'], // Exclude unnecessary routes like 404
//     robotsTxtOptions: {
//       policies: [
//         {
//           userAgent: '*', // Default policy for all user agents
//           allow: '/', // Allow crawling all routes
//         },
//         {
//           userAgent: 'black-listed-bot', // Example policy for a specific bot
//           disallow: ['/404'], // Block specific routes
//         },
//       ],
//       additionalSitemaps: [
//         'https://vizta.in/home', // Custom sitemap URLs
//         'https://vizta.in/about',
//       ],
//     },
//   };

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://vizta.in",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/protected-page", "/awesome/secret-page"],
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
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
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
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/path", "/path-2"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/sub-path-1", "/path-2"],
      },
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
