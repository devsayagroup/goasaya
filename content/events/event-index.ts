import { events } from "@/content/events";
import { EVENT_BOOKINGS } from "@/lib/event-bookings";

export const eventIndex = events.map((e) => {
  const meta = e.meta;
  const booked = EVENT_BOOKINGS[meta.slug] ?? 0;
  const capacity = meta.capacity ?? 0;

  const remainingSeats = Math.max(capacity - booked, 0);

  return {
    slug: meta.slug,
    title: meta.title,
    image: meta.heroImage ?? "",
    homedesc: meta.metaDescription,
    date: meta.date,
    time: meta.time,
    tracking: meta.tracking,
    location: meta.location,

    capacity,
    price: meta.price,

    remainingSeats,
    isFull: capacity > 0 && remainingSeats === 0,
  };
});
