// import { getEventSlugs, getEventBySlug } from "./events";
// import { EventMeta } from "@/content/events";

// export interface EventIndexItem {
//   id: number;
//   slug: string;
//   title: string;
//   date?: string;
//   image: string;
//   metaDescription?: string;
// }

// export async function getEventIndex(): Promise<EventIndexItem[]> {
//   const slugs = getEventSlugs();

//   const items = await Promise.all(
//     slugs.map(async (slug) => {
//       const event = await getEventBySlug(slug);
//       if (!event) return null;

//       const meta = event.meta as EventMeta;

//       return {
//         id: meta.id,
//         slug,
//         title: meta.title,
//         date: meta.date,
//         image: meta.heroImage,
//         homedesc: meta.metaDescription,
//       };
//     })
//   );

//   return items
//     .filter((item): item is EventIndexItem => item !== null)
//     .sort((a, b) => b.id - a.id);
// }

// import { getEventSlugs, getEventBySlug } from "./events";

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

// export function getEventIndex(): EventIndexItem[] {
//   const slugs = getEventSlugs();

//   return slugs.map((slug) => {
//     const event = getEventBySlug(slug);
//     if (!event) {
//       throw new Error(`Event not found: ${slug}`);
//     }

//     const meta = event.meta;

//     // ✅ Safe extraction (NO CASTING)
//     const id =
//       typeof (meta as any)?.id === "number"
//         ? (meta as any).id
//         : 0;

//     const title =
//       typeof (meta as any)?.title === "string"
//         ? (meta as any).title
//         : "";

//     const heroImage =
//       typeof (meta as any)?.heroImage === "string"
//         ? (meta as any).heroImage
//         : "";

//     const date =
//       typeof (meta as any)?.date === "string"
//         ? (meta as any).date
//         : undefined;

//     const metaDescription =
//       typeof (meta as any)?.metaDescription === "string"
//         ? (meta as any).metaDescription
//         : undefined;

//     return {
//       id,
//       slug,
//       title,
//       date,
//       image: heroImage,
//       metaDescription,
//     };
//   });
// }
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
