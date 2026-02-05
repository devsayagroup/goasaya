// content/articles/types.ts
export interface JournalMeta {
  title: string;
  slug: string;
  heroImage: string; // ✅ REQUIRED for journals
  heroAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
}
