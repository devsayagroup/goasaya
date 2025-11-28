"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import VisionSection from "../sections/VisionSection";
import GroupSection from "../sections/GroupSection";

export default function AboutPage() {
    return (
        <section className="relative w-full bg-cream text-maroon overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 pt-14 md:pt-42 pb-16">
                <div className="flex flex-col md:flex-row justify-evenly items-start mb-20 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 md:mt-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mt-8 md:mt-0 max-w-md text-gray-300"
                        >
                            <Image
                                src="/images/about-goa.webp"
                                alt="About GOASAYA"
                                width={400}
                                height={400}
                                className="mb-6"
                            />
                            <Image
                                src="/images/goalt1-6.jpg"
                                alt="Goasaya Ambience"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 max-w-xl text-black"
                    >
                        <p className="font-text text-lg mb-4 md:mb-12 leading-loose">
                            In a world where people rush from place to place, we imagined something different. A space where time slows down. Where people can arrive for a meal, stay for the drinks, and lose themselves in the music and connection. A sanctuary carved from stone, sound, and sensation of the experience deepens with every floor you descend.
                            Goa Saya means more than just “the cave”. It represents mystery, intimacy, and discovery. Each floor is a chapter in a journey, whether you’re seeking taste, vibe, or expression.
                        </p>
                        <Image
                            src="/images/goalt2-1.jpg"
                            alt="Goasaya Ambience"
                            width={600}
                            height={500}
                        />
                    </motion.div>
                </div>
            </div>
            <VisionSection/>
            <GroupSection/>
        </section>
    );
}