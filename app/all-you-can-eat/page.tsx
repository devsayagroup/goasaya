// import type { Metadata } from "next";
// import dynamic from "next/dynamic";

// const AycePage = dynamic(() => import('@/components/pages/Campaigns/AllYouCanEat'), { ssr: true });

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

// export const metadata: Metadata = {
//   // UPDATED: Exact keyword match in the Title
//   title: "AYCE di PIK 2: Premium All You Can Eat | GOASAYA",
//   // UPDATED: Conversational Indonesian intent in the Description
//   description: "Cari restoran AYCE di PIK 2? Nikmati pengalaman Premium All You Can Eat (AYCE) di GoaSaya PIK 2 hanya Rp 318.000 untuk 22 menu Asian Progressive.",
//   alternates: { canonical: `${SITE_URL}/all-you-can-eat` },
//   openGraph: {
//     title: "AYCE di PIK 2 | GOASAYA Lunch Promo",
//     description: "Cari AYCE di PIK? Nikmati 22 menu Asian Progressive sepuasnya hanya Rp 318.000. Waktu pesan 2 jam, nongkrong sepuasnya di dalam aesthetic sand cave.",
//     url: `${SITE_URL}/all-you-can-eat`,
//     siteName: "GOASAYA",
//     images: [
//       {
//         url: `${SITE_URL}/campaigns/all-you-can-eat.webp`,
//         width: 1080,
//         height: 1350,
//         alt: "Promo AYCE di PIK 2 GoaSaya",
//       },
//     ],
//     locale: "id_ID",
//     type: "website",
//   },
// };

// export default function AllYouCanEatServer() {
//   // AEO: FAQ Schema updated to answer EXACT local search queries
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": "Rekomendasi restoran AYCE di PIK 2?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "GoaSaya menawarkan pengalaman Premium AYCE di PIK 2. Anda bisa menikmati hingga 22 menu Asian Progressive di dalam arsitektur goa pasir yang estetik."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Berapa harga promo AYCE di GoaSaya PIK 2?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Harga All You Can Eat (AYCE) lunch di GoaSaya adalah Rp 318.000 per orang, berlaku setiap hari dari jam 11:00 hingga 15:00."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Berapa lama batas waktu makan AYCE di PIK GoaSaya?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Terdapat batas waktu pemesanan (ordering time) selama 2 jam, namun tamu dipersilakan untuk stay dan nongkrong selama yang diinginkan."
//         }
//       }
//     ]
//   };

//   // GEO: Event Schema updated with local phrasing
//   const eventSchema = {
//     "@context": "https://schema.org",
//     "@type": "Event",
//     "name": "Promo Premium AYCE di PIK 2: Lunch Like No Other",
//     "description": "Premium All You Can Eat (AYCE) lunch experience featuring 22 Asian Progressive menus inside PIK 2's iconic sand cave.",
//     "image": `${SITE_URL}/goasaya-all-you-can-eat.webp`,
//     "startDate": "2026-08-01T11:00:00+07:00",
//     "endDate": "2026-08-31T15:00:00+07:00",
//     "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
//     "eventStatus": "https://schema.org/EventScheduled",
//     "location": {
//       "@type": "Place",
//       "name": "GoaSaya",
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "PIK 2",
//         "addressLocality": "Tangerang",
//         "addressRegion": "Banten",
//         "postalCode": "15214",
//         "addressCountry": "ID"
//       }
//     },
//     "offers": {
//       "@type": "Offer",
//       "price": "318000",
//       "priceCurrency": "IDR",
//       "availability": "https://schema.org/InStock",
//       "validFrom": "2026-08-01T11:00:00+07:00"
//     }
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
//       />
      
//       <AycePage />
//     </>
//   );
// }

import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AycePage = dynamic(() => import('@/components/pages/Campaigns/AllYouCanEat'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "AYCE di PIK 2: Premium All You Can Eat | GOASAYA",
  description: "Cari restoran AYCE di PIK 2? Nikmati pengalaman Premium All You Can Eat (AYCE) di GoaSaya PIK 2 hanya Rp 318.000 untuk 22 menu Asian Progressive. Mulai 18 Agustus.",
  alternates: { canonical: `${SITE_URL}/all-you-can-eat` },
  openGraph: {
    title: "AYCE di PIK 2 | GOASAYA Lunch Promo",
    description: "Cari AYCE di PIK 2? Nikmati 22 menu Asian Progressive sepuasnya hanya Rp 318.000. Waktu pesan 2 jam, nongkrong sepuasnya di dalam aesthetic sand cave.",
    url: `${SITE_URL}/all-you-can-eat`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/campaigns/all-you-can-eat.webp`,
        width: 1080,
        height: 1350,
        alt: "Promo AYCE di PIK 2 GoaSaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function AllYouCanEatServer() {
  // AEO: FAQ Schema — must mirror the visible <details> FAQ on the page exactly
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Rekomendasi restoran AYCE di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya menawarkan pengalaman Premium AYCE di PIK 2. Anda bisa menikmati hingga 22 menu Asian Progressive di dalam arsitektur goa pasir yang estetik, mulai 18 Agustus."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa harga promo AYCE di GoaSaya PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Harga All You Can Eat (AYCE) di GoaSaya adalah Rp 318.000 per orang, berlaku setiap hari dari jam 11:00 hingga 15:00."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama batas waktu makan AYCE di PIK GoaSaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Terdapat batas waktu pemesanan (ordering time) selama 2 jam, namun tamu dipersilakan untuk stay dan nongkrong selama yang diinginkan."
        }
      },
      {
        "@type": "Question",
        "name": "Menu apa saja yang tersedia di AYCE GoaSaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AYCE GoaSaya menghadirkan 22 menu Asian Progressive, termasuk Gochujang Tuna Tartar, Aburi Wagyu Sushi, Rendang Croquette, dan Chicken Charsiu Bun."
        }
      }
    ]
  };

  // GEO: Offer/Event schema for local "AYCE di PIK" promo searches
  // Note: startDate corrected to actual launch date (18 Aug). endDate omitted since
  // this is an ongoing daily service, not a fixed-window promotion — an incorrect
  // endDate would misrepresent the offer to Google and risks rich-result rejection.
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Promo Premium AYCE di PIK 2: Lunch Like No Other",
    "description": "Premium All You Can Eat (AYCE) lunch experience featuring 22 Asian Progressive menus inside PIK 2's iconic sand cave, available daily 11:00–15:00.",
    "image": `${SITE_URL}/campaigns/all-you-can-eat.webp`,
    "startDate": "2026-08-18T11:00:00+07:00",
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
      "validFrom": "2026-08-18T11:00:00+07:00"
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