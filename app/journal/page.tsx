// app/journal/page.tsx
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import JournalClient from "@/components/pages/JournalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Journal & Culinary Stories | GOASAYA PIK 2",
  description: "Immerse yourself in the world of GOASAYA. Read our journal for culinary inspirations, behind-the-scenes stories, chef's notes, and the latest news from our cave-inspired restaurant.",
  keywords: [
    "GOASAYA Journal",
    "Culinary Blog Jakarta",
    "Fine Dining News PIK 2",
    "Chef Notes and Recipes",
    "Progressive Asian Cuisine Stories",
    "Restaurant Behind the Scenes",
    "Gastronomy Blog Indonesia",
    "Luxury Dining Editorial"
  ],
  openGraph: {
    title: "Journal & Culinary Stories | GOASAYA",
    description: "Discover the artistry behind the menu. Explore our journal for culinary stories, latest updates, and insights into progressive Asian dining.",
    url: `${SITE_URL}/journal`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/images/webp/V3.webp`,
        width: 1200,
        height: 630,
        alt: "The GOASAYA Culinary Journal",
      },
    ],
    locale: "id_ID",
    type: "website", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal & Culinary Stories | GOASAYA",
    description: "Read the latest culinary stories, chef insights, and news from GOASAYA.",
    images: [`${SITE_URL}/images/webp/V3.webp`],
  },
  alternates: {
    canonical: `${SITE_URL}/journal`,
  },
};

export default async function Journal() {
  const journals = getAllArticles();
  
  const sortedJournals = journals.sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    return dateB - dateA; 
  });

  // SEO BOOSTER: Dynamic Blog Schema
  // This automatically feeds Google a structured list of your latest articles
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GOASAYA Culinary Journal",
    "description": "Immerse yourself in the world of GOASAYA. Read our journal for culinary inspirations, behind-the-scenes stories, and chef's notes.",
    "url": `${SITE_URL}/journal`,
    "publisher": {
      "@type": "Restaurant",
      "name": "GOASAYA",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/logo.png` // Ensure this path points to your actual logo
      }
    },
    // Dynamically map up to the 10 most recent articles for the schema
    "blogPost": sortedJournals.slice(0, 10).map((journal) => ({
      "@type": "BlogPosting",
      "headline": journal.title, // Assumes your article object has a title
      "url": `${SITE_URL}/journal/${journal.slug}`, // Assumes your article object has a slug
      "datePublished": journal.publishedAt,
      "image": journal.heroImage || `${SITE_URL}/images/webp/V3.webp` // Fallback image
    }))
  };

  return (
    <main className="bg-[#0a0a0a]">
      {/* Inject the Structured Data safely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JournalClient journals={sortedJournals} />
    </main>
  );
}