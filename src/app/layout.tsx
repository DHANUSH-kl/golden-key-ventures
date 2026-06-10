import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://goldenkeyventures.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Golden Key Ventures | Top Construction & Interior Design in Mysore",
    template: "%s | Golden Key Ventures",
  },
  description: "Mysore's premier construction, architecture design, and renovation company. From luxury residential villas to commercial buildings and premium interior designs, Golden Key Ventures delivers unmatched quality with on-time delivery.",
  keywords: [
    "Golden Key Ventures",
    "goldenkeyventures",
    "goldenkeyventures.in",
    "builders in Mysore",
    "construction company in Mysore",
    "interior designers in Mysore",
    "home renovation Mysore",
    "architects in Mysore",
    "building contractors in Mysore",
    "civil contractors Mysore",
    "luxury villa construction Mysore",
    "residential builders Mysore",
    "commercial builders Mysore",
    "Mysore construction and design",
  ],
  authors: [{ name: "Golden Key Ventures", url: siteUrl }],
  creator: "Golden Key Ventures",
  publisher: "Golden Key Ventures",
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
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Golden Key Ventures | Top Construction & Interior Design in Mysore",
    description: "Mysore's premier construction, architecture design, and renovation company. Delivering high-quality residential, commercial, and interior design solutions from concept to completion.",
    siteName: "Golden Key Ventures",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Golden Key Ventures - Building Your Vision Into Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Key Ventures | Premium Construction & Design in Mysore",
    description: "Delivering high-quality residential, commercial, and interior design solutions from concept to completion.",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Golden Key Ventures",
    "image": `${siteUrl}/opengraph-image.png`,
    "@id": `${siteUrl}/#organization`,
    "url": siteUrl,
    "telephone": "+918147814709",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42#, H.S. Complex, 80 Feet Road, 1st Floor, Manasi Nagar, Near Bannur Ring Road",
      "addressLocality": "Mysore",
      "addressRegion": "Karnataka",
      "postalCode": "570019",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.3025,
      "longitude": 76.6850,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00",
    },
    "sameAs": [
      "https://www.facebook.com/goldenkeyventures",
      "https://www.instagram.com/goldenkeyventures",
      "https://www.linkedin.com/company/goldenkeyventures"
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
