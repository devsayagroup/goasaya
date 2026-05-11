import type { Metadata } from 'next';
import WeekdaySpecialsPage from '@/components/pages/Campaigns/WeekdaySpecialsPage';

export const metadata: Metadata = {
  title: 'Weekday Specials & Promos di PIK 2 | GOASAYA',
  description: 'Elevate your weekdays at GOASAYA PIK 2. Enjoy daily exclusive offers including Free Flow Cocktails, Buy 1 Get 1 Wine, Corona Buckets, and our signature Steak pairing.',
  keywords: [
    'Promo Restoran PIK 2', 
    'Weekday Specials Jakarta', 
    'Free Flow Cocktails PIK 2', 
    'Buy 1 Get 1 Wine Jakarta', 
    'Promo Lunch PIK 2', 
    'Promo Dinner PIK 2',
    'GOASAYA Promos',
    'Tempat Nongkrong PIK 2'
  ],
  alternates: {
    // STRICT CANONICAL
    canonical: 'https://www.goasaya.com/experiences/weekday-specials',
  },
  openGraph: {
    title: 'Weekday Specials & Promos di PIK 2 | GOASAYA',
    description: 'Discover curated deals for every day of the week at GOASAYA. From Matcha Mondays to TGIF Steak pairings, reserve your table today.',
    url: 'https://www.goasaya.com/experiences/weekday-specials',
    siteName: 'GOASAYA',
    images: [
      {
        url: '/promo/WS-1.webp',
        width: 1200,
        height: 630,
        alt: 'GOASAYA Weekday Specials and Promos in PIK 2',
      },
    ],
    locale: 'id_ID', 
    type: 'website',
  },
};

export default function WeekdaySpecials() {

  // 1. RESTAURANT & OFFER CATALOG SCHEMA
  const promoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.goasaya.com/experiences/weekday-specials",
    "name": "GoaSaya",
    "url": "https://www.goasaya.com/experiences/weekday-specials",
    "telephone": "+6281338382845",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Entertainment District PIK 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
      "addressLocality": "Kabupaten Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15214",
      "addressCountry": "ID"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weekday Specials",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Free Flow Cocktails",
          "description": "Exclusive free flow cocktail packages available during weekdays."
        },
        {
          "@type": "Offer",
          "name": "Buy 1 Get 1 Wine",
          "description": "Buy 1 Get 1 Free on select premium wines."
        },
        {
          "@type": "Offer",
          "name": "Signature Steak Pairing",
          "description": "Special pricing on our signature steak paired with wine or cocktails."
        }
      ]
    }
  };

  // 2. FAQ SCHEMA
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah ada promo restoran atau happy hour di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, GoaSaya PIK 2 menawarkan Weekday Specials setiap hari kerja. Promo meliputi Free Flow Cocktails, Buy 1 Get 1 Wine, hingga penawaran spesial untuk menu Steak andalan kami."
        }
      },
      {
        "@type": "Question",
        "name": "Kapan promo Weekday Specials GoaSaya berlaku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Promo berlaku dari hari Senin hingga Jumat (TGIF), dengan kurasi penawaran yang berbeda setiap harinya seperti Matcha Mondays dan paket akhir pekan."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(promoJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <WeekdaySpecialsPage />
    </>
  );
}