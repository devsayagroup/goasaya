import Head from "../head";
import EventsPage from "@/components/pages/EventPage";
export default function Events() {
  return (
    <>
        <Head 
            title= "Events & Private Dining | GOASAYA Luxury Restaurant"
            description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
            url="https://www.goasaya.com"
            keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
            image="https://www.goasaya.com/logo/09.jpg"
        />
        <EventsPage/>
    </>
  );
}