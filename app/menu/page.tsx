import type { Metadata } from "next";
import dynamic from "next/dynamic";
import MobileStickyCta from "@/components/ui/MobileStickyCta";
import GlobalCta from "@/components/ui/GlobalCta";

const MenuPage = dynamic(() => import('@/components/pages/MenuPage'), {ssr: true});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Menu | GOASAYA Asian Progressive Dining in PIK 2",
  description: "Explore the GOASAYA culinary experience. Discover our premium Asian Progressive cuisine, signature cocktails, and exclusive cave dining menu in PIK 2, Tangerang.",
  alternates: { canonical: `${baseUrl}/menu` },
  openGraph: {
    title: "Menu | GOASAYA Asian Progressive Dining in PIK 2",
    description: "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, and signature cocktails.",
    url: `${baseUrl}/menu`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${baseUrl}/menu/final-touch.webp`, 
        width: 1200,
        height: 630,
        alt: "GOASAYA Menu - Premium Dining in PIK 2",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | GOASAYA PIK 2",
    description: "Explore the full GOASAYA culinary experience. Premium Asian Progressive dining.",
    images: [`${baseUrl}/menu/final-touch.webp`],
  },
};

export default function Menu() {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "GOASAYA Main Menu",
    "description": "Premium Asian Progressive cuisine and signature cocktails.",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Mains & Asian Progressive",
        "description": "Elevated Asian culinary artistry."
      },
      {
        "@type": "MenuSection",
        "name": "Signature Cocktails & Beverages",
        "description": "Crafted cocktails and premium spirits."
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/menu`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      
      <MenuPage />

     <GlobalCta 
        href="https://wa.me/6281338382845?text=I+want+to+book+a+table+at+GoaSaya+after+looking+at+the+menu"
        bgImage="/menu/final-touch.webp"
        sectionClassName="bg-[#EEEDE5] border-[#461B13]/10" 
        overlayClassName="bg-cream/10 bg-gradient-to-b from-cream to-creamlight" 
        subtitleClassName="text-[#E47406] drop-shadow-none" 
        titleClassName="text-[#461B13] drop-shadow-none" 
        descriptionClassName="text-[#461B13]/80 drop-shadow-none" 
        buttonClassName="bg-[#461B13] text-[#EEEDE5] hover:bg-[#D44F27] hover:text-[#EEEDE5] shadow-xl" 
      />
      
      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=I+want+to+book+a+table+at+GoaSaya"
        text="Book a Table"
        eventName="click_menu_cta"
        eventLabel="Menu Page Sticky CTA"
      />
    </>
  );
}

// import type { Metadata } from "next";
// import dynamic from "next/dynamic";
// const MenuPage = dynamic(() => import('@/components/pages/MenuPage'), {ssr: true});

// const baseUrl = "https://goasaya.com";

// export const metadata: Metadata = {
//   title: "Menu | GOASAYA Asian Progressive Dining",
//   description:
//     "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
//   keywords:"fine dining menu, asian cuisine menu, tasting menu, goasaya dishes, luxury restaurant food, signature menu",
//     openGraph: {
//     title: "Menu | GOASAYA Asian Progressive Dining",
//     description:
//       "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
//     url: `${baseUrl}/menu`,
//     siteName: "GOASAYA",
//     images: [
//       {
//         url: `${baseUrl}/menu/final-touch.webp`, 
//         width: 1200,
//         height: 630,
//         alt: "GOASAYA Menu",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Menu | GoaSaya",
//     description:
//       "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
//     images: [`${baseUrl}/menu/final-touch.webp`],
//   },
// };

// export default function Menu() {
//   return (
//     <>
//     <MenuPage/>
//     </>
//   );
// }