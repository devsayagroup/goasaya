"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white/80 py-32 px-6 md:px-14 font-text selection:bg-[#FFE3AF] selection:text-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="text-xs uppercase tracking-widest text-white/50 hover:text-[#FFE3AF] transition-colors border-b border-transparent hover:border-[#FFE3AF] pb-1"
          >
            &larr; Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-style text-white mb-4">Privacy Policy</h1>
          <p className="text-sm tracking-widest uppercase text-[#FFE3AF]/70">Last Updated: April 16, 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 leading-relaxed text-sm md:text-base text-white/70"
        >
          
          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">1. Introduction</h2>
            <p>
              Welcome to GOASAYA ("we," "our," or "us"), a brand managed by Saya Group. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (goasaya.com) and use our services, including making restaurant reservations.
            </p>
            <p className="mt-4">
              By accessing or using our website, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal and non-personal information about you when you interact with our website:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white/90">Personal Information:</strong> When you contact us or make a reservation, we may collect your name, email address, phone number, special dietary requirements, and any other information you choose to provide.</li>
              <li><strong className="text-white/90">Usage Data & Analytics:</strong> We automatically collect certain information about your device and how you interact with our website. This includes your IP address, browser type, operating system, referring URLs, and pages viewed.</li>
              <li><strong className="text-white/90">Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar tracking technologies (such as Google Tag Manager) to track activity on our website and hold certain information to improve your browsing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and manage your dining reservations.</li>
              <li>To communicate with you regarding your booking, inquiries, or customer service requests.</li>
              <li>To send you promotional materials, newsletters, and marketing communications (only if you have opted in to receive them).</li>
              <li>To analyze website usage and improve our website's performance, layout, and user experience.</li>
              <li>To comply with legal obligations and enforce our Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">4. Third-Party Services & Data Sharing</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our business:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white/90">Reservation Partners:</strong> We use <strong className="text-white">Chope</strong> to process our online reservations. When you click "Book a table," you are directed to Chope's platform. The information you provide there is governed by Chope’s own Privacy Policy, though we receive your booking details to fulfill your reservation.</li>
              <li><strong className="text-white/90">Analytics Providers:</strong> We use <strong className="text-white">Google Analytics and Google Tag Manager</strong> to monitor and analyze the use of our website. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</li>
              <li><strong className="text-white/90">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">5. Data Security</h2>
            <p>
              We implement commercially reasonable security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">6. Your Data Privacy Rights</h2>
            <p className="mb-4">In accordance with applicable data protection laws, including Indonesia’s Personal Data Protection Law (UU PDP), you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white/90">Access</strong> the personal data we hold about you.</li>
              <li><strong className="text-white/90">Request correction</strong> of any inaccurate or incomplete data.</li>
              <li><strong className="text-white/90">Request deletion</strong> of your personal data (subject to legal and operational requirements).</li>
              <li><strong className="text-white/90">Withdraw consent</strong> for marketing communications at any time.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us using the details provided below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to other websites or social media platforms (e.g., Instagram, TikTok) that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-lg mt-16">
            <h2 className="text-2xl font-style text-[#FFE3AF] mb-6">9. Contact Us</h2>
            <p className="mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            <div className="space-y-2">
              <p><strong className="text-white/90 uppercase tracking-widest text-xs">Brand:</strong> <br/> GOASAYA by Saya Group</p>
              <p><strong className="text-white/90 uppercase tracking-widest text-xs">Address:</strong> <br/> Entertainment District, PIK 2, Indonesia</p>
              <p>
                <strong className="text-white/90 uppercase tracking-widest text-xs">Email:</strong> <br/>
                <a href="mailto:marketing@sayagroup.id" className="text-[#FFE3AF] hover:underline transition-all">marketing@sayagroup.id</a>
              </p>
              <p>
                <strong className="text-white/90 uppercase tracking-widest text-xs">Phone / WhatsApp:</strong> <br/>
                <a href="tel:+6281338382845" className="text-[#FFE3AF] hover:underline transition-all">+62 813 3838 2845</a>
              </p>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}