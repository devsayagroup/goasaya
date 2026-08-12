"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { Inria_Serif, Cinzel, Inter, Damion} from "next/font/google";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsappButton from "@/components/ui/WhatsappButton";
import SmoothScroll from "@/components/ui/SmoothScroll";
// import FirstVisitModal from "@/components/ui/FirstVisitModal";
import FrontModal from "@/components/ui/FrontModal";

const Header = dynamic(() => import('@/components/layout/Header'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true });
const Loading = dynamic(() => import('./loading'), { ssr: true });

const textFont = Inria_Serif({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const styleFont = localFont({
  src: "../styles/Civane.otf",
  variable: "--font-style",
});

const specialFont = localFont({
  src: "../styles/Bavex.ttf",
  variable: "--font-special",
});

const special2Font = Cinzel({
  variable: "--font-special-2",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const baseFont = Inter({
  variable: "--font-base",
  subsets: ["latin"],
  weight: ["300", "400", "500","700", "800", "900"],
});

const afterFont = Damion({
  variable: "--font-after",
  subsets: ["latin"],
  weight: ["400"],
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
    <div className={`${textFont.variable} ${styleFont.variable} ${specialFont.variable} ${special2Font.variable} ${baseFont.variable} ${afterFont.variable} font-text`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <WhatsappButton />
          <FrontModal/>
          {/* <FirstVisitModal/> */}
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </>
      )}
    </div>
  );
}
