import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head"; // Import next/head for adding custom head elements of the

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vizta - Data Visualization Platform",
  description:
    "Vizta is a data visualization platform that enables businesses to create insightful dashboards with real-time analytics.",
  keywords:
    "data visualization, dashboards, analytics, business intelligence, Viztaa",
  icons: {
    icon: "https://vizta.in/image/Group.png", // External URL for the favicon
  },
  openGraph: {
    title: "Vizta - Data Visualization Platform",
    description:
      "Vizta offers powerful data visualizations and real-time analytics to improves business decision-making.",
    url: "https://vizta.in",
    site_name: "Vizta",
    images: [
      {
        url: "https://vizta.in/image/Group.pngf", // Make sure you have a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "Vizta - Data Visualization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // This type is for large images to be displayed on Twitter
    title: "Vizta - Data Visualization Platform",
    description:
      "Vizta offers powerful data visualizations and real-time analytics.",
    image: "https://vizta.in/image/Group.png", // Image for Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
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
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
