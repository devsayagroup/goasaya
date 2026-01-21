import Image from "next/image";
import Link from "next/link";

type JournalMeta = {
  slug: string;
  title: string;
  metaDescription?: string;
  heroImage: string;
  publishedAt?: string;
};

export default function MoreJournals({
  journals,
  currentSlug,
}: {
  journals: JournalMeta[];
  currentSlug: string;
}) {
  const filtered = journals.filter(
    (journal) => journal.slug !== currentSlug
  );

  if (!filtered.length) return null;

  return (
    <section className="relative max-w-7xl mx-auto border-t border-black/10 py-24 px-6">
      <h3 className="font-style text-3xl font-light mb-12">
        More from GoaSaya
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 space-y-12">
        {filtered.slice(0, 3).map((journal) => (
          <Link
            key={journal.slug}
            href={`/journal/${journal.slug}`}
            className="group block"
          >
            <article className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
              {/* Image */}
              <div className="relative aspect-[9/6] md:aspect-[3/4] overflow-hidden rounded-md bg-black/5">
                <Image
                  src={journal.heroImage}
                  alt={journal.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="120px"
                />
              </div>

              {/* Text */}
              <div>
                {/* {journal.publishedAt && (
                  <p className="text-xs uppercase tracking-[0.25em] text-black/50 mb-2 font-text">
                    {journal.publishedAt}
                  </p>
                )} */}

                <h4 className="font-style text-xl font-light leading-snug mb-3">
                  {journal.title}
                </h4>

                {journal.metaDescription && (
                  <p className="max-w-xl text-black/80 leading-relaxed font-text line-clamp-2">
                    {journal.metaDescription}
                  </p>
                )}
                <span className="inline-block bottom-0 mt-4 text-sm uppercase tracking-widest underline underline-offset-4 text-black">
                    Read Journal
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
