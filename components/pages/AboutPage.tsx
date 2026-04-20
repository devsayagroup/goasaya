"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VisionSection from "../sections/VisionSection";
import GroupSection from "../sections/GroupSection";

// Brought over the custom premium easing for consistency across the site
const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutPage() {
    return (
        // ✅ FIX 1: Switched to the luxury dark theme
        <section className="relative w-full bg-white text-black overflow-hidden">
            
            {/* Optional: Subtle background glow for depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#FFE3AF]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative container mx-auto px-6 md:px-14 pt-32 md:pt-48 pb-24">
                
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-20">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-8"
                    >
                        <Image
                            src="/images/about-goa.webp"
                            alt="GoaSaya Pi"
                            width={400}
                            height={400}
                            className="w-full max-w-[400px]  rounded-sm object-cover"
                            style={{ height: "auto" }} 
                            priority
                        />
                        <Image
                            src="/rooms/main.jpeg"
                            alt="Goasaya Ambience"
                            width={500}
                            height={500}
                            className="w-full max-w-[500px] mt-2 rounded-sm object-cover "
                            style={{ height: "auto" }}
                        />
                    </motion.div>

                    {/* RIGHT COLUMN: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <p className="font-text text-lg md:text-xl mb-12 leading-loose text-black/80">
                            In a world where people rush from place to place, we imagined something different. A space where time slows down. Where people can arrive for a meal, stay for the drinks, and lose themselves in the music and connection. A sanctuary carved from stone, sound, and sensation, where the experience deepens with every floor you descend.
                            <br /><br />
                            <span className="text-maroon font-style text-2xl">Goa Saya</span> means more than just “the cave”. It represents mystery, intimacy, and discovery. Each floor is a chapter in a journey, whether you’re seeking taste, vibe, or expression.
                        </p>

                        <div className="relative w-full overflow-hidden rounded-sm border border-black/5 shadow-2xl">
                            <Image
                                src="/rooms/op/classic-1.JPG"
                                alt="Goasaya Ambience"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[3s]"
                                style={{ height: "auto" }}
                            />
                            {/* Subtle dark overlay to match the luxury aesthetic */}
                            <div className="absolute inset-0 bg-[#0a0a0a]/20 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Make sure these child sections also have the dark background applied in their own files! */}
            <VisionSection />
            <GroupSection />
        </section>
    );
}