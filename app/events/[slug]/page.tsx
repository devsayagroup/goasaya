import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { EVENTS } from "@/lib/event-data"; // Adjust path to your EVENTS array
import EventDetailView from "@/components/pages/EventDetailsView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

// FIX 1: Type params as a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// FIX 2: Await params inside generateMetadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const event = EVENTS.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    return { title: "Event Not Found | GOASAYA" };
  }

  return {
    title: `${event.title} | GOASAYA PIK 2`,
    description: event.homedesc || `Join us for ${event.title} at GoaSaya PIK 2.`,
    alternates: {
      canonical: `${SITE_URL}/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | GOASAYA`,
      description: event.homedesc,
      url: `${SITE_URL}/events/${event.slug}`,
      siteName: "GoaSaya",
      images: [
        {
          url: `${SITE_URL}${event.image}`,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
  };
}

// FIX 3: Make the component async and await params
export default async function EventPage({ params }: Props) {
  const resolvedParams = await params;
  const event = EVENTS.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.homedesc,
    "image": `${SITE_URL}${event.image}`,
    "url": `${SITE_URL}/events/${event.slug}`,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "startDate": event.date, 
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
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <EventDetailView event={event} />
    </>
  );
}

export function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}