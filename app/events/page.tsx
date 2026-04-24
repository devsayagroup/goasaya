// app/events/page.tsx
import type { Metadata } from "next";

// You can uncomment this when you build the new Events page!
// import EventsClient from "@/components/pages/EventsClient"; 

export const metadata: Metadata = {
  title: "Exclusive Events & Private Dining PIK 2 | GOASAYA",
  description: "Host unforgettable moments at GOASAYA. From corporate brand activations and VIP dinners to intimate birthday celebrations in our luxury cave-inspired venue.",
  keywords: [
    "Brand Activation Venue Jakarta",
    "VIP Dinner PIK 2",
    "Private Dining PIK 2",
    "Luxury Birthday Venue Jakarta",
    "Corporate Events Restaurant",
    "Exclusive Event Space PIK 2",
    "Private Restaurant Booking",
    "GOASAYA Events"
  ],
  openGraph: {
    title: "Exclusive Events & Private Dining | GOASAYA",
    description: "Elevate your next gathering. From corporate brand activations to intimate VIP celebrations, host your exclusive events at GOASAYA.",
    url: "https://www.goasaya.com/events",
    siteName: "GOASAYA",
    images: [
      {
        url: "https://www.goasaya.com/images/webp/V3.webp", // Make sure this image shows off a beautiful table setup or the private lounge!
        width: 1200,
        height: 630,
        alt: "GOASAYA Private Events and VIP Dining",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusive Events & Private Dining | GOASAYA",
    description: "Host your exclusive events at GOASAYA — perfect for VIP dinners, brand activations, and celebrations.",
    images: ["https://www.goasaya.com/images/webp/V3.webp"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/events",
  },
};

export default function EventsPage() {
  return (
    // Added a min-h-screen and a dark background so it doesn't look broken if someone visits it before you finish building it
    <main className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      {/* ✅ FUTURE DEVELOPMENT PLACEHOLDER
        When you are ready, just uncomment your client component below!
        
        <EventsClient /> 
      */}
      
      <div className="text-center"> {/* Kept invisible (opacity-0) so it doesn't mess with your live site, but it's here for structure */}
         <h1 className="text-white font-style text-4xl">Private Events</h1>
      </div>
    </main>
  );
}