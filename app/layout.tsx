import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

import localFont from "next/font/local";
import ScrollProvider from "@/components/ScrollProvider";
import ContactSection from "@/pages-module/home/ContactSection";

const helveticaNeueBold = localFont({
  src: "./fonts/HelveticaNeue-Bold.otf",
  variable: "--font-helvetica-neue-bold",
  display: "swap",
});

const helveticaNeueRoman = localFont({
  src: "./fonts/HelveticaNeue-Roman.otf",
  variable: "--font-helvetica-neue-roman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社ヨシ",
  description: "株式会社ヨシ",
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} ${helveticaNeueBold.variable} ${helveticaNeueRoman.variable} antialiased`}
      >
        <ScrollProvider>
          <Header />
          <main className="overflow-x-hidden min-h-svh">{children}</main>
          <ContactSection />
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
