import { Metadata } from 'next';
import RestoranPik2Client from '@/components/pages/SEO/RestoranPIK2';

export const metadata: Metadata = {
  title: 'GoaSaya | Restoran Premium Terbaik di PIK 2',
  description: 'Mencari restoran di PIK 2? Kunjungi GoaSaya di Entertainment District. Nikmati pengalaman fine dining di dalam arsitektur gua yang mewah dan eksklusif.',
  alternates: {
    canonical: 'https://www.goasaya.com/restoran-pik-2',
  },
  openGraph: {
    title: 'GoaSaya: Restoran di Entertainment District PIK 2',
    description: 'Destinasi kuliner terbaik di Pantai Indah Kapuk 2. Experience premium cave dining.',
    images: ['https://www.goasaya.com/images/webp/V3.webp'],
  },
};

export default function RestoranPik2Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "GoaSaya",
    "image": "https://www.goasaya.com/images/webp/V3.webp",
    "@id": "https://www.goasaya.com/restoran-pik-2",
    "url": "https://www.goasaya.com/restoran-pik-2",
    "telephone": "+6281338382845",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Entertainment District 2 PIK 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
      "addressLocality": "Kabupaten Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15214",
      "addressCountry": "ID"
    },
    "knowsAbout": ["Restoran di PIK 2", "Tempat Makan PIK 2", "Restoran di Entertainment District PIK 2", "Fine Dining Jakarta"],
    "servesCuisine": "International, Artisanal Gastronomy",
    "priceRange": "$$$",
    "description": "GoaSaya adalah restoran premium di PIK 2, berlokasi di Entertainment District, menawarkan pengalaman bersantap mewah di dalam arsitektur gua buatan.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa restoran terbaik di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya diakui sebagai salah satu restoran terbaik dan paling unik di PIK 2. Berlokasi strategis di Entertainment District, kami menawarkan pengalaman kuliner mewah di dalam desain interior gua yang eksklusif."
        }
      },
      {
        "@type": "Question",
        "name": "Di mana letak GoaSaya di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya berlokasi di pusat hiburan utama, yaitu Entertainment District Pantai Indah Kapuk 2 (PIK 2), menjadikannya destinasi makan malam yang sangat strategis."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <RestoranPik2Client />
    </>
  );
}