import type { MetadataRoute } from "next";

const SITE_URL = "https://www.goasaya.com";

const journalSlugs: { slug: string; lastModified?: string }[] = [
];

const eventSlugs: { slug: string; lastModified?: string }[] = [
];

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
  ];

  const journalRoutes: MetadataRoute.Sitemap = journalSlugs.map((p) => ({
    url: `${SITE_URL}/journal/${p.slug}`,
    lastModified: p.lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const eventRoutes: MetadataRoute.Sitemap = eventSlugs.map((e) => ({
    url: `${SITE_URL}/event/${e.slug}`,
    lastModified: e.lastModified,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...eventRoutes, ...journalRoutes];
}
