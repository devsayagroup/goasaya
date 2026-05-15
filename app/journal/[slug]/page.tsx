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
    title: `${meta.metaTitle} | GOASAYA Journal`,
    description: meta.metaDescription || `Discover more about ${meta.title} on Goasaya.`,
    alternates: { canonical: url },
    authors: [{ name: "GOASAYA" }],
    // Force Google to show large image previews in search results
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: url,
      siteName: "GOASAYA",
      images: [{ url: meta.heroImage, width: 1200, height: 630, alt: meta.title }],
      type: "article",
      publishedTime: meta.publishedAt, 
      authors: ["GOASAYA"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [meta.heroImage],
      creator: "@goasaya", // Replace with actual Twitter handle if available
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
  const Content = article.Content as React.ElementType;
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

      <header className="pt-12 md:pt-24">
        <section className="relative max-w-6xl mx-auto rounded-md overflow-hidden min-h-[30vh] md:min-h-[40vh] flex flex-col justify-center items-center text-center p-6 md:p-12">
          <Image
            src={meta.heroImage}
            alt={meta.title}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay to ensure white text is readable */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          
          {/* The Headline (Moved from the content section below) */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-white text-3xl md:text-5xl font-style font-light leading-tight mb-6">
              {meta.title}
            </h1>
            <div className="h-[1px] w-24 bg-white/50" aria-hidden="true" />
          </div>
        </section>
      </header>
      
      <section className="relative max-w-4xl mx-auto px-6 pt-8 pb-20">
        <article className="mx-auto w-full">       
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