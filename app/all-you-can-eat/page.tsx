import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AycePage = dynamic(() => import('@/components/pages/Campaigns/AllYouCanEat'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Premium All You Can Eat Lunch in PIK 2 | GOASAYA",
  description: "Experience 'Lunch Like No Other'. Premium All You Can Eat (AYCE) at GoaSaya PIK 2 for just IDR 318.000. Enjoy up to 22 Asian Progressive dishes from 11:00 to 15:00.",
  alternates: { canonical: `${SITE_URL}/all-you-can-eat` },
  openGraph: {
    title: "Premium All You Can Eat Lunch | GOASAYA PIK 2",
    description: "Lunch Like No Other. IDR 318.000 for up to 22 menus. 2 hours ordering, but stay as long as you like inside our aesthetic sand cave.",
    url: `${SITE_URL}/all-you-can-eat`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/goasaya-all-you-can-eat.webp`,
        width: 1080,
        height: 1350,
        alt: "GoaSaya All You Can Eat Lunch Promo PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function AllYouCanEatServer() {
  // AEO: FAQ Schema for AI Search Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is the All You Can Eat at GoaSaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The All You Can Eat lunch at GoaSaya is IDR 318,000 per person."
        }
      },
      {
        "@type": "Question",
        "name": "What time is the All You Can Eat lunch available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AYCE lunch is available every day from 11:00 AM to 15:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a time limit for the AYCE at GoaSaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is a 2-hour limit for ordering food, but guests are welcome to stay and enjoy the venue for as long as they like."
        }
      },
      {
        "@type": "Question",
        "name": "How many dishes are included in the AYCE menu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guests can explore up to 22 signature Asian Progressive menus during the All You Can Eat lunch."
        }
      }
    ]
  };

  // GEO: Event Schema to capture "Promo / Event" local searches
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Lunch Like No Other: Premium AYCE at GoaSaya",
    "description": "Premium All You Can Eat lunch experience featuring 22 Asian Progressive menus inside PIK 2's iconic sand cave.",
    "image": `${SITE_URL}/goasaya-all-you-can-eat.webp`,
    "startDate": "2026-08-01T11:00:00+07:00",
    "endDate": "2026-08-31T15:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "GoaSaya",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PIK 2",
        "addressLocality": "Tangerang",
        "addressRegion": "Banten",
        "postalCode": "15214",
        "addressCountry": "ID"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "318000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-08-01T11:00:00+07:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      
      <AycePage />
    </>
  );
}