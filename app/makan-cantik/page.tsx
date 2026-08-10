import type { Metadata } from "next";
import dynamic from "next/dynamic";

const MakanCantikView = dynamic(() => import('@/components/pages/SEO/MakanCantikPIK'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Tempat Makan Cantik & Estetik di PIK 2 | GOASAYA",
  description: "Cari spot makan cantik di PIK 2? Nikmati pengalaman Asian Progressive dining di dalam goa pasir eksklusif. Sempurna untuk OOTD, arisan, dan hangout estetik.",
  alternates: { canonical: `${SITE_URL}/makan-cantik` },
  openGraph: {
    title: "Tempat Makan Cantik Paling Estetik di PIK 2 | GOASAYA",
    description: "Nikmati Asian Progressive dining di dalam goa pasir eksklusif. Sempurna untuk OOTD, arisan, dan hangout estetik di PIK 2.",
    url: `${SITE_URL}/makan-cantik`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/rooms/frontview.webp`, // Replace with your best bright/aesthetic interior shot
        width: 1200,
        height: 630,
        alt: "Spot Makan Cantik dan Estetik di GoaSaya PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function MakanCantikPage() {
  // AEO: FAQ Schema in Bahasa Indonesia to capture local AI Search traffic
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Di mana tempat makan cantik dan estetik di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya adalah tempat makan cantik paling estetik di PIK 2, menawarkan pengalaman dining unik di dalam arsitektur goa pasir (sand cave) yang sangat Instagramable."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah GoaSaya PIK 2 cocok untuk arisan dan spot foto OOTD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sangat cocok. GoaSaya dirancang khusus dengan lighting dan interior estetik untuk spot foto OOTD. Kami juga melayani reservasi grup untuk arisan, ulang tahun, dan private gathering."
        }
      },
      {
        "@type": "Question",
        "name": "Menu apa yang disajikan di GoaSaya PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya menyajikan menu Asian Progressive, menggabungkan cita rasa autentik Asia dengan teknik modern, disajikan dengan plating yang sangat cantik dan premium."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana dress code untuk ke GoaSaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dress code di GoaSaya adalah Smart Casual. Kami menyarankan tamu untuk tampil rapi (makan cantik) agar serasi dengan vibe elegan dan estetik dari venue kami."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MakanCantikView />
    </>
  );
}