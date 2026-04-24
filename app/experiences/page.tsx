

import type { Metadata } from "next";
import ExperiencePage from "@/components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: "Curated Experiences & Private Dining di PIK 2 | GOASAYA",
  description: "Discover exclusive seasonal tasting menus, weekday privileges, and private dining events crafted within the luxurious cave of GOASAYA PIK 2.",
  keywords: [
    "Private Dining PIK 2",
    "Event Venue Restaurant Jakarta",
    "Corporate Dinner PIK 2",
    "Luxury Event Space Jakarta",
    "Exclusive Dining Experience",
    "Private Restaurant Booking",
    "Tasting Menu PIK 2",
    "GOASAYA Experiences",
    "Fine Dining PIK 2"
  ],
  openGraph: {
    title: "Curated Experiences & Private Events | GOASAYA",
    description: "Host your exclusive events or discover seasonal tasting menus at GOASAYA. Our elegant cave-inspired venue offers intimate settings for unforgettable moments.",
    url: "https://www.goasaya.com/campaigns", // Update to /events if keeping the old URL
    siteName: "GOASAYA",
    images: [
      {
        url: "/rooms/frontview.webp", // Make sure this is a high-res landscape image!
        width: 1200,
        height: 630,
        alt: "GOASAYA Curated Experiences and Private Dining",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Experiences & Private Dining | GOASAYA",
    description: "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings.",
    images: ["https://www.goasaya.com/logo/09.jpg"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/campaigns", // Prevents duplicate content penalties
  },
};

export default function Experiences() {
  return (
    <main>
      <ExperiencePage />
    </main>
  );
}