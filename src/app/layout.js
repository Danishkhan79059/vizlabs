import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vizta.in"),
  title: {
    default: "Vizta - Data Visualization Platform",
    template: "%s - Vizta - Data Visualization Platform",
  },

  description:
    "Vizta is a data visualization platform that enables businesses to create insightful dashboards with real-time analytics.",
  keywords:
    "data visualization, dashboards, analytics, business intelligence, Viztaa",
  icons: {
    icon: "/favicon.ico", // External URL for the favicon
  },
  openGraph: {
    title: "Vizta - Transform Data into Insights",
    description:
      "Vizta offers powerful data visualizations and real-time analytics to improves business decision-making.",
    url: "https://vizta.in",
    site_name: "Vizta - Data Visualization Platform",
    images: [
      {
        url: "/favicon.ico", // Make sure you have a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "Vizta - Data Visualization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // This type is for large images to be displayed on Twitter
    title: "Vizta - Explore Your Data Like Never Before",
    description:
      "Vizta offers powerful data visualizations and real-time analytics.",
    image: "/favicon.ico", // Image for Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data for Google Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Vizta",
            url: "https://vizta.in",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://vizta.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            about:
              "Vizta is a data visualization platform for business intelligence.",
            mainEntity: [
              {
                "@type": "WebPage",
                name: "Sign in to Vizta Platform",
                url: "https://app.vizta.in/",
              },
              {
                "@type": "WebPage",
                name: "About Vizta",
                url: "https://vizta.in/about",
              },
              {
                "@type": "WebPage",
                name: "Subscription Pricing and Plans",
                url: "https://vizta.in/pricing",
              },
              {
                "@type": "WebPage",
                name: "Get in Touch with Vizta Support",
                url: "https://vizta.in/contact",
              },
            ],
          })}
        </script>

        {/* JSON-LD Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vizta",
            url: "https://vizta.in",
            logo: "https://vizta.in/about",
            sameAs: [
              "https://x.com/vizlabsindia",
              "https://www.linkedin.com/company/99248254/admin/dashboard/",
            ],
          })}
        </script>

        {/* JSON-LD Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vizta.in",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Pricing",
                item: "https://vizta.in/pricing",
              },
            ],
          })}
        </script>
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1224.0"
        data-gr-ext-installed=""
      >
        <Header />
        <Suspense>
        {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
