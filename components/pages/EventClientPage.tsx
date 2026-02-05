"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ModalGallery from "@/components/ui/ModalGallery";
import { EventThemeProvider } from "@/components/ui/EventThemeContext";

export default function EventClient({
  meta,
  children,
}: {
  meta: any;
  children: React.ReactNode;
}) {
  return (
    <EventThemeProvider theme={meta.theme}>
        <section
            style={{
                "--event-bg": meta.theme?.background,
                "--event-text": meta.theme?.text,
                "--cta-color": meta.theme?.cta?.color,
                "--cta-hover": meta.theme?.cta?.hoverColor,
                "--cta-text": meta.theme?.cta?.text,
            } as React.CSSProperties}
            className="min-h-screen bg-[var(--event-bg)] text-[var(--event-text)] px-6 md:px-16 py-24"
            >
    
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
            {/* HERO */}
            <div className="relative w-full h-[140px] md:h-[200px] overflow-hidden rounded-md shadow-lg mb-10">
            <Image
                src={meta.background}
                alt={meta.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/55 md:bg-black/55" />
            <div className="absolute bottom-6 left-4 md:left-8 flex flex-col text-white">
                <h1 className="text-2xl md:text-5xl mb-2 font-style  uppercase">
                {meta.title}
                </h1>
                {meta.date && (
                <p className=" font-semibold">
                    {meta.date}
                </p>
                )}
            </div>
            </div>

            {/* CONTENT GRID */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12  text-left font-text max-w-7xl">

            {/* IMAGE content */}
            {meta.content && (
                <div className="flex flex-col gap-4 flex-shrink-0">
                {Array.isArray(meta.content) ? (
                    <ModalGallery
                    content={meta.content}
                    title={meta.title}
                    />
                ) : (
                    <Image
                    src={meta.content}
                    alt={meta.title}
                    width={600}
                    height={600}
                    className="
                        rounded-md object-cover 
                        w-[500px] h-auto 
                        md:w-[900px]
                    "
                    />
                )}
                </div>
            )}

            {/* TEXT + CTA */}
            <div className="flex-1 md:px-8">
                {/* <div className="rounded-xl bg-white/20 p-4 md:py-6 md:px-8"> */}
                    <div className="prose prose-invert max-w-2xl text-lg leading-relaxed">
                    {children}
                    </div>
                {/* </div> */}

                <div className="pt-6 flex flex-col items-start gap-6">
                {meta.cta && (
                    <Link
                    href={meta.cta.href}
                    className="inline-block bg-orange rounded-md text-white px-8 py-3 hover:bg-black transition"
                    >
                    {meta.cta.label ?? "Reserve Your Seat"}
                    </Link>
                )}

                <Link
                    href="/events"
                    className="text-maroon underline hover:text-black transition-colors"
                >
                    ← Back to all events
                </Link>
                </div>
            </div>

            </div>
        </motion.div>
        </section>
    </EventThemeProvider>
  );
}
