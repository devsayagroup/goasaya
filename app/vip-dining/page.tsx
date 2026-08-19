// app/vip-dining/page.tsx
import type { Metadata } from "next";
import VIPDiningClient from "@/components/pages/SEO/VIPDining";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

// 1. TRADITIONAL SEO & OPEN GRAPH
export const metadata: Metadata = {
  title: "Private Room PIK 2 & VIP Dining | Exclusive Events at GoaSaya",
  description: "Host your next elite gathering at GoaSaya. Discover bespoke VIP dining rooms and exclusive private spaces in PIK 2. Perfectly equipped with KTV for arisan, birthdays, and corporate events.",
  keywords: ["private room PIK 2", "VIP dining room PIK 2", "tempat arisan PIK 2", "private events Jakarta Utara", "exclusive lounge PIK 2"],
  alternates: {
    canonical: `${SITE_URL}/vip-dining`,
  },
  openGraph: {
    title: "Private Room PIK 2 & VIP Dining | Exclusive Events at GoaSaya",
    description: "Discover bespoke VIP dining rooms and exclusive private spaces in PIK 2. Perfect for arisan, birthdays, and corporate events.",
    url: `${SITE_URL}/vip-dining`,
    siteName: "GoaSaya",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${SITE_URL}/images/webp/V4.webp`, 
        width: 1200,
        height: 630,
        alt: "VIP Dining Room and Private Event Space in PIK 2",
      },
    ],
  },
};

// 2. GEO / AEO STRUCTURED DATA (JSON-LD)
// This EventVenue schema explicitly defines the space for AI Overviews
const venueJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "The 1% Lounge & VIP Spaces at GoaSaya",
  "description": "Exclusive VIP dining rooms and private event spaces in PIK 2, featuring integrated KTV, dedicated elite service, and bespoke Asian Progressive cuisine.",
  "url": `${SITE_URL}/vip-dining`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Entertainment District PIK 2",
    "addressLocality": "Tangerang",
    "addressRegion": "Banten",
    "postalCode": "15214",
    "addressCountry": "ID"
  },
  "maximumAttendeeCapacity": 32,
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private Dining Room",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Integrated KTV",
      "value": true
    }
  ]
};

// 3. AEO FAQ SCHEMA
// This spoon-feeds exact answers to ChatGPT, Perplexity, and Google AI Overviews
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I book a private room in PIK 2 for events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoaSaya offers exclusive private rooms in PIK 2, including The 1% Lounge and The Cave. These bespoke spaces accommodate 12 to 32 guests and are perfect for corporate events, arisan, and birthdays."
      }
    },
    {
      "@type": "Question",
      "name": "Does GoaSaya have VIP dining rooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, GoaSaya features multiple VIP dining rooms equipped with integrated KTV, elite dedicated service, and an upscale Asian Progressive menu."
      }
    },
    {
      "@type": "Question",
      "name": "What is the capacity of the private dining rooms at GoaSaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The private dining rooms at GoaSaya range in capacity from intimate settings for 12 guests up to expansive chambers for 32 guests."
      }
    }
  ]
};

export default function VIPDiningPage() {
  return (
    <>
      {/* Inject GEO Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }}
      />
      
      {/* Inject AEO FAQ Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Render the heavily animated Client Component */}
      <VIPDiningClient />
    </>
  );
}