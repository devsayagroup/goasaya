"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Floor1Section() {
    const realiImages = [
        { src: "/rooms/main.jpeg", span: "col-span-2" },
        { src: "/rooms/glass.jpeg", span: "col-span-1" },
        { src: "/rooms/hole.jpeg", span: "col-span-1" },
        { src: "/rooms/main-2.jpeg", span: "col-span-1" },
    ];

    return (
        <section className="w-full bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a0b08] text-[#f5f5f5] overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 py-32">
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: premiumEase }}
                        className="flex items-start mb-16 md:mb-0"
                    >
                        <Image
                            src="/logo/LogotypeIcon-02.png"
                            alt="GOASAYA"
                            width={250}
                            height={100}
                            className="w-[180px] md:w-[250px] object-contain"
                            // ✅ FIX: Added inline style to satisfy the browser's aspect-ratio warning
                            style={{ height: "auto" }} 
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-white"
                    >
                        <h1 className="font-style text-5xl md:text-7xl mb-6 tracking-tight">
                            1st Floor
                        </h1>
                        <Link 
                            href="https://cho.pe/web_goasayarestaurant" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block transition-transform duration-500 hover:scale-105 hover:brightness-125"
                        >
                            <Image
                                src="/images/reservewhite.png"
                                alt="GOASAYA Reservation"
                                width={180}
                                height={50}
                                className="w-[140px] md:w-[180px] object-contain"
                                // ✅ FIX: Added inline style to satisfy the browser's aspect-ratio warning
                                style={{ height: "auto" }}
                            />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex mx-auto justify-center items-center mb-24"
                >
                    <h2 className="text-lg md:text-center md:text-xl font-style font-light text-white/70 leading-relaxed max-w-4xl">
                        A short escape from the modern life to an intimate man-made cave, where the outside world can reach you.
                        Your safe space surrounded by stone walls and soft lights. A deeply relaxing ambience serving you comfort.
                        Here we gather to share meals and create memories.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {realiImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 1, ease: premiumEase }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                ${i === 0 ? "md:col-span-3" : "md:col-span-1"} 
                                col-span-2 relative w-full h-[350px] md:h-[600px] overflow-hidden group rounded-sm
                            `}
                        >
                            <Image
                                src={img.src}
                                alt={`Goasaya 1st Floor Experience ${i + 1}`}
                                fill
                                sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                                className="object-cover"
                            />
                            {/* Luxury Dark Overlay that fades on hover */}
                            <div className="absolute inset-0 bg-[#230c0f]/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}