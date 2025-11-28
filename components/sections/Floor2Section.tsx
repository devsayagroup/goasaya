"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Floor2Section() {
    const images = [
        { src: "/images/goalt2-1.jpg", span: "col-span-2" },
        { src: "/images/goalt2-3.jpg", span: "col-span-1" },
        { src: "/images/goalt2-4.jpg", span: "col-span-1" },
        { src: "/images/goalt2-5.jpg", span: "col-span-1" },
    ];
    return (
        <section className="relative w-full bg-maroon text-black overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/Japanese_Theme_Karaoke_3.jpg"
                    alt="Asian dining background"
                    fill
                    priority
                    className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-maroon/75"></div>
            </div>
            <div className="relative container mx-auto px-6 md:px-14 py-30">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <div className="flex items-center mb-16 md:mb-0">
                        <Image
                            src="/logo/onepercentlounge-white.png"
                            alt="Onepercent Lounge"
                            width={200}
                            height={200}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-white"
                    >
                        <h1 className="font-style text-5xl md:text-7xl mb-4">
                        2nd Floor
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
                    className="flex flex-col mx-auto justify-center items-center mb-16"
                    >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg md:text-center text-white md:text-xl font-style leading-loose max-w-4xl"
                    >
                        Above GoaSaya lies a private space for those who appreciate the finer things. <br />
                        A place where you belong. <br /> <br /> Our members presence speaks louder than status.
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