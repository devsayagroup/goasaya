import type { Metadata } from "next";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: "Curated Experiences & Private Dining di PIK 2 | GOASAYA",
  description: "Discover exclusive seasonal tasting menus, weekday privileges, and private dining events crafted within the luxurious cave of GOASAYA PIK 2.",
  keywords: [
    "Private Dining PIK 2",
    "Event Venue Restaurant Jakarta",
    "Corporate Dinner PIK 2",
    "Luxury Event Space Jakarta",
    "Exclusive Dining Experience",
    "Private Restaurant Booking",
    "Tasting Menu PIK 2",
    "GOASAYA Experiences",
    "Fine Dining PIK 2"
  ],
  alternates: {
    // UPDATED: Strict Canonical pointing to the new Hub path
    canonical: "https://www.goasaya.com/experiences", 
  },
  openGraph: {
    title: "Curated Experiences & Private Events | GOASAYA",
    description: "Host your exclusive events or discover seasonal tasting menus at GOASAYA. Our elegant cave-inspired venue offers intimate settings for unforgettable moments.",
    // UPDATED: OG URL
    url: "https://www.goasaya.com/experiences", 
    siteName: "GOASAYA",
    images: [
      {
        url: "/rooms/frontview.webp", 
        width: 1200,
        height: 630,
        alt: "GOASAYA Curated Experiences and Private Dining",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Experiences & Private Dining | GOASAYA",
    description: "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings.",
    images: ["https://www.goasaya.com/logo/09.jpg"],
  },
};

export default function Experiences() {

  // 1. SILO ARCHITECTURE SCHEMA (ItemList)
  // This explicitly connects your Hub page to all the SEO "Spoke" pages we built.
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GoaSaya Curated Experiences & Venues",
    "description": "A collection of premium dining experiences, private events, and seasonal campaigns at GoaSaya PIK 2.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://www.goasaya.com/experiences/restoran-pik-2",
        "name": "The Premier Restoran"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://www.goasaya.com/experiences/cafe-di-pik",
        "name": "The Aesthetic Cafe"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://www.goasaya.com/experiences/pik-must-visit",
        "name": "Cave Architecture Destination"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://www.goasaya.com/experiences/may-madness",
        "name": "May Madness AYCE Promo"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://www.goasaya.com/experiences/weekday-specials",
        "name": "Weekday Dining Specials"
      }
    ]
  };

  // 2. FAQ SCHEMA FOR PRIVATE DINING & EVENTS
  // Captures the high-ticket corporate/event search intent.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does GoaSaya offer private dining in PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, GoaSaya provides exclusive private dining experiences and luxury event spaces in the Entertainment District PIK 2. It is an ideal venue for corporate dinners, intimate celebrations, and VIP gatherings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book the restaurant for a private event or corporate gathering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our cave-inspired venue offers a highly photogenic and private atmosphere, making it one of the most sought-after luxury event spaces in Jakarta. Please contact our reservation team to discuss curated tasting menus and venue buyouts."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <main>
        <ExperiencePage />
      </main>
    </>
  );
}