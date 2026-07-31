import type { Metadata } from "next";
import JulyBitesView from "@/components/pages/Campaigns/JulyBitesPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "July Bites: The Munchies Journey | Exclusive Lunch at GoaSaya PIK 2",
  description: "Experience a refillable mini lunch journey with 22 curated bites. Only during lunch this July at GoaSaya PIK 2.",
  keywords: [
    "July Bites",
    "Lunch PIK 2",
    "GoaSaya promo",
    "Girls lunch Jakarta",
    "Refillable dining Jakarta",
    "Aesthetic lunch PIK 2",
    "Mini canvas painting Jakarta"
  ],
  alternates: {
    canonical: `${SITE_URL}/experiences/july-bites`,
  },
  openGraph: {
    title: "July Bites: The Munchies Journey | GoaSaya",
    description: "A playful, refillable lunch journey featuring 22 curated bites and live 'Munchies & Canvas' painting sessions. Only this July.",
    url: `${SITE_URL}/experiences/july-bites`,
    siteName: "GoaSaya",
    images: [
      {
        url: `${SITE_URL}/campaigns/july-bites-og.jpg`, 
        width: 1200,
        height: 630,
        alt: "July Bites: The Munchies Journey at GoaSaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JulyBitesPage() {
  const campaignJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "July Bites: The Munchies Journey",
    "description": "A refillable mini lunch journey with 22 curated bites, featuring Munchies & Canvas live painting sessions.",
    "startDate": "2026-07-01T11:00:00+07:00",
    "endDate": "2026-07-31T15:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Restaurant",
      "name": "GoaSaya",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tangerang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "369000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-07-01T00:00:00+07:00"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(campaignJsonLd) }} 
      />
      <JulyBitesView />
    </>
  );
}