"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EventInquiryClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    eventType: "Birthday",
    date: "",
    guests: "",
    discoverySource: "",
  });

  const discoveryOptions = [
    "Instagram",
    "TikTok",
    "Friends & Family",
    "Google Search",
    "Website/Blog",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to your email service (Resend, SendGrid) or API here
    console.log("Survey & Inquiry Data:", formData);
    
    // Simulating a network request for the UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center py-32 px-6 overflow-hidden bg-black text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/webp/goa6.webp"
          alt="GOASAYA Event Space"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-style uppercase tracking-widest text-[#FFE3AF] mb-6 drop-shadow-lg">
            Host Your Event
          </h1>
          <p className="font-text text-white/70 tracking-wide max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            From intimate gatherings to grand celebrations, tell us about your vision and our team will bring it to life in our subterranean sanctuary.
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a]/90 backdrop-blur-xl p-12 text-center rounded-sm border border-[#FFE3AF]/30 shadow-[0_0_50px_rgba(255,227,175,0.1)]"
          >
            <h2 className="text-3xl font-style text-[#FFE3AF] mb-4">Request Received</h2>
            <p className="font-text text-white/70 leading-relaxed mb-8">
              Thank you for considering GOASAYA for your special occasion. Our concierge team has received your inquiry and will contact you via WhatsApp shortly to discuss the details.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="font-style uppercase tracking-[0.2em] text-xs bg-transparent border border-[#FFE3AF] text-[#FFE3AF] px-8 py-3 rounded-sm hover:bg-[#FFE3AF] hover:text-black transition-colors duration-300"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-12 rounded-sm border border-white/10 shadow-2xl space-y-8"
          >
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 relative group">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold group-focus-within:text-[#FFE3AF] transition-colors">Full Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white font-text focus:outline-none focus:border-[#FFE3AF] transition-colors" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2 relative group">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold group-focus-within:text-[#FFE3AF] transition-colors">WhatsApp Number</label>
                <input required type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white font-text focus:outline-none focus:border-[#FFE3AF] transition-colors"
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2 relative group">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold group-focus-within:text-[#FFE3AF] transition-colors">Event Type</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white font-text focus:outline-none focus:border-[#FFE3AF] transition-colors appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}>
                  <option className="bg-black text-white">Birthday</option>
                  <option className="bg-black text-white">Corporate Gathering</option>
                  <option className="bg-black text-white">Anniversary</option>
                  <option className="bg-black text-white">Other</option>
                </select>
              </div>
              <div className="space-y-2 relative group">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold group-focus-within:text-[#FFE3AF] transition-colors">Date</label>
                <input required type="date" className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white font-text focus:outline-none focus:border-[#FFE3AF] transition-colors [color-scheme:dark]"
                  onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </div>
              <div className="space-y-2 relative group">
                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-semibold group-focus-within:text-[#FFE3AF] transition-colors">Est. Guests</label>
                <input required type="number" placeholder="e.g. 20" min="1" className="w-full bg-transparent border-b border-white/20 pb-2 pt-1 text-white font-text focus:outline-none focus:border-[#FFE3AF] transition-colors placeholder:text-white/20"
                  onChange={(e) => setFormData({...formData, guests: e.target.value})} />
              </div>
            </div>

            {/* THE SURVEY QUESTION */}
            <div className="pt-8 border-t border-white/10">
              <label className="block text-xs uppercase tracking-[0.2em] text-[#FFE3AF] font-semibold mb-6 text-center">
                How did you hear about GOASAYA? *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {discoveryOptions.map((option) => (
                  <label 
                    key={option} 
                    className={`cursor-pointer border py-3 px-4 rounded-sm text-center text-[10px] md:text-xs tracking-wider uppercase transition-all duration-300 font-semibold
                      ${formData.discoverySource === option 
                        ? 'bg-[#FFE3AF] border-[#FFE3AF] text-black shadow-[0_0_20px_rgba(255,227,175,0.15)]' 
                        : 'border-white/20 text-white/60 hover:border-white/50 hover:bg-white/5 hover:text-white'}`}
                  >
                    <input 
                      type="radio" 
                      name="discovery" 
                      value={option}
                      className="hidden"
                      required
                      onChange={(e) => setFormData({...formData, discoverySource: e.target.value})}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 flex justify-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="font-style uppercase tracking-[0.2em] text-sm md:text-base bg-[#FFE3AF] text-black px-12 py-4 rounded-sm hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? "Processing..." : "Submit Inquiry"}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </main>
  );
}