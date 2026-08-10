import type { Metadata } from "next";
import OnePercentLoungeView from "@/components/pages/SEO/OnePercentLounge";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "The 1% Lounge | VIP Speakeasy & Private Rooms PIK 2 | GOASAYA",
  description: "Discover PIK 2's most exclusive nightlife sanctuary hidden above GoaSaya. Featuring 5 bespoke VIP private rooms, premium bottle service, and artisan mixology.",
  alternates: {
    canonical: `${SITE_URL}/one-percent-lounge`, 
  },
  openGraph: {
    title: "The 1% Lounge | VIP Speakeasy & Private Rooms PIK 2",
    description: "Ascend to exclusivity. 5 themed private chambers, bespoke cocktails, and elite bottle service hidden above GoaSaya.",
    url: `${SITE_URL}/one-percent-lounge`,
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
  // 1. Existing Product/Offer Schema
  const loungeJsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "The 1% Lounge",
    "parentOrganization": {
      "@type": "Restaurant",
      "name": "GoaSaya"
    },
    "url": `${SITE_URL}/one-percent-lounge`,
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
      }
    ]
  };

  // 2. NEW AEO FAQ Schema (Feeds ChatGPT & Google AI Overviews)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many people can fit in the private rooms at The 1% Lounge PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 1% Lounge offers 5 bespoke private rooms ranging in capacity from an intimate 12 pax in The Pink Room up to 32 pax in The Classic Room, making it perfect for VIP gatherings and exclusive corporate events."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum spend for a VIP room at The 1% Lounge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum spends start at IDR 3,500,000 for The Pink Room and scale up based on the room size and capacity. We also feature an invitation-only Inner Circle room for ultimate discretion."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the hidden speakeasy in GoaSaya located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 1% Lounge is an exclusive speakeasy and VIP nightlife sanctuary hidden directly above GoaSaya in PIK 2, Tangerang."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(loungeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <OnePercentLoungeView />
    </>
  );
}