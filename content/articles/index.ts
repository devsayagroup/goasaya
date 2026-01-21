import SpotFoto, {
  meta as spotFotoMeta,
} from "./instagrammable-photo-spots-goasaya.mdx";
import KonsepGoa, {
  meta as konsepGoaMeta,
} from "./interior-concept-goasaya.mdx";
import PilosopiGoa, {
  meta as pilosopiGoaMeta,
} from "./menu-philosophy-goasaya.mdx"

export const articles = [
  {
    slug: spotFotoMeta.slug,
    meta: spotFotoMeta,
    Content: SpotFoto,
  },
   {
    slug: konsepGoaMeta.slug,
    meta: konsepGoaMeta,
    Content: KonsepGoa,
  },
  {
    slug: pilosopiGoaMeta.slug,
    meta: pilosopiGoaMeta,
    Content: PilosopiGoa,
  },
];
