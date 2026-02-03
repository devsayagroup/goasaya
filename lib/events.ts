// import eventsJson from "./event-ops.json";
// import { OpsEvent } from "@/types/ops";

// export const events: OpsEvent[] = eventsJson as OpsEvent[];
 
// import { events } from "@/content/events";

// export function getEventSlugs() {
//   return events.map(e => e.slug);
// }

// export async function getEventBySlug(slug: string) {
//   const event = events.find(e => e.slug === slug);
//   if (!event) return null;
//   return event;
// }

import { events } from "@/content/events";

export function getEventSlugs(): string[] {
  return events.map(e => e.slug);
}

export function getEventBySlug(slug: string) {
  return events.find(e => e.slug === slug) ?? null;
}
