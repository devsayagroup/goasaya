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
