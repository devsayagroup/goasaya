

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
