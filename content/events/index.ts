export interface EventMeta {
  id: number;
  title: string;
  slug: string;

  tracking?: string;

  metaTitle?: string;
  metaDescription?: string;

  publishedAt?: string;

  background?: string;
  heroImage?: string;
  heroAlt?: string;
  content?: string | string[];

  date?: string;
  time?: string;

  availability?: {
    activities: {
      id: string;
      title: string;
      date: string;
      time: string;
      location: string;
      capacity: number;
      price: number;
    }[];
  };

  theme?: {
    background?: string;
    text?: string;
    cta?: {
      color?: string;
      hoverColor?: string;
      text?: string;
    };
  };
}

export const highlightedEventSlug = "clay-photo-holder-workshop";

import NorthPole, { meta as northPoleMeta } from "./northpole-christmas-goa.mdx";
import CaveParty, { meta as cavePartyMeta } from "./cave-party-at-goa.mdx";
import ArabianNight, { meta as arabianNightMeta } from "./arabian-night-at-goa.mdx";
import ClayHolder, {meta as clayHolderMeta} from "./clay-photo-holder.mdx"
import PaintWine, {meta as paintWineMeta} from "./paint-and-wine.mdx"

export const events = [
  // {slug: paintWineMeta.slug, meta: paintWineMeta, Content: PaintWine},
  // {slug: clayHolderMeta.slug, meta: clayHolderMeta, Content: ClayHolder},
  {slug: northPoleMeta.slug, meta: northPoleMeta, Content: NorthPole},
  {slug: cavePartyMeta.slug, meta: cavePartyMeta, Content: CaveParty},
  {slug: arabianNightMeta.slug, meta: arabianNightMeta, Content: ArabianNight},
];
