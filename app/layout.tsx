import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

import localFont from "next/font/local";

const helveticaNeueBold = localFont({
  src: "./fonts/HelveticaNeue-Bold.otf",
  variable: "--font-helvetica-neue-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社ヨシ",
  description: "株式会社ヨシ",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} ${helveticaNeueBold.variable} antialiased`}
      >
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
