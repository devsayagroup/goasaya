import SpotFoto, {meta as spotFotoMeta} from "./instagrammable-photo-spots-goasaya.mdx";
import KonsepGoa, { meta as konsepGoaMeta} from "./interior-concept-goasaya.mdx";
import PilosopiGoa, {meta as pilosopiGoaMeta} from "./menu-philosophy-goasaya.mdx"
import MustVisit, {meta as mustVisitMeta} from "./must-visit-pik-2-jakarta.mdx"
import MustTry, {meta as mustTryMeta} from "./must-try-desert-goasaya.mdx"
import Firework, {meta as fireworkMeta} from "./chinese-firework-goasaya.mdx"


export const articles = [
  {
    slug: spotFotoMeta.slug,
    meta: spotFotoMeta,
    Content: SpotFoto,
  },
  //  {
  //   slug: konsepGoaMeta.slug,
  //   meta: konsepGoaMeta,
  //   Content: KonsepGoa,
  // },
  // {
  //   slug: pilosopiGoaMeta.slug,
  //   meta: pilosopiGoaMeta,
  //   Content: PilosopiGoa,
  // },
  {
    slug: mustVisitMeta.slug,
    meta: mustVisitMeta,
    Content: MustVisit,
  },
   {
    slug: mustTryMeta.slug,
    meta: mustTryMeta,
    Content: MustTry,
  },
  {
    slug: fireworkMeta.slug,
    meta: fireworkMeta,
    Content: Firework,
  },
];
