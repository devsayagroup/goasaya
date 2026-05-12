// import type { Metadata, Viewport } from "next";
// import ClientLayout from "./client-layout";
// import "@/styles/globals.css";
// import { GoogleAnalytics } from "@next/third-parties/google";

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";
// const SITE_NAME = "GOASAYA"; 

// export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
//   applicationName: SITE_NAME,

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true },
//   },

//   openGraph: {
//     siteName: SITE_NAME,
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//   },

//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#0B0B0B",
//   colorScheme: "dark",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <body>
//         <ClientLayout>{children}</ClientLayout>
//         <GoogleAnalytics gaId="G-LB5MBXKJCG" />
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import type { Metadata, Viewport } from "next";
import ClientLayout from "./client-layout";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"; // ✅ 1. Import Next.js Script

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";
const SITE_NAME = "GOASAYA"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* ✅ 2. Use next/script for the Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4682858331941765');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4682858331941765&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-LB5MBXKJCG" />
      </body>
    </html>
  );
}