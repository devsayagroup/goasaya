"use client";
import { useEffect, useState } from "react";
import { Inria_Serif } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "./loading";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsappButton from "@/components/ui/WhatsappButton";
import FirstVisitModal from "@/components/ui/FirstVisitModal";

const textFont = Inria_Serif({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const styeFont = localFont({
  src: "../styles/Civane.otf",
  variable: "--font-style",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${textFont.variable} ${styeFont.variable}`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <WhatsappButton />
          {/* <FirstVisitModal/> */}
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}
