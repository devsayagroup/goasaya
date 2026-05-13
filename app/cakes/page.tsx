// app/custom-cake-order/page.tsx
import type { Metadata } from "next";
import CustomCakeView from "@/components/pages/SEO/WholeCakes";

const SITE_URL = "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Custom Cake Order & Signature Whole Cakes PIK 2 | GoaSaya",
  description: "Commission bespoke custom cakes or pre-order from our Signature Whole Cake collection (Manjari, Golden, Bumblebee) in PIK 2. Cave-crafted edible art.",
  keywords: [
    "Custom Cake Order PIK 2",
    "Signature Whole Cakes Jakarta",
    "Order Whole Cake PIK 2",
    "Wedding Cake Designer Jakarta",
    "Manjari Chocolate Cake PIK",
    "Bespoke Cake Order Jakarta",
    "Premium Patisserie PIK 2",
    "Event Cakes GoaSaya",
  ],
  alternates: {
    canonical: `${SITE_URL}/cakes`, 
  },
  openGraph: {
    title: "Edible Art: Custom & Signature Cakes | GoaSaya PIK 2",
    description: "Discover our acclaimed Signature Whole Cakes or collaborate with our pastry chefs for a time-honored custom centerpiece in PIK 2.",
    url: `${SITE_URL}/cakes`, 
    siteName: "GoaSaya",
    images: [
      {
        url: "/images/cakes/whole-cakes.webp", 
        width: 1200,
        height: 630,
        alt: "GoaSaya Custom and Signature Cake Collection PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function CustomCakeOrderPage() {
  // 1. Service Schema (Updated to include the 3 Signature Cakes and Custom Service)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Cake Design and Signature Patisserie",
    "provider": {
      "@type": "Restaurant",
      "name": "GoaSaya",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "PIK 2",
        "addressRegion": "Jakarta"
      }
    },
    "areaServed": "Jakarta",
    "description": "Premium patisserie service offering time-intensive bespoke custom cake designs for milestone events, alongside a curated Signature Collection of ready-to-order whole cakes including the Manjari Chocolate Cake, The Golden Cake, and The Bumblebee Cake."
  };

  // 2. FAQ Schema (Updated to match the new timeline rules from the UI)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far in advance should I order a custom wedding or event cake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bespoke custom cakes are highly intricate and demand extensive artisanal focus. GoaSaya requires 2 to 3 weeks of lead time for custom execution and perfection."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order a whole cake with less notice for an immediate celebration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Signature Collection, featuring the Manjari Chocolate Cake, Golden Cake, and Bumblebee Cake, is available for pre-order with just a 48-hour notice."
        }
      },
      {
        "@type": "Question",
        "name": "Does GoaSaya provide delivery for custom and whole cakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide specialized white-glove handling and delivery across the PIK 2 and greater Jakarta area to ensure your centerpiece arrives flawlessly."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <CustomCakeView />
    </>
  );
}