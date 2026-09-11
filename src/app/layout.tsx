import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SWTS — More than transport, we move what matters",
  description:
    "We manage global transport with precision, reliability, and fully planned logistics from day one. Air, ocean, land, and warehousing solutions.",
  icons: {
    icon: "/assets/82b66b848e80164b05e8e4c9ecaca6890fa23e23.png",
  },
};

import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} dark`}
    >
      <body className="bg-[#050505] text-[#ededed] font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden min-h-screen">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

