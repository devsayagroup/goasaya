import type { Metadata } from "next";
import RomanticDiningView from "@/components/pages/SEO/RomanticDinner";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Romantic Dinner & Private Anniversary Venue PIK 2 | GOASAYA",
  description: "Discover PIK 2's most intimate, cave-inspired dinner experience. Perfect for romantic date nights, anniversary dinners, and private marriage proposals.",
  keywords: [
    "Romantic Dinner PIK 2",
    "Anniversary Dinner Jakarta",
    "Private Romantic Dinner PIK",
    "Romantic Fine Dining PIK 2",
    "Best place to propose in Jakarta",
    "Intimate date night restaurant",
    "Couple dinner PIK 2"
  ],
  alternates: {
    canonical: `${SITE_URL}/romantic-dinner`,
  },
  openGraph: {
    title: "A Sanctuary for Two | GOASAYA Romantic Dinner",
    description: "Escape the noise of the city. Curated couples experiences, anniversary menus, and proposal packages in our exclusive cave venue.",
    url: `${SITE_URL}/romantic-dinner`,
    siteName: "GoaSaya",
    images: [
      {
        url: `${SITE_URL}/romantic-3.png`, // Updated to match your new hero image
        width: 1200,
        height: 630,
        alt: "Romantic Dinner at GoaSaya PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RomanticDinnerPage() {
  const romanticDinnerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "GoaSaya PIK 2 - Romantic Dinner",
    "url": `${SITE_URL}/romantic-dinner`,
    "description": "Jakarta's premier destination for romantic dinners, anniversaries, and private proposals, located in the heart of PIK 2.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "PIK 2",
      "addressRegion": "Jakarta",
      "addressCountry": "ID"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Anniversary Set Menu",
          "description": "A curated 5-course intimate dinner experience for two, including wine pairing and personalized table arrangements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Cave Proposal Package",
          "description": "Complete private zoning, bespoke floral arrangements, and dedicated service for the perfect marriage proposal."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(romanticDinnerJsonLd) }} />
      <RomanticDiningView />
    </>
  );
}