import { events } from "@/lib/events";
import { OpsEvent } from "@/types/ops";

export function getEventById(eventId: string): OpsEvent | null {
  return events.find(e => e.id === eventId) || null;
}
