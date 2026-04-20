"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { campaigns } from "@/content/campaigns/index";

type Campaign = {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
};

export default function FrontModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate the active campaign synchronously
  const activeCampaign: Campaign | undefined = campaigns.find((c) => c.isActive);

  useEffect(() => {
    // If there is no active campaign, do nothing
    if (!activeCampaign) return;

    // Removed session/localStorage. The modal will now trigger every time.
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeCampaign]);

  // If there's no active campaign to show, render nothing
  if (!activeCampaign) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 sm:px-12 pointer-events-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            // Added max-h-[90vh] and overflow-y-auto so tall images don't break the screen
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-sm scrollbar-hide"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/70 backdrop-blur hover:bg-black hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Campaign Image (Now follows original aspect ratio naturally) */}
            <div className="relative w-full">
              <Image
                src={activeCampaign.image}
                alt={activeCampaign.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
                priority
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent top-1/2" /> */}
            </div>

            {/* Campaign Content */}
            <div className="relative px-8 pt-6 pb-8 text-center flex flex-col items-center">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#FFE3AF]/70 mb-3">
                Featured Experience
              </span>
              
              <h4 className="text-3xl font-style uppercase text-white mb-3">
                {activeCampaign.title}
              </h4>
              
              <p className="text-sm text-white/70 leading-relaxed mb-8">
                {activeCampaign.description}
              </p>

              {/* Actions */}
              <div className="flex flex-row w-full gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 text-xs font-medium text-white/50 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Maybe Later
                </button>
                <Link
                  href={activeCampaign.ctaLink}
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#FFE3AF] text-black py-3 px-4 text-sm font-medium uppercase tracking-widest hover:bg-white transition-colors"
                >
                  {activeCampaign.ctaText}
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}