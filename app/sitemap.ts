import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { events } from "@/content/events";

const SITE_URL = "https://www.goasaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/menu`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/facilities`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/event`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/reservation`, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/cafe-di-pik`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Signal to Google this is an active, important page
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/may-madness`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Signal to Google this is an active, important page
      priority: 0.9,
    },
  ];

  const journalRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    // If your MDX meta has a date field (like meta.date), use it: new Date(article.meta.date)
    // Otherwise, we fallback to new Date()
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/event/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...eventRoutes, ...journalRoutes];
}
