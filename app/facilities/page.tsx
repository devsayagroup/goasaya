// app/facilities/page.tsx
import type { Metadata } from "next";

// Standard import for better LCP (Largest Contentful Paint)
import FacilitiesPage from "@/components/pages/FacilitiesPage";

export const metadata: Metadata = {
  title: "Premium Facilities & VIP Amenities | GOASAYA PIK 2",
  description: "Experience unparalleled comfort at GOASAYA. Discover our premium facilities, including exclusive private dining rooms, The 1% VIP Lounge, and seamless valet services.",
  keywords: [
    "Luxury dining facilities PIK 2",
    "Private dining rooms Jakarta",
    "VIP Lounge PIK 2",
    "Fine dining amenities",
    "Valet parking restaurant PIK 2",
    "Exclusive restaurant facilities",
    "GOASAYA amenities",
    "Premium hospitality Jakarta"
  ],
  openGraph: {
    title: "Premium Facilities & VIP Amenities | GOASAYA",
    description: "From our immersive cave architecture to The 1% VIP Lounge. Explore the exclusive facilities and amenities designed for your comfort at GOASAYA.",
    url: "https://www.goasaya.com/facilities",
    siteName: "GOASAYA",
    images: [
      {
        url: "https://www.goasaya.com/images/webp/V4.webp",
        width: 1200,
        height: 630,
        alt: "GOASAYA Premium Facilities and VIP Lounge",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Facilities & Amenities | GOASAYA",
    description: "Discover the premium facilities at GOASAYA, including private dining rooms and exclusive VIP lounges.",
    images: ["https://www.goasaya.com/images/webp/V4.webp"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/facilities",
  },
};

export default function Facilities() {
  return (
    <main className="bg-[#0a0a0a]">
      <FacilitiesPage />
    </main>
  );
}