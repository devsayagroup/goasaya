import type { Metadata } from "next";
import OnePercentLoungeView from "@/components/pages/SEO/OnePercentLounge";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "The 1% Lounge | VIP Speakeasy & Private Rooms PIK 2 | GoaSaya",
  description: "Discover PIK 2's most exclusive nightlife sanctuary hidden above GoaSaya. Featuring 5 bespoke VIP private rooms, premium bottle service, and artisan mixology.",
  keywords: [
    "VIP lounge Jakarta",
    "Speakeasy bar PIK 2",
    "Nightlife PIK 2",
    "Private room restaurant Jakarta",
    "Premium cocktail bar Tangerang",
    "Bottle service PIK 2",
    "Hidden bar PIK",
    "Exclusive bar Tangerang",
    "Tempat nongkrong VIP PIK 2"
  ],
  alternates: {
    canonical: `${SITE_URL}/1-percent-lounge`,
  },
  openGraph: {
    title: "The 1% Lounge | VIP Speakeasy & Private Rooms PIK 2",
    description: "Ascend to exclusivity. 5 themed private chambers, bespoke cocktails, and elite bottle service hidden above GoaSaya.",
    url: `${SITE_URL}/1-percent-lounge`,
    siteName: "GoaSaya",
    images: [
      {
        url: `${SITE_URL}/rooms/onepercent/Pi-10.webp`, 
        width: 1200,
        height: 630,
        alt: "The 1% Lounge Inner Circle VIP Bar PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function OnePercentLoungePage() {
  // Rich SEO Schema to tell Google exactly what you are offering
  const loungeJsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The 1% Lounge",
    "parentOrganization": {
      "@type": "Restaurant",
      "name": "GoaSaya"
    },
    "url": `${SITE_URL}/1-percent-lounge`,
    "description": "PIK 2's most exclusive VIP speakeasy and nightlife sanctuary, featuring 5 bespoke private rooms for elite bottle service and intimate gatherings.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "addressCountry": "ID"
    },
    "priceRange": "$$$$",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Pink Room Reservation",
          "description": "Private luxury room with soft lighting and refined ambiance. Capacity up to 12 pax."
        },
        "price": "3500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Chinese Room Reservation",
          "description": "Heritage-inspired private luxury room for opulent gatherings. Capacity up to 15 pax."
        },
        "price": "4500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Japanese Room Reservation",
          "description": "Minimalist, serene private room for focused VIP gatherings. Capacity up to 19 pax."
        },
        "price": "5500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Classic Room Reservation",
          "description": "Our largest elegant private space for exclusive events. Capacity up to 32 pax."
        },
        "price": "6500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Inner Circle",
          "description": "Invitation-only ultra-private VIP room offering the highest level of discretion."
        }
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loungeJsonLd) }} 
      />
      <OnePercentLoungeView />
    </>
  );
}