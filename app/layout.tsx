import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics gaId="G-LB5MBXKJCG" />
      </body>
    </html>
  );
}


// export const metadata: Metadata = {
//   title: "GOASAYA | Asian Progressive Dining Experience",
//   description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
//   openGraph: {
//     title: "GOASAYA | Asian Progressive Dining Experience",
//     description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
//     url: "https://goasaya.com",
//     siteName: "GoaSaya",
//     images: [
//       {
//         url: "/logo/09.jpg",
//         width: 1200,
//         height: 630,
//         alt: "GoaSaya Dining Lounge",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "GOASAYA | Asian Progressive Dining Experience",
//     description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
//     images: ["/logo/09.jpg"],
//   },
// };
