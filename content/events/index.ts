
export interface EventMeta {
  id: number;
  title: string;
  slug: string;
  tracking: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  background:string;
  heroImage: string;
  heroAlt: string;
  date: string;
  time: string;
  content: string | string[];
}

export const highlightedEventSlug = "sweet-world-valentine";

import NorthPole, { meta as northPoleMeta } from "./northpole-christmas-goa.mdx";
import CaveParty, { meta as cavePartyMeta } from "./cave-party-at-goa.mdx";
import ArabianNight, { meta as arabianNightMeta } from "./arabian-night-at-goa.mdx";
import Valentine, { meta as valentineMeta } from "./sweet-valentine-at-goa.mdx";

export const events = [
  {
    slug: valentineMeta.slug,
    meta: valentineMeta,
    Content: Valentine,
  },
  {
    slug: northPoleMeta.slug,
    meta: northPoleMeta,
    Content: NorthPole,
  },
  {
    slug: cavePartyMeta.slug,
    meta: cavePartyMeta,
    Content: CaveParty,
  },
  {
    slug: arabianNightMeta.slug,
    meta: arabianNightMeta,
    Content: ArabianNight,
  },
];
