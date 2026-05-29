import { Metadata } from "next";
import EventInquiryClient from "@/components/pages/EventInquiryPage";

export const metadata: Metadata = {
  title: "Event Inquiry & Private Dining | GOASAYA",
  description: "Host your exclusive event, corporate gathering, or private celebration at GOASAYA. Fill out our inquiry form and let our concierge bring your vision to life.",
  alternates: {
    canonical: "https://www.goasaya.com/event-inquiry",
  },
  openGraph: {
    title: "Host Your Event at GOASAYA",
    description: "Book our subterranean sanctuary for your next premium gathering or private dining experience.",
    url: "https://www.goasaya.com/event-inquiry",
    siteName: "GOASAYA",
    images: [
      {
        url: "/images/webp/goa6.webp", // Ensure this path points to a beautiful wide shot of the restaurant
        width: 1200,
        height: 630,
        alt: "GOASAYA Event Space",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Inquiry | GOASAYA",
    description: "Book our subterranean sanctuary for your next premium gathering.",
    images: ["/images/webp/goa6.webp"],
  },
};

export default function EventInquiryPage() {
  return <EventInquiryClient />;
}