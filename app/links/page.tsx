// app/(standalone)/links/page.tsx
import type { Metadata } from "next";
import LinksClient from "@/components/pages/Linktree/LinkClient";

export const metadata: Metadata = {
  title: "Official Links | GOASAYA PIK 2",
  description: "Connect with GOASAYA. Reserve your table, view our progressive Asian tasting menus, or explore our curated experiences in PIK 2, Jakarta.",
  keywords: [
    "GOASAYA links",
    "Reserve GOASAYA",
    "GOASAYA menu",
    "Contact GOASAYA",
    "Fine dining PIK 2 links",
    "Asian progressive dining Jakarta"
  ],
  openGraph: {
    title: "Official Links | GOASAYA PIK 2",
    description: "Reserve your table, view our menu, or explore curated experiences.",
    url: "https://www.goasaya.com/links",
    siteName: "GOASAYA",
    images: [
      {
        url: "https://www.goasaya.com/logo/09.jpg", 
        width: 1200,
        height: 630,
        alt: "GOASAYA Official Links",
      },
    ],
    locale: "id_ID",
    type: "website", // Swapped from profile to website for brand pages
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Links | GOASAYA",
    description: "Connect with GOASAYA. Reserve your table, view our menus, or explore curated experiences.",
    images: ["https://www.goasaya.com/logo/09.jpg"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/links",
  },
};

export default function LinksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage", // It's a profile page...
    "mainEntity": {
      "@type": "Restaurant", // ...about a restaurant!
      "name": "GOASAYA",
      "image": "https://www.goasaya.com/logo/09.jpg",
      "url": "https://www.goasaya.com",
      "telephone": "+6281338382845", // ✅ Added Contact
      "servesCuisine": "Asian Progressive", // ✅ Added Cuisine (Huge for Google Search)
      "priceRange": "$$$$", // ✅ Added Price Range (Signals Luxury Fine Dining)
      "sameAs": [
        "https://instagram.com/goasaya.jkt",
        "https://www.tiktok.com/@goasaya.jkt" // ✅ Connected TikTok
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta",
        "addressRegion": "PIK 2",
        "addressCountry": "ID"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LinksClient />
    </>
  );
}