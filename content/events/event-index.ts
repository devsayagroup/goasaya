import { events } from "@/content/events";

export const eventIndex = events.map((e) => ({
  slug: String(e.meta.slug),
  title: String(e.meta.title),
  image: String(e.meta.heroImage),
  homedesc:
    typeof e.meta.metaDescription === "string"
      ? e.meta.metaDescription
      : undefined,
}));
