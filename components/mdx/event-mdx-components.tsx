import Link from "next/link";
import EventCTA from "./eventCTA";
import { EventAccordion } from "./eventAccordion";
import type { MDXComponents } from "mdx/types";

export const eventMdxComponents: MDXComponents = {
    EventCTA,
    EventAccordion,
    a: ({ href, children }) => (
        <Link
        href={href ?? "#"}
        target="_blank"
        className="
            not-prose
            inline-flex items-center justify-center
            mt-4
            rounded-full
            border border-black
            px-6 py-2
            text-sm font-semibold
            tracking-wide
            text-black
            bg-transparent
            hover:bg-black hover:text-white
            transition-all duration-300
        "
        >
        {children}
        </Link>
    ),

    hr: () => (
        <div className="my-10 h-px w-full bg-black/20" />
    ),
};
