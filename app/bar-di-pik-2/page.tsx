import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BarDiPik2View = dynamic(() => import('@/components/pages/SEO/BarDiPIK2'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Bar & Hangout Spot Terbaik di PIK 2 | GOASAYA",
  description: "Cari bar atau tempat hangout di PIK 2? GoaSaya punya dua konsep: After Eight, bar dan lounge eksklusif dengan DJ set, dan 1% Lounge, KTV room privat untuk acara dan hangout bareng teman.",
  alternates: { canonical: `${SITE_URL}/bar-di-pik-2` },
  openGraph: {
    title: "Bar & Hangout Spot Terbaik di PIK 2 | GOASAYA",
    description: "Dua konsep, satu kawasan. After Eight untuk bar dan lounge malam, 1% Lounge untuk KTV privat dan acara. Temukan tempat hangout di PIK 2 yang paling cocok buat kamu.",
    url: `${SITE_URL}/bar-di-pik-2`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/seo/bar-di-pik-2.webp`,
        width: 1200,
        height: 630,
        alt: "Bar dan Hangout Spot di PIK 2 - GoaSaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function BarDiPik2Server() {
  // GEO: WebPage with hasPart pointing to the two owned concepts
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bar & Hangout Spot di PIK 2 - GoaSaya",
    "url": `${SITE_URL}/bar-di-pik-2`,
    "description": "Dua konsep hangout dan bar di PIK 2 dari GoaSaya: After Eight dan 1% Lounge.",
    "hasPart": [
      {
        "@type": "BarOrPub",
        "name": "GoaSaya After Eight",
        "url": `${SITE_URL}/after-eight`,
        "description": "Bar dan lounge eksklusif dengan pencahayaan merah, DJ set, dan signature cocktails, buka setiap malam pukul 20.00–02.00 di PIK 2."
      },
      {
        "@type": "EntertainmentBusiness",
        "name": "1% Lounge",
        "url": `${SITE_URL}/one-percent-lounge`,
        "description": "KTV room privat dan ruang acara di PIK 2, cocok untuk hangout bareng teman, gathering, atau private event."
      }
    ]
  };

  // AEO: FAQ Schema — must mirror the visible <details> FAQ on the page exactly
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Rekomendasi bar di PIK 2 yang bagus di mana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya After Eight adalah bar dan lounge eksklusif di PIK 2, buka setiap malam pukul 20.00 dengan pencahayaan merah, DJ set, dan signature cocktails."
        }
      },
      {
        "@type": "Question",
        "name": "Tempat hangout di PIK 2 selain restoran apa saja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya menghadirkan dua konsep hangout di PIK 2: After Eight untuk suasana bar dan lounge malam, serta 1% Lounge untuk KTV room privat dan acara bareng teman atau keluarga."
        }
      },
      {
        "@type": "Question",
        "name": "Apa bedanya After Eight dan 1% Lounge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After Eight adalah konsep bar dan lounge terbuka dengan DJ set dan cocktail, sementara 1% Lounge adalah ruang KTV privat yang lebih cocok untuk grup kecil, ulang tahun, atau acara khusus."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah perlu reservasi untuk hangout di GoaSaya PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reservasi sangat disarankan, terutama untuk After Eight di malam weekend dan untuk KTV room di 1% Lounge, karena kapasitas terbatas."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BarDiPik2View />
    </>
  );
}