// // import { events } from "@/content/events";

// // export const eventIndex = events.map((e) => {
// //   const meta = e.meta;

// //   return {
// //     id: meta.id,
// //     slug: meta.slug,
// //     title: meta.title,

// //     image: meta.heroImage ?? "",
// //     homedesc: meta.metaDescription,

// //     date: meta.date,
// //     time: meta.time,

// //     tracking: meta.tracking,

// //     availability: meta.availability,
// //   };
// // });

// import { events } from "@/content/events";
// import { EVENT_BOOKINGS } from "@/lib/event-bookings";

// export const eventIndex = events.map((e) => {
//   const meta = e.meta;
//   const bookings = EVENT_BOOKINGS[meta.slug] ?? {};

//   return {
//     id: meta.id,
//     slug: meta.slug,
//     title: meta.title,
//     image: meta.heroImage ?? "",
//     homedesc: meta.metaDescription,
//     date: meta.date,
//     time: meta.time,
//     tracking: meta.tracking,

//     availability: meta.availability
//       ? {
//           activities: meta.availability.activities.map((a) => {
//             const booked = bookings[a.id] ?? 0;
//             const remainingSeats = Math.max(
//               a.capacity - booked,
//               0
//             );

//             return {
//               ...a,
//               price: a.price,
//               remainingSeats,
//               isFull: remainingSeats === 0,
//             };
//           }),
//         }
//       : undefined,
//   };
// });


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
