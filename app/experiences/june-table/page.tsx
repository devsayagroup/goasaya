import type { Metadata } from "next";
import JuneTableView from "@/components/pages/Campaigns/JuneTablePage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";


export const metadata: Metadata = {
  title: "The June Table | Exclusive Lifestyle Lunch | GOASAYA",
  description: "Experience The June Table at GOASAYA. A curated 4-course lifestyle lunch set featuring Wagyu Beef Tartare, Miso Glazed Black Cod, and signature artisan drinks.",
  alternates: {
    canonical: "https://www.goasaya.com/experiences/june-table",
  },
  keywords: [
    "Best lunch PIK 2",
    "Set menu lunch Jakarta",
    "Business lunch PIK 2",
    "Aesthetic restaurant Tangerang",
    "AYCE alternative PIK 2",
    "GoaSaya menu",
    "Lunch promotion Jakarta"
  ],
  openGraph: {
    title: "The June Table | GOASAYA",
    description: "Discover our exclusive lifestyle lunch set. A 4-course culinary journey designed for the perfect midday escape.",
    url: "https://www.goasaya.com/experiences/june-table",
    siteName: "GOASAYA",
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
  twitter: {
    card: "summary_large_image",
    title: "The June Table | Exclusive Lunch | GOASAYA",
    description: "Discover our exclusive lifestyle lunch set. A 4-course culinary journey.",
    images: [`${SITE_URL}/images/webp/june-table-hero.webp`],
  },
};


export default function JuneTablePage() {
  // Specialized Menu & Offer Schema for Google
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "The June Table - Weekday Lunch Set Menu",
    "url": `${SITE_URL}/experiences/june-table`,
    "description": "Discover our exclusive lifestyle lunch set. A 4-course culinary journey.",
    "offers": {
      "@type": "Offer",
      "price": "349000",
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