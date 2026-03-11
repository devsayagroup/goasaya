import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next"; // Added for SEO types
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { articles } from "@/content/articles";
import type { JournalMeta } from "@/content/articles/types";
import MoreJournals from "@/components/mdx/MoreJournals";
import ShareButtons from "@/components/ui/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) return {};

  const meta = article.meta as JournalMeta;
  const url = `https://goasaya.com/journal/${slug}`;

  return {
    title: `${meta.metaTitle} | Goasaya Journal`,
    description: meta.metaDescription || `Discover more about ${meta.title} on Goasaya.`,
    alternates: { canonical: url },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: url,
      siteName: "Goasaya",
      images: [{ url: meta.heroImage, width: 1200, height: 630 }],
      type: "article",
      publishedTime: meta.publishedAt, // Ensure your meta has a date field
    },
    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [meta.heroImage],
    },
  };
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const meta = article.meta as JournalMeta;
  const Content = article.Content;
  const currentUrl = `https://goasaya.com/journal/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": meta.metaTitle,
    "image": meta.heroImage,
    "datePublished": meta.publishedAt,
    "author": [{ "@type": "Organization", "name": "Goasaya", "url": "https://goasaya.com" }],
  };

  return (
    <main className="bg-cream text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <section className="relative max-w-7xl mx-auto rounded-md overflow-hidden h-[35vh] mt-12 md:mt-22">
          <Image
            src={meta.heroImage}
            alt={meta.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
        </section>
      </header>
      
      <section className="relative max-w-7xl mx-auto -mt-50 px-6 pb-20">
        <article className="max-w-3xl mx-auto">
          {/* Use H1 for the main title (Crucial for SEO) */}
          <h1 className="text-white mt-6 text-2xl font-style md:text-4xl font-light leading-tight">
            {meta.title}
          </h1>
          <div className="mt-4 mb-24 h-px w-24 bg-white" aria-hidden="true" />
          
          {/* Ensure your prose-invert classes match your background for accessibility */}
          <div className="prose prose-invert prose-lg md:prose-xl article-content">
            <Content components={mdxComponents} />
          </div>

          {/* Social Share Section */}
          <footer className="mt-20 pt-10 border-t border-black/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-xs uppercase tracking-widest text-black/50 font-medium">
                Share this story
              </p>
              <ShareButtons url={currentUrl} title={meta.title} />
            </div>
          </footer>
        </article>
      </section>

      <aside>
        <MoreJournals
          journals={articles.map((a) => a.meta as JournalMeta)}
          currentSlug={slug}
        />
      </aside>
    </main>
  );
}