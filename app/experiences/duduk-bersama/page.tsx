import { Metadata } from "next";
// Make sure to adjust your client component import path to match your folder structure
import DudukBersamaClient from "@/components/pages/Campaigns/DudukBersamaPage";

export const metadata: Metadata = {
  title: "Duduk Bersama - Makan Tengah Mewah di PIK 2 | GoaSaya",
  description: "Nikmati set menu eksklusif Duduk Bersama untuk 4 orang (IDR 695.000) di dalam mahakarya arsitektur gua GoaSaya PIK 2. Tersedia 6 - 13 Juli 2026.",
  keywords: [
    "Restoran eksklusif PIK 2",
    "Makan keluarga PIK 2",
    "GoaSaya experiences",
    "Fine dining PIK 2",
    "Makan tengah Jakarta",
    "Libur sekolah Jakarta"
  ],
  openGraph: {
    title: "Duduk Bersama | GoaSaya PIK 2",
    description: "Set menu premium 4 pax hanya IDR 695.000. Tersedia eksklusif 6-13 Juli 2026.",
    url: "https://goasaya.com/experiences/duduk-bersama",
    siteName: "GoaSaya",
    images: [
      {
        url: "https://goasaya.com/assets/images/duduk-bersama-og.jpg",
        width: 1200,
        height: 630,
        alt: "Duduk Bersama Feast at GoaSaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function DudukBersamaPage() {
  // JSON-LD Schema structured for Generative AI parsing (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SaleEvent",
    "name": "Duduk Bersama - GoaSaya",
    "description": "Paket makan tengah premium untuk 4 orang di dalam restoran gua GoaSaya PIK 2.",
    "startDate": "2026-07-06T09:00:00+07:00",
    "endDate": "2026-07-13T22:00:00+07:00",
    "location": {
      "@type": "Restaurant",
      "name": "GoaSaya",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PIK 2",
        "addressLocality": "Tangerang",
        "addressRegion": "Banten",
        "addressCountry": "ID"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Set Menu Duduk Bersama (4 Pax)",
      "price": "695000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-07-06",
      "validThrough": "2026-07-13"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#111111] overflow-hidden">
        <DudukBersamaClient />
      </main>
    </>
  );
}