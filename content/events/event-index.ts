import { events } from "@/content/events"; 

export const eventIndex = events.map((e) => ({
  id: e.meta.id,
  slug: e.meta.slug,
  title: e.meta.title,
  image: e.meta.heroImage,
  homedesc: e.meta.metaDescription,
}));
