// components/pages/ReservationPage.tsx (Main Domain Codebase)
"use client";

import Image from "next/image";

export default function ReservationPage() {
    return (
        <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center pt-24 pb-12">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/webp/goa9.webp" 
                    alt="Goasaya Interior"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6 w-full flex flex-col items-center">
                
                {/* Elevated Header Copy */}
                <div className="mb-8 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-style text-white mb-4 tracking-tight">
                        Reserve Your Experience
                    </h1>
                    <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                        Step into an iconic sand cave-inspired dining destination. Secure your table to experience progressive Asian cuisine and aesthetic atmospheres at GoaSaya PIK 2.
                    </p>
                </div>

                {/* The Widget Container with Expanded Height */}
                <div className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-md border border-white/5 p-2">
                    <iframe 
                        src="https://reservation.goasaya.com/embed" 
                        // Increased height from 550px to 850px to fit the full guest details & policies view
                        className="w-full h-[500px] border-none bg-transparent rounded-2xl"
                        title="GoaSaya Booking Widget"
                        loading="lazy"
                    />
                </div>
                
            </div>
        </section>
    );
}