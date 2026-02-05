export interface JournalMeta {
  title: string;
  slug: string;
  heroImage: string; // ✅ REQUIRED for journals
  heroAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
}

export interface JournalIndexItem {
  slug: string;
  title: string;
  heroImage: string; // REQUIRED
  metaDescription?: string;
}
