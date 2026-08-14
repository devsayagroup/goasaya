import type { Metadata, Viewport } from "next";
import ClientLayout from "./client-layout";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import MetaPixel from "@/lib/MetaPixel"; 

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";
const SITE_NAME = "GOASAYA"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  alternates: {
    types: {
      "text/markdown": "/llms.txt",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-LB5MBXKJCG" />
        <MetaPixel />
      </body>
    </html>
  );
}

// // app/layout.tsx
// import type { Metadata, Viewport } from "next";
// import ClientLayout from "./client-layout";
// import "@/styles/globals.css";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import MetaPixel from "@/lib/MetaPixel"; 

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
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#0B0B0B",
//   colorScheme: "dark",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
//       <body suppressHydrationWarning>
//         <ClientLayout>{children}</ClientLayout>
//         <GoogleAnalytics gaId="G-LB5MBXKJCG" />
//         <MetaPixel />
//       </body>
//     </html>
//   );
// }