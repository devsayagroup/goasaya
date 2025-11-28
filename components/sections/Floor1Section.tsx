"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Floor1Section() {
    const images = [
        { src: "/images/goalt1-2.jpg", span: "col-span-2" },
        { src: "/images/goalt1-3.jpg", span: "col-span-1" },
        { src: "/images/goalt1-5.jpg", span: "col-span-1" },
        { src: "/images/goalt1-4.jpg", span: "col-span-1" },
    ];
    return (
        <section className="w-full bg-black text-white overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 py-30">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <div className="flex items-start mb-16 md:mb-0">
                        <Image
                            src="/logo/LogotypeIcon-02.png"
                            alt="GOASAYA"
                            width={250}
                            height={250}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-gray-300"
                    >
                        <h1 className="font-style text-5xl md:text-7xl mb-4">
                        1st Floor
                        </h1>
                        <Link href="/reservation" className="text-sm font-medium transition-all duration-300">
                            <Image
                                src="/images/reservewhite.png"
                                alt="GOASAYA Reservation"
                                width={250}
                                height={250}
                            />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex mx-auto justify-center items-center mb-16"
                    >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg md:text-center md:text-xl font-style leading-loose max-w-4xl"
                    >
                        A short escape from the modern life to an intimate man-made cave, where the outside world can reach you.
                        Your safe space surrounded by stone walls and soft lights. A deeply relaxing ambience serving you comfort.
                        Here we gather to share meals and create memories.
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
                >
                    {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`${i === 0 ? "md:col-span-3" : "md:col-span-1"} col-span-2 relative w-full h-[300px] md:h-[500px] overflow-hidden`}
                    >
                        <Image
                        src={img.src}
                        alt={`Goasaya interior ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover brightness-95 hover:brightness-110 transition-all duration-700"
                        />
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}