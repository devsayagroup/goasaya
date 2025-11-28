"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GroupSection() {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                src="/images/goalt2-1.jpg"
                alt="Goasaya"
                fill
                priority
                className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-black/75"> </div>
            </div>
            <div className="relative container mx-auto px-6 md:px-14 py-30 md:py-42 ">
                <div className="flex flex-col mx-auto justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" max-w-lg"
                    >
                        <h1 className="text-center text-md font-text mb-8"> Holding Company by</h1>
                        <Link href="https://www.sayagroup.id" target="_blank" rel="noreferrer">
                          <Image
                            src="/logo/sayagroup.webp"
                            alt="Logo SAYAGROUP"
                            width={300}
                            height={300}
                            />
                        </Link>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 max-w-xl text-cream"
                    >
                        <p className="font-text text-md mb-4">
                            To become a destination where people reconnect — with taste, with rhythm, and with each other — all under one immersive experience.
                        </p>
                        <p className="font-text text-md">
                            We want Goa Saya to feel like an escape inside the city, where you don’t just dine, drink, or sing — you explore, indulge, and celebrate.                        
                        </p>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}