import { Metadata } from "next";
import HouseMusicClient from "@/components/pages/Campaigns/HouseMusicPage";

// --- GEO & SEO METADATA ---
export const metadata: Metadata = {
  title: "The First Ever House Music in GOA | PIK 2 Nightlife Event",
  description: "Join us for July's final beat echoing through the cave. The first-ever House Music event at GoaSaya, PIK 2, Tangerang. DJ Firhan, Buy 1 Get 1 Free Cocktails. RSVP Only.",
  alternates: {
    canonical: "https://www.goasaya.com/campaigns/house-music",
  },
  openGraph: {
    title: "House Music in GOA | Friday, 31 July",
    description: "Experience the ultimate cave party in PIK 2. Buy 1 Get 1 Free Cocktails, featuring DJ Firhan. RSVP to secure your entry.",
    url: "https://www.goasaya.com/campaigns/house-music",
    siteName: "GOASAYA",
    images: [
      {
        url: "/campaigns/MAIN POSTER HOUSE MUSIC IN GOA.jpg.jpg", // The KV poster
        width: 1080,
        height: 1920,
        alt: "The First Ever House Music in GOA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Music in GOA | PIK 2 Nightlife",
    description: "July's Final Beat Echoes Through The Cave. B1G1 Cocktails & DJ Firhan.",
    images: ["/campaigns/MAIN POSTER HOUSE MUSIC IN GOA.jpg.jpg"],
  },
};

export default function HouseMusicPage() {
  // --- AEO (Answer Engine Optimization) STRUCTURED DATA ---
  // This explicitly feeds AI bots exact details about the event.
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "The First Ever House Music in GOA",
    "description": "July's final beat echoes through the cave. An exclusive house music event at GoaSaya featuring DJ Firhan and Buy 1 Get 1 Free Cocktails.",
    "startDate": "2026-07-31T21:00:00+07:00",
    "endDate": "2026-08-01T02:00:00+07:00",
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
    "performer": {
      "@type": "Person",
      "name": "DJ Firhan"
    },
    "offers": {
      "@type": "Offer",
      "description": "RSVP Required. Includes Buy 1 Get 1 Free Cocktails.",
      "availability": "https://schema.org/LimitedAvailability"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <HouseMusicClient />
    </>
  );
}