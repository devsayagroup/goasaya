// app/spaces/page.tsx (Recommended new location)
import type { Metadata } from "next";

// Standard imports are faster and better for LCP (Largest Contentful Paint)
import Floor1Section from "@/components/sections/Floor1Section";
import Floor2Section from "@/components/sections/Floor2Section";

export const metadata: Metadata = {
  title: "Our Spaces: GoaSaya & The 1% Lounge | PIK 2",
  description: "Take a journey through our meticulously crafted venues. Discover the immersive, cave-inspired Asian dining of GoaSaya on the 1st Floor, and the exclusive 1% Lounge on the 2nd Floor.",
  keywords: [
    "GoaSaya interior",
    "1% Lounge PIK 2",
    "Cave restaurant design",
    "Luxury dining space Jakarta",
    "VIP lounge PIK 2",
    "Immersive restaurant architecture",
    "Fine dining venue PIK 2"
  ],
  openGraph: {
    title: "Our Spaces | GoaSaya & The 1% Lounge",
    description: "From the grounding stone walls of GoaSaya to the private exclusivity of The 1% Lounge. Explore our venues.",
    url: "https://www.goasaya.com/spaces", // Update this if you use /venues instead
    siteName: "GOASAYA",
    images: [
      {
        url: "/rooms/frontview.webp", // Make sure this shows off the interior!
        width: 1200,
        height: 630,
        alt: "The Interior Spaces of GOASAYA and The 1% Lounge",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Spaces | GoaSaya & The 1% Lounge",
    description: "Discover the immersive, cave-inspired dining of GoaSaya and the exclusive 1% Lounge.",
    images: ["https://www.goasaya.com/rooms/frontview.webp"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/spaces",
  },
};

export default function SpacesPage() {
  return (
    <main className="bg-[#0B0502]">
      <Floor1Section />
      <Floor2Section />
    </main>
  );
}