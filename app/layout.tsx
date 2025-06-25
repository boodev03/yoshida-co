import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import ScrollProvider from "@/components/ScrollProvider";
import localFont from "next/font/local";

import { QueryProvider } from "@/providers/query-provider";
import { Shippori_Mincho } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
        className={`${notoSansJP.variable} ${notoSans.variable} ${helveticaNeueBold.variable} ${helveticaNeueRoman.variable} ${shipporiMincho.variable} antialiased`}
      >
        <QueryProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
