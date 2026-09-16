// app/reservation/page.tsx
import { Metadata } from "next";
import ReservationClient from "./ReservationClient";

export const metadata: Metadata = {
  title: "Book a Table | GoaSaya PIK 2",
  description: "Reserve your dining experience at GoaSaya. Step into our iconic sand cave-inspired destination and secure your table for progressive Asian cuisine in PIK 2.",
  alternates: {
    canonical: "https://www.goasaya.com/reservation"
  },
  openGraph: {
    title: "Book a Table | GoaSaya PIK 2",
    description: "Reserve your dining experience at GoaSaya in Entertainment District PIK 2.",
    url: "https://www.goasaya.com/reservation",
    siteName: "GoaSaya",
    locale: "en_US",
    type: "website",
    // Make sure you have a good OG image in your public folder!
    images: [{ url: "https://www.goasaya.com/og-image.jpg" }] 
  }
};

export default function ReservationPage() {
  // Structured Data for Generative Engine Optimization (GEO/AEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "GoaSaya",
    "image": "https://www.goasaya.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Entertainment District 2, Jl HR Jl. Rasuna Said, Salembaran",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15214",
      "addressCountry": "ID"
    },
    "telephone": "0813-3838-2845",
    "acceptsReservations": "True",
    "url": "https://www.goasaya.com/reservation",
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.goasaya.com/reservation",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "FoodEstablishmentReservation"
      }
    }
  };

  return (
    <>
      {/* Inject the Schema invisibly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Load your Client Component with the iframe */}
      <ReservationClient />
    </>
  );
}