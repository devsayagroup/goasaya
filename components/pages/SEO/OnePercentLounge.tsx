"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Key, Users, Music } from "lucide-react";
import { Room, formatIDR, rooms } from "@/lib/op-room-data";
import Grain from "@/components/ui/Grain";
import { trackEvent } from "@/lib/analytics";

export default function OnePercentLoungeView() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setActiveImage(room.coverImage);
  };

  const waLink = `https://wa.me/6281338382845?text=Hi%20GoaSaya,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(selectedRoom?.name || 'VIP Room')}%20at%20The%201%25%20Lounge.`;

  return (
    <main className="relative w-full bg-black min-h-screen">
      <Grain className="fixed inset-0 z-[100] pointer-events-none mix-blend-screen opacity-5" />
      
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 pt-20 pb-4 md:px-10 md:pt-32 md:pb-16 bg-black/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
              onClick={(e) => e.stopPropagation()} 
              id={`modal-${selectedRoom.slug}`}
              className="relative w-full max-w-6xl h-full bg-[#050302] border border-[#FFE3AF]/20 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] selection:bg-[#FFE3AF] selection:text-black"
            >
              
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/50 hover:text-[#FFE3AF] hover:bg-black transition-all"
                aria-label="Close Private Sanctuary details"
              >
                <X size={20} strokeWidth={1} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full relative z-0 bg-black group">
                <Image 
                  src={activeImage} 
                  alt={selectedRoom.name} 
                  fill 
                  sizes="56px"
                  className="object-cover transition-opacity duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050302] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 z-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {[selectedRoom.coverImage, ...selectedRoom.gallery].filter((v, i, a) => a.indexOf(v) === i).map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-14 h-14 shrink-0 border transition-all ${activeImage === img ? 'border-[#FFE3AF] scale-105' : 'border-white/20 opacity-50 hover:opacity-100'}`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-white flex flex-col border-l border-white/5 relative z-10 bg-gradient-to-b from-[#050302] to-[#0A0604]">
                
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-special-2 uppercase tracking-wide mb-2 text-white glow-gold-soft">
                      {selectedRoom.name}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-white/70 mb-10 font-light">
                      {selectedRoom.description}
                    </p>

                    {/* Compact Specs Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/10 py-6">
                      <div>
                        <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-2"><Users size={12}/> Capacity</span>
                        <p className="text-sm text-white">{selectedRoom.capacity}</p>
                      </div>
                      <div>
                        <span className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-2"><Music size={12}/> Vibe</span>
                        <p className="text-sm text-white capitalize">{selectedRoom.mood.split(',')[0]}</p>
                      </div>
                    </div>

                    {/* <div className="mb-10">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#FFE3AF] mb-4">Price // {selectedRoom.pricing.duration}</h4>
                      
                      {selectedRoom.pricing.core === 0 ? (
                        <div className="flex items-center gap-3 bg-white/[0.02] p-4 border border-white/5">
                          <Key className="text-[#FFE3AF] opacity-50" size={18} />
                          <p className="text-lg font-special-2 uppercase text-white tracking-wider">By Invitation Only</p>
                        </div>
                      ) : (
                        <div className="flex flex-col bg-white/[0.02] p-5 border border-white/5">
                          <span className="text-xs text-white/30 line-through tracking-wider mb-1">{formatIDR(selectedRoom.pricing.core)}</span>
                          <span className="text-4xl font-special-2 text-white leading-none mb-3">{formatIDR(selectedRoom.pricing.afterDiscount)}</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                            + {formatIDR(selectedRoom.pricing.additionalHour.afterDiscount)} / add. hour
                          </span>
                        </div>
                      )}
                    </div> */}
                  </div>

                  <Link
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent(`inquire_vip_${selectedRoom.slug}`, { category: 'lead_gen', label: 'VIP Lounge Inquire' })}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#FFE3AF] text-black hover:bg-white font-special-2 uppercase tracking-[0.2em] text-xs transition-colors duration-500 shadow-[0_0_20px_rgba(255,227,175,0.1)]"
                  >
                    Secure This Room
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative w-full h-screen md:px-20 overflow-hidden bg-black text-white flex items-center selection:bg-[#FFE3AF] selection:text-black">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/rooms/onepercent/Stairs.webp"
            alt="1% Lounge Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 md:max-w-xl mx-auto px-6 mt-8 md:mt-12 text-center"
        >
          <h1 className="text-[2.8em] md:text-7xl font-light font-special-2 tracking-[0.06em] uppercase leading-[1.4] mb-4 neon-accent text-[#FFE3AF] glow-gold">
            Enter the circle of 1%
          </h1>
          <p className="text-sm mx-auto w-[90%] md:w-[80%] md:text-md leading-loose tracking-[0.01em] opacity-80 font-light">
            Step into a space shaped for people who appreciate <span className=" font-normal">calm, beauty, and a higher standard of taste</span>.
          </p>
        </motion.div>
      </section>

      <section
        id="about"
        className="relative w-full py-24 md:py-48 bg-stone-950 text-white flex items-center justify-center overflow-hidden border-t border-white/5 selection:bg-[#FFE3AF] selection:text-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-sm md:max-w-4xl px-6 text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-[1.1rem] md:text-2xl leading-snug md:leading-tight opacity-90 font-light font-special-2 text-[#FFE3AF] glow-gold-soft tracking-wider"
          >
            Every room tells its own story, every detail is crafted with intention, and every visit becomes part of the circle you choose to belong to.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative w-full bg-stone-950 text-white scroll-mt-10 md:scroll-mt-0 py-24 md:py-32 border-t border-white/5 selection:bg-[#FFE3AF] selection:text-black" id="rooms">
        <div className="relative z-20 mx-auto px-6 md:px-14">
          <h2 className="text-center md:text-left text-4xl md:text-5xl font-special-2 font-light tracking-[0.06em] text-[#FFE3AF] neon-accent mb-16 md:mb-20">
            Explore Our Rooms
          </h2>

          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2
            md:grid-cols-3 
            gap-10 
            auto-rows-[250px] 
            sm:auto-rows-[300px]
            md:auto-rows-[400px]
            lg:auto-rows-[480px]
          ">
            {rooms.map((room, i) => {
              const spanClass = room.slug === 'inner-circle' ? 'md:col-span-2' : 'md:col-span-1';
              
              return (
                <button
                  key={i}
                  onClick={() => handleRoomSelect(room)}
                  className={`relative block ${spanClass} text-left w-full h-full outline-none focus:outline-none group border border-white/5 rounded-sm overflow-hidden`}
                  aria-label={`View exclusive details of ${room.name}`}
                >
                  <motion.div
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative h-full w-full overflow-hidden cursor-pointer will-change-transform"
                  >
                    <Image
                      src={room.coverImage}
                      alt={room.name}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-[2s]
                        ease-out
                        brightness-[1]
                        md:brightness-[0.8]
                        group-hover:brightness-100
                        will-change-transform
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/10 transition-all duration-700" />

                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="absolute bottom-6 left-6 z-10"
                    >
                      <h3 className="text-lg sm:text-xl md:text-3xl font-special-2 font-light tracking-wide text-white group-hover:text-[#FFE3AF] transition-colors duration-500 drop-shadow">
                        {room.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition-all duration-500 mt-2 font-light">{room.subtitle}</p>
                    </motion.div>
                    
                    <Key className="absolute top-6 right-6 z-10 text-white/10 group-hover:text-[#FFE3AF]/30 transition-colors" size={16}/>
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full py-32 md:py-56 bg-black text-white flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/5 selection:bg-[#FFE3AF] selection:text-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFE3AF_0%,_transparent_60%)] opacity-[0.03] pointer-events-none z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-20 flex flex-col items-center px-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-light font-special-2 tracking-[0.06em] uppercase leading-[1.4] mb-6 text-[#FFE3AF] glow-gold neon-accent">
            Claim Your Sanctuary
          </h2>
          
          <p className="text-sm md:text-base leading-loose tracking-[0.05em] opacity-70 mb-12 font-light">
            Contact our VIP host to secure your room, arrange custom bottle service, and gain access to the 1% Lounge.
          </p>

          <Link
            href={`https://wa.me/6281338382845?text=Hi%20GoaSaya,%20I%20would%20like%20to%20inquire%20about%20a%20VIP%20Room%20at%20The%201%25%20Lounge.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('inquire_vip_bottom_cta', { category: 'lead_gen', label: 'VIP Lounge Inquire' })}
            className="group inline-flex items-center gap-4 px-10 py-5 border border-[#FFE3AF]/30 hover:bg-[#FFE3AF] bg-transparent text-[#FFE3AF] hover:text-black transition-all duration-500 font-special-2 uppercase tracking-[0.3em] text-xs md:text-sm shadow-[0_0_30px_rgba(255,227,175,0.05)]"
          >
            Inquire Availability
          </Link>
        </motion.div>
      </section>
    </main>
  );
}