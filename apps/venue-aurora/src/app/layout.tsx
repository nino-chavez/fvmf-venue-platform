import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://venueaurora.com'),
  title: {
    default: "The Venue Aurora | Live Music in Downtown Aurora, IL",
    template: "%s | The Venue Aurora"
  },
  description: "A 190-seat listening room in Downtown Aurora, Illinois, presenting nationally-recognized talent in blues, jazz, rock, big band, and more. Operated by Fox Valley Music Foundation, a 501(c)(3) nonprofit.",
  keywords: [
    "live music Aurora IL",
    "concert venue Aurora",
    "blues concerts Aurora",
    "jazz venue Illinois",
    "listening room Fox Valley",
    "downtown Aurora events",
    "Fox Valley Music Foundation",
    "nonprofit music venue",
    "live performances Aurora",
    "intimate concert venue"
  ],
  authors: [{ name: "The Venue Aurora" }],
  creator: "The Venue Aurora",
  publisher: "Fox Valley Music Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venueaurora.com",
    siteName: "The Venue Aurora",
    title: "The Venue Aurora | Live Music in Downtown Aurora, IL",
    description: "A 190-seat listening room presenting nationally-recognized talent in blues, jazz, rock, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Venue Aurora - Live Music in Downtown Aurora, IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Venue Aurora",
    description: "Live music in Downtown Aurora, IL",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://venueaurora.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Venue Aurora Blog RSS Feed"
          href="/blog/rss.xml"
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
