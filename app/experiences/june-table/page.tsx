import type { Metadata } from "next";
import JuneTableView from "@/components/pages/Campaigns/JuneTablePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "June Table: 4-Course Weekday Lunch Set Menu in PIK 2 | GoaSaya",
  description: "Upgrade your weekday lunch at GoaSaya PIK 2. Enjoy our 'June Table' 4-course curated Asian Progressive set menu for IDR 299k. Mon-Fri, 11 AM - 3 PM. Book now.",
  keywords: [
    "Best lunch PIK 2",
    "Set menu lunch Jakarta",
    "Business lunch PIK 2",
    "Aesthetic restaurant Tangerang",
    "AYCE alternative PIK 2",
    "GoaSaya menu",
    "Lunch promotion Jakarta"
  ],
  alternates: {
    canonical: `${SITE_URL}/experiences/june-table`,
  },
  openGraph: {
    title: "June Table: 4-Course Weekday Lunch Set Menu in PIK 2",
    description: "Your Midday Escape Awaits. Discover PIK 2's most iconic 4-course curated lunch experience.",
    url: `${SITE_URL}/experiences/june-table`,
    siteName: "GoaSaya",
    images: [
      {
        url: `${SITE_URL}/images/webp/june-table-hero.webp`, // Upload a beautiful flatlay image here
        width: 1200,
        height: 630,
        alt: "June Table Lunch Set Menu at GoaSaya PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JuneTablePage() {
  // Specialized Menu & Offer Schema for Google
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "The June Table - Weekday Lunch Set Menu",
    "url": `${SITE_URL}/experiences/june-table`,
    "description": "A customizable 4-course Asian Progressive set menu available Monday to Friday.",
    "offers": {
      "@type": "Offer",
      "price": "299000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-06-01",
      "validThrough": "2026-06-30"
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Course 1: Appetizers",
        "hasMenuItem": [
          { "@type": "MenuItem", "name": "Truffle Mushroom Soup" },
          { "@type": "MenuItem", "name": "Crispy Soft Shell Crab" },
          { "@type": "MenuItem", "name": "Wagyu Beef Tartare" }
        ]
      },
      // You can expand this JSON-LD with Main, Dessert, and Drinks
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }} />
      <JuneTableView />
    </>
  );
}