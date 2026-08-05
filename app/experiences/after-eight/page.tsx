import { Metadata } from "next";
import GoaAfterEightClient from "@/components/pages/Campaigns/AfterEightPage";

// --- GEO & SEO METADATA ---
export const metadata: Metadata = {
  title: "GOA AFTER EIGHT | Deep House in the Cave at PIK 2",
  description: "Experience Deep House in the Cave at GOA AFTER EIGHT. Friday, 7 August from 9 PM at GoaSaya, PIK 2, Tangerang. Enjoy Buy 1 Get 1 Free Cocktails.",
  alternates: {
    canonical: "https://www.goasaya.com/campaigns/goa-after-eight",
  },
  openGraph: {
    title: "GOA AFTER EIGHT | Friday, 7 August",
    description: "Deep House in the Cave. Join us at GoaSaya PIK 2 for an exclusive underground nightlife experience with Buy 1 Get 1 Cocktails.",
    url: "https://www.goasaya.com/campaigns/goa-after-eight",
    siteName: "GOASAYA",
    images: [
      {
        url: "/campaigns/MAIN POSTER GOA AFTER EIGHT.jpg", 
        width: 1080,
        height: 1350,
        alt: "GOA AFTER EIGHT - Deep House in the Cave",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOA AFTER EIGHT | PIK 2 Nightlife",
    description: "Deep House in the Cave. Friday 7 August from 9 PM. B1G1 Cocktails.",
    images: ["/campaigns/MAIN POSTER GOA AFTER EIGHT.jpg"],
  },
};

export default function GoaAfterEightPage() {
  // --- AEO (Answer Engine Optimization) STRUCTURED DATA ---
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "GOA AFTER EIGHT",
    "description": "An exclusive Deep House event inside the architectural cave of GoaSaya. Featuring Buy 1 Get 1 Free Cocktails.",
    "startDate": "2026-08-07T21:00:00+07:00",
    "endDate": "2026-08-08T02:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "GoaSaya PIK 2",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tangerang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    },
    "offers": {
      "@type": "Offer",
      "description": "RSVP Recommended. Includes Buy 1 Get 1 Free Cocktails on Friday.",
      "availability": "https://schema.org/LimitedAvailability"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <GoaAfterEightClient />
    </>
  );
}