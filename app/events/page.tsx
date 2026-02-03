import Head from "../head";
import { getEventIndex } from "@/lib/event-index";
import EventsClient from "@/components/pages/EventPage";

export default async function EventsPage() {
  const events = await getEventIndex();

  return (
    <>
    <Head 
        title= "Events & Private Dining | GOASAYA Luxury Restaurant"
        description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
        url="https://www.goasaya.com"
        keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
        image="https://www.goasaya.com/logo/09.jpg"
    />
    <EventsClient events={events} />
    </>
  );
}
