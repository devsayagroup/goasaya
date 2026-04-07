"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/lib/menu-data";
import { MenuItem } from "@/lib/menu-data";
import Image from "next/image";

export default function MenuPage() {
  const [active, setActive] = useState(menuData[0].name);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const beverageNames = [
    "Coffee",
    "Non Coffee",
    "Matcha Series (Hot/Iced)",
    "Signature Cocktails",
    "Classic Cocktails",
    "Mocktails",
    "Tea by TWG",
    "Flavour Tea",
    "Healthy Juice",
  ];

  const beverageStartIndex = menuData.findIndex((cat) =>
    beverageNames.includes(cat.name)
  );

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>(
    Object.fromEntries(menuData.map((c) => [c.name, null]))
  );

  useEffect(() => {
    if (!hasInteracted) return;
    sectionRefs.current[active]?.scrollIntoView({ behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);


  const activeClass =
    "relative bg-white/10 ring-1 ring-white/20 transition-all";
  const inactiveClass = "hover:bg-white/5 transition-all";

  return (
    <section className="w-full">
      <div className="relative text-white mx-auto px-6 lg:px-20 py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/goa9.JPG"
            alt="GOASAYA Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/95" />
        </div>

        <div id="menu-top" />

        <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-16">
          <aside className="w-full lg:w-64 lg:sticky lg:top-24 self-start">
            <div className="lg:hidden fixed top-22 left-0 right-0 z-50 px-6">
              <motion.details
                ref={detailsRef}
                className="bg-maroon/80 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-sm font-medium truncate">
                    {active}
                  </span>
                  <span className="text-white/50 text-xs tracking-wide">
                    All Menu
                  </span>
                </summary>

                <div className="max-h-[75vh] overflow-y-auto px-3 pb-4 pt-2">
                  {menuData.map((cat, index) => (
                    <div key={cat.name}>
                      {index === beverageStartIndex && (
                        <div className="my-4 border-t border-white/20 pt-4 text-xs tracking-widest text-white/40">
                          BEVERAGES
                        </div>
                      )}

                      <button
                        onClick={() => {
                          setActive(cat.name);
                          setHasInteracted(true);
                          detailsRef.current && (detailsRef.current.open = false);
                          if (typeof window !== "undefined") {
                          window.lenis?.scrollTo("#menu-top", { duration: 0.8 });
                          if (!window.lenis) window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        }}
                        className={`w-full text-left py-2 px-3 rounded-lg text-sm ${
                          cat.name === active ? activeClass : inactiveClass
                        }`}
                      >
                        {cat.name}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.details>
            </div>

            {/* <div className="md:hidden">
              <motion.details
                ref={detailsRef}
                className="bg-black/40 py-2 px-4 rounded-2xl border border-white/5"
              >
                <summary className="text-lg cursor-pointer py-2 flex justify-between">
                  <span>{active}</span>
                  <span className="text-white/50 text-sm">All Menu</span>
                </summary>

                <div className="mt-4 space-y-1">
                  {menuData.map((cat, index) => (
                    <div key={cat.name}>
                      {index === beverageStartIndex && (
                        <div className="my-4 border-t border-white/20 pt-4 text-xs tracking-widest">
                          BEVERAGES
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setActive(cat.name);
                          setHasInteracted(true);
                          detailsRef.current && (detailsRef.current.open = false);
                        }}
                        className={`w-full text-left py-2 px-3 rounded-lg ${
                          cat.name === active ? activeClass : inactiveClass
                        }`}
                      >
                        {cat.name}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.details>
            </div> */}

            {/* Desktop */}
            <div className="hidden lg:block bg-black/40 p-6 rounded-2xl border border-white/5">
              <h1 className="text-2xl font-style font-light mb-6 tracking-wide">
                GOASAYA Menu
              </h1>

              {/* <nav className="space-y-2">
                {menuData.map((cat, index) => (
                  <div key={cat.name}>
                    {index === beverageStartIndex && (
                      <div className="my-4 border-t border-white/20 pt-4 text-xs tracking-widest text-white/40">
                        BEVERAGES
                      </div>
                    )}
                    <motion.button
                      onClick={() => {
                        setHasInteracted(true);
                        setActive(cat.name);
                      }}
                      className={`w-full text-left py-2 px-3 rounded-lg ${
                        cat.name === active ? activeClass : inactiveClass
                      }`}
                    >
                      {cat.name}
                    </motion.button>
                  </div>
                ))}
              </nav> */}
              <nav className="space-y-2">
                {menuData.map((cat, index) => (
                  <div key={cat.name}>
                    {index === beverageStartIndex && (
                      <div className="my-4 border-t border-white/20 pt-4 text-xs tracking-widest text-white/40">
                        BEVERAGES
                      </div>
                    )}

                    <motion.button
                      type="button"
                      onClick={() => {
                        setHasInteracted(true);
                        setActive(cat.name);

                        if (typeof window !== "undefined") {
                          window.lenis?.scrollTo("#menu-top", { duration: 0.8 });
                          if (!window.lenis) window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`w-full text-left py-2 px-3 rounded-lg ${
                        cat.name === active ? activeClass : inactiveClass
                      }`}
                    >
                      {cat.name}
                    </motion.button>
                  </div>
                ))}
              </nav>

            </div>
          </aside>

          {/* ================= CONTENT ================= */}
          <div className="flex-1 mt-12 lg:mt-0">
            <AnimatePresence mode="wait">
              {menuData
                .filter((c) => c.name === active)
                .map((category) => (
                  <motion.div
                    key={category.name}
                    ref={(el) => {sectionRefs.current[category.name] = el}}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {/* ===== HERO IMAGE ===== */}
                    {category.heroImage ? (
                      <div className="relative overflow-hidden rounded-xl">
                        <div className="relative aspect-[11/7] md:aspect-[16/7]">
                          <Image
                            src={category.heroImage}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-10">
                          <h2 className="text-2xl md:text-4xl uppercase font-style font-light tracking-wide">
                            {category.name}
                          </h2>
                          {category.caption && (
                            <p className="mt-2 max-w-xl text-sm text-white/70">
                              {category.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <h2 className="text-4xl uppercase font-style font-light tracking-wide">
                        {category.name}
                      </h2>
                    )}

                    {/* {category.featured && category.featured.length > 0 && (
                      <div>
                        <p className="text-xs tracking-widest text-white/40 mb-4">
                          SIGNATURE SELECTION
                        </p>
                      </div>
                    )} */}

                    <div className="space-y-6">
                      {category.isBeverage ? (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          {category.items
                            .map((item) => (
                              <motion.div
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  show: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.35 }}
                                className="border-b border-white/10 pb-5"
                            >
                              <div className="flex justify-between gap-4">
                                <h3 className="uppercase tracking-wide font-medium">
                                  {item.title}
                                </h3>
                                <span className="font-semibold whitespace-nowrap">
                                  Rp {item.price}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-white/60 max-w-2xl">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: {},
                            show: {
                              transition: {
                                staggerChildren: 0.05,
                              },
                            },
                          }}
                        >
                          {category.items
                            .map((item) => (
                              <motion.div
                                key={item.title}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  show: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.35 }}
                                className="bg-white/5 p-6 rounded-xl shadow-xl border border-white/10 flex  gap-5"
                            >
                              <div
                                onClick={() => setActiveItem(item)}
                                className="w-28 h-24 relative rounded-md overflow-hidden bg-white/10 cursor-pointer group"
                              >
                                <Image
                                  src={item.image || "/placeholder.jpg"}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                              </div>


                              <div className="flex-1">
                                <div className="flex flex-col lg:flex-row  justify-between items-start mb-2 gap-1.5">
                                  <h3 className="text-lg font-medium tracking-wide">
                                    {item.title}
                                  </h3>
                                  <span className="font-semibold whitespace-nowrap">
                                    Rp {item.price}
                                  </span>
                                </div>

                                <p className="text-sm text-white/70 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            <AnimatePresence>
              {activeItem && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-xs"
                    onClick={() => setActiveItem(null)}
                  />

                  {/* Modal */}
                  <motion.div
                    initial={{ scale: 0.95, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: 20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="relative bg-stone-950 border border-white/10 rounded-2xl overflow-hidden max-w-lg w-full z-10"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={activeItem.image || "/placeholder.jpg"}
                        alt={activeItem.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium tracking-wide">
                          {activeItem.title}
                        </h3>
                        <span className="font-semibold whitespace-nowrap">
                          Rp {activeItem.price}
                        </span>
                      </div>

                      <p className="text-sm text-white/70 leading-relaxed">
                        {activeItem.description}
                      </p>
                    </div>

                    {/* Close */}
                    <button
                      onClick={() => setActiveItem(null)}
                      className="absolute top-3 right-3 text-white/60 hover:text-white transition"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}

