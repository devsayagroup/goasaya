"use client";

import Image from "next/image";
import PrivateEventMenuForm from "@/components/ui/PrivateEventMenuForm";

export default function RequestPage() {
    return (
        <section className="relative w-full text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                src="/images/goa9.JPG"
                alt="Goa Saya"
                fill
                priority
                className="object-cover object-center brightness-75"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="relative container mx-auto px-4 py-24 md:px-14 md:py-30">
                <PrivateEventMenuForm/>
            </div>
        </section>
    );
}