import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "BISA - Platform Pencari Kerja Inklusif untuk Penyandang Disabilitas",
    template: "%s | BISA - Platform Pencari Kerja Inklusif",
  },
  description:
    "BISA adalah platform pencari kerja inklusif yang menghubungkan penyandang disabilitas dengan perusahaan yang ramah disabilitas. Temukan lowongan kerja, tingkatkan skill, dan wujudkan karir impian Anda.",
  keywords: [
    "lowongan kerja disabilitas",
    "penyandang disabilitas",
    "pencari kerja inklusif",
    "karir disabilitas",
    "perusahaan ramah disabilitas",
    "job portal disabilitas",
    "workplace inclusion",
    "disability employment",
    "aksesibilitas kerja",
    "diversity hiring",
    "inclusive workplace",
  ],
  authors: [{ name: "BISA Team" }],
  creator: "BISA Platform",
  publisher: "BISA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Employment",
  classification: "Job Portal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bisa-work.vercel.app/",
    siteName: "BISA - Platform Pencari Kerja Inklusif",
    title:
      "BISA - Platform Pencari Kerja Inklusif untuk Penyandang Disabilitas",
    description:
      "Membuka peluang, menghapus batasan. Platform pencari kerja yang menghubungkan penyandang disabilitas dengan perusahaan yang ramah disabilitas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BISA - Platform Pencari Kerja Inklusif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BISA - Platform Pencari Kerja Inklusif untuk Penyandang Disabilitas",
    description:
      "Membuka peluang, menghapus batasan. Platform pencari kerja yang menghubungkan penyandang disabilitas dengan perusahaan yang ramah disabilitas.",
    images: ["/twitter-image.jpg"],
    creator: "@BISAPlatform",
  },
  alternates: {
    canonical: "https://bisa-work.vercel.app/",
    languages: {
      "id-ID": "https://bisa-work.vercel.app/",
      "en-US": "https://bisa-work.vercel.app/",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "Next.js",
  applicationName: "BISA Platform",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#3B82F6",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#3B82F6",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "BISA",
    "mobile-web-app-capable": "yes",
    "theme-color": "#3B82F6",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" dir="ltr">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Indonesian" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="copyright" content="BISA Platform" />
        <meta name="designer" content="BISA Team" />
        <meta name="reply-to" content="info@bisa-platform.com" />
        <meta name="owner" content="BISA Platform" />
        <meta name="url" content="https://bisa-work.vercel.app/" />
        <meta name="identifier-URL" content="https://bisa-work.vercel.app/" />
        <meta name="directory" content="submission" />
        <meta
          name="pagename"
          content="BISA - Platform Pencari Kerja Inklusif"
        />
        <meta name="category" content="Employment, Disability, Inclusion" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BISA - Platform Pencari Kerja Inklusif",
              url: "https://bisa-work.vercel.app/",
              description:
                "Platform pencari kerja inklusif yang menghubungkan penyandang disabilitas dengan perusahaan yang ramah disabilitas",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IDR",
              },
              publisher: {
                "@type": "Organization",
                name: "BISA Platform",
                url: "https://bisa-work.vercel.app/",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://bisa-work.vercel.app//search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* NoScript fallback */}
        <noscript>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#f3f4f6",
            }}
          >
            <p>
              JavaScript diperlukan untuk pengalaman terbaik di platform BISA.
              Silakan aktifkan JavaScript di browser Anda.
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
