import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Our Story & Philosophy | GOASAYA PIK 2",
  description: "Discover the story behind GOASAYA — where ancient cave architecture meets progressive Asian culinary innovation in PIK 2, Tangerang.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GOASAYA | The Art of Cave-Inspired Asian Dining",
    description: "Discover the philosophy behind GOASAYA. A transcendent dining experience blending Asian culinary artistry, cave design, and exceptional hospitality.",
    url: `${SITE_URL}/about`, 
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/rooms/frontview.webp`,
        width: 1200,
        height: 630,
        alt: "The Story and Architecture of GOASAYA",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GOASAYA | The Art of Cave-Inspired Asian Dining",
    description: "Learn the story behind GOASAYA — where ancient cave aesthetics meet modern culinary innovation.",
    images: [`${SITE_URL}/rooms/frontview.webp`],
  },
};

export default function About() {
  return (
    <main className="bg-[#0a0a0a]">
      <AboutPage />
    </main>
  );
}

// // app/about/page.tsx (or wherever your about page is located)
// import type { Metadata } from "next";

// // Standard import is faster and better for server-side rendering
// import AboutPage from "@/components/pages/AboutPage";

// export const metadata: Metadata = {
//   title: "Our Story & Philosophy | GOASAYA PIK 2",
//   description: "Learn the story behind GOASAYA — where ancient cave aesthetics meet progressive Asian culinary innovation. Discover our philosophy, refined design, and exceptional hospitality in PIK 2, Jakarta.",
//   keywords: [
//     "About GOASAYA",
//     "Asian fine dining concept PIK 2",
//     "Cave design restaurant Jakarta",
//     "Luxury dining story",
//     "Progressive Asian cuisine Jakarta",
//     "Fine dining philosophy",
//     "Immersive restaurant PIK 2",
//     "GOASAYA culinary journey"
//   ],
//   openGraph: {
//     title: "About GOASAYA | The Art of Cave-Inspired Asian Dining",
//     description: "Discover the philosophy behind GOASAYA. A transcendent dining experience blending Asian artistry, refined design, and exceptional hospitality.",
//     url: "https://www.goasaya.com/about", 
//     siteName: "GOASAYA",
//     images: [
//       {
//         url: "https://www.goasaya.com/rooms/frontview.webp", // Ensure this is a high-quality landscape image
//         width: 1200,
//         height: 630,
//         alt: "The Story and Design of GOASAYA",
//       },
//     ],
//     locale: "en_US", // or "id_ID" depending on your primary target audience
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About GOASAYA | The Art of Cave-Inspired Asian Dining",
//     description: "Learn the story behind GOASAYA — where ancient cave aesthetics meet modern culinary innovation.",
//     images: ["https://www.goasaya.com/rooms/frontview.webp"],
//   },
//   alternates: {
//     canonical: "https://www.goasaya.com/about",
//   },
// };

// export default function About() {
//   return (
//     <main className="bg-[#0a0a0a]">
//       <AboutPage />
//     </main>
//   );
// }