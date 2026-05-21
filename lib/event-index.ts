export interface EventIndexItem {
  id: number;
  slug: string;
  title: string;
  date?: string;
  image: string;
  metaDescription?: string;
  tracking?: string; // ✅ ADD THIS
  availability?: {
    activities: {
      id: string;
      title: string;
      date: string;
      time: string;
      location: string;
      capacity: number;
      remainingSeats: number;
      isFull: boolean;
    }[];
  };
}

import { getEventSlugs, getEventBySlug } from "./events";
import { EVENT_BOOKINGS } from "@/lib/event-bookings";

export function getEventIndex(): EventIndexItem[] {
  const slugs = getEventSlugs();

  return slugs.map((slug) => {
    const event = getEventBySlug(slug);
    if (!event) {
      throw new Error(`Event not found: ${slug}`);
    }

    const meta = event.meta as any;
    const bookingsForEvent = EVENT_BOOKINGS[slug] ?? {};

    // Base fields
    const id = typeof meta?.id === "number" ? meta.id : 0;
    const title = typeof meta?.title === "string" ? meta.title : "";
    const heroImage =
      typeof meta?.heroImage === "string" ? meta.heroImage : "";
    const date =
      typeof meta?.date === "string" ? meta.date : undefined;
    const metaDescription =
      typeof meta?.metaDescription === "string"
        ? meta.metaDescription
        : undefined;
    const tracking = 
  typeof meta?.tracking === "string"
    ? meta.tracking
    : undefined


    return {
      id,
      slug,
      title,
      date,
      image: heroImage,
      metaDescription,
    };
  });
}
