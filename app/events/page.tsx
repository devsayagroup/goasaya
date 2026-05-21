import type { Metadata } from "next";
import PublicEventsView from "@/components/pages/EventPage"; // Adjust path if needed
import { EVENTS } from "@/lib/event-data"; // Adjust path to where your EVENTS array is stored

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Upcoming Events & Curated Experiences | GOASAYA PIK 2",
  description: "Discover curated happenings at GoaSaya. Reserve your table for exclusive guest chef takeovers, tasting menus, and ambient DJ nights in PIK 2.",
  keywords: [
    "GoaSaya Events",
    "Upcoming Events PIK 2",
    "Guest Chef Dinner Jakarta",
    "Live DJ Restaurant PIK",
    "Fine Dining Events Jakarta",
    "Special Menu PIK 2"
  ],
  alternates: {
    canonical: `${SITE_URL}/events`, 
  },
  openGraph: {
    title: "Curated Happenings & Events | GOASAYA",
    description: "Reserve your table for exclusive culinary events and ambient nights at GoaSaya.",
    url: `${SITE_URL}/events`, 
    siteName: "GoaSaya",
    images: [
      {
        url: `${SITE_URL}/events/cave-party.jpeg`, 
        width: 1200,
        height: 630,
        alt: "GoaSaya Upcoming Events PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function EventsPage() {
  // Dynamically map your EVENTS array into Google's structured data format
  const eventsJsonLd = EVENTS.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.homedesc,
    "image": `${SITE_URL}${event.image}`,
    "url": `${SITE_URL}/events/${event.slug}`,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "GoaSaya PIK 2",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "PIK 2",
        "addressRegion": "Jakarta",
        "addressCountry": "ID"
      }
    }
  }));

  return (
    <>
      {/* Inject the dynamic array of events into the DOM for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }} />
      
      {/* Pass the data to the client view */}
      <PublicEventsView events={EVENTS} />
    </>
  );
}