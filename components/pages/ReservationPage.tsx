"use client";

import Image from "next/image";
import ReservationForm from "../ui/ReservationForm";
export default function ReservationPage() {
    return (
        <section className="relative w-full text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                src="/images/Japanese_Theme_Karaoke_2.jpg"
                alt="Asian dining background"
                fill
                priority
                className="object-cover object-center brightness-75"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="relative container mx-auto px-6 md:px-14 py-30">
                <ReservationForm/>
            </div>
        </section>
    );
}