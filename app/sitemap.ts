import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { events } from "@/content/events";
import { campaigns } from "@/content/campaigns/index";

const SITE_URL = "https://www.goasaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/experiences`, changeFrequency: "monthly", priority: 0.8 }, 
    
    { url: `${SITE_URL}/menu`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/facilities`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/event`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/reservation`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/links`, changeFrequency: "weekly", priority: 0.7 },

    { url: `${SITE_URL}/cafe-di-pik`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/pik-must-visit`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/restoran-pik-2`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/cakes`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/private-events`, changeFrequency: "daily", priority: 0.9 },
  ];

  const journalRoutes: MetadataRoute.Sitemap = articles.map((article) => {
    const cleanSlug = article.slug.replace(/^\/+/, ''); 
    return {
      url: `${SITE_URL}/journal/${cleanSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    };
  });

  const campaignRoutes: MetadataRoute.Sitemap = campaigns.map((campaign) => {
    let cleanPath = campaign.ctaLink.replace(/^\/+/, '');
    
    if (!cleanPath.startsWith('experiences/')) {
      cleanPath = `experiences/${cleanPath}`;
    }

    return {
      url: `${SITE_URL}/${cleanPath}`,
      lastModified: new Date(),
      changeFrequency: campaign.isActive ? "daily" : "monthly",
      priority: campaign.isActive ? 0.9 : 0.5,
    };
  });

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => {
    const cleanSlug = event.slug.replace(/^\/+/, '');
    return {
      url: `${SITE_URL}/event/${cleanSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    };
  });

  return [...staticRoutes, ...eventRoutes, ...journalRoutes, ...campaignRoutes];
}