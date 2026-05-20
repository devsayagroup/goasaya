import type { Metadata } from "next";
import EventsView from "@/components/pages/SEO/EventsView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Private Events & Corporate Venue PIK 2 | GoaSaya",
  description: "Host your next milestone or corporate gathering at GoaSaya PIK 2. An exclusive, cave-inspired event space offering bespoke dining, mixology, and total privacy.",
  keywords: [
    "Private Dining PIK 2",
    "Corporate Event Space Jakarta",
    "Luxury Venue Hire PIK 2",
    "Wedding Reception Venue PIK",
    "Exclusive Buyout Restaurant Jakarta",
    "VIP Lounge PIK 2",
    "Brand Activation Venue Indonesia"
  ],
  alternates: {
    canonical: `${SITE_URL}/events`, 
  },
  openGraph: {
    title: "Host the Extraordinary: Private Events | GoaSaya",
    description: "From intimate VIP dinners to full exclusive buyouts. Explore the premier cave-inspired event space in PIK 2.",
    url: `${SITE_URL}/events`, 
    siteName: "GoaSaya",
    images: [
      {
        url: "/images/articles/birthday/2.webp", // Upload a wide shot of the empty lounge/cave
        width: 1200,
        height: 630,
        alt: "GoaSaya Private Events and Corporate Venue PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function EventsPage() {
  // 1. Event Venue Schema (Massive local SEO signal)
  const venueJsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "GoaSaya Private Events",
    "url": `${SITE_URL}/events`,
    "description": "Exclusive, cave-inspired venue in PIK 2 available for corporate events, private dining, brand activations, and milestone celebrations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "PIK 2",
      "addressRegion": "Jakarta",
      "addressCountry": "ID"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private Dining", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Exclusive Buyout", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bespoke Catering", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dedicated Mixologist", "value": true }
    ]
  };

  // 2. FAQ Schema for High-Intent Commercial Queries
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does GoaSaya offer exclusive restaurant buyouts for events in PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, GoaSaya offers full venue buyouts for brand activations, large corporate events, and wedding receptions, providing total privacy within our luxury cave environment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a private dining space for a birthday or corporate dinner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer semi-private and fully private dining configurations tailored to intimate milestone birthdays, VIP client dinners, and executive board meetings."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <EventsView />
    </>
  );
}