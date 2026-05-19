import SpotFoto, { meta as spotFotoMeta } from "./instagrammable-photo-spots-goasaya.mdx";
import MustVisit, { meta as mustVisitMeta } from "./must-visit-pik-2-jakarta.mdx";
import Musttry, { meta as mustTryMeta } from "./must-try-desert-goasaya.mdx";
import Firework, { meta as fireworkMeta } from "./chinese-firework-goasaya.mdx";
import Dinner, { meta as dinnerMeta } from "./romantic-dinner-goasaya.mdx";
import Entertainment, { meta as entertainmentMeta } from "./live-entertainment-goasaya.mdx";
import Cakes, { meta as cakesMeta } from "./best-signature-custom-cakes-pik-2.mdx";
import Birthday, {meta as birthdayMeta} from "./birthday-venue-pik-2.mdx"
import type { JournalMeta } from "./types";

function assertJournalMeta(meta: Partial<JournalMeta>): JournalMeta {
  if (!meta.slug || !meta.title || !meta.heroImage) {
    throw new Error(
      `Invalid journal meta: missing slug/title/heroImage`
    );
  }
  return meta as JournalMeta;
}

export const articles = [
  {
    slug: spotFotoMeta.slug,
    meta: assertJournalMeta(spotFotoMeta),
    Content: SpotFoto,
  },
  {
    slug: mustVisitMeta.slug,
    meta: assertJournalMeta(mustVisitMeta),
    Content: MustVisit,
  },
  {
    slug: mustTryMeta.slug,
    meta: assertJournalMeta(mustTryMeta),
    Content: Musttry,
  },
  {
    slug: fireworkMeta.slug,
    meta: assertJournalMeta(fireworkMeta),
    Content: Firework,
  },
  {
    slug: dinnerMeta.slug,
    meta: assertJournalMeta(dinnerMeta),
    Content: Dinner,
  },
  {
    slug: entertainmentMeta.slug,
    meta: assertJournalMeta(entertainmentMeta),
    Content: Entertainment,
  },
  {
    slug: cakesMeta.slug,
    meta: assertJournalMeta(cakesMeta),
    Content: Cakes,
  },
  {
    slug: birthdayMeta.slug,
    meta: assertJournalMeta(birthdayMeta),
    Content: Birthday,
  },
];