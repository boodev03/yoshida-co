import Corporate from "@/modules/corporate/Corporate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "企業情報 | 株式会社ヨシダ | 製缶・溶接・機械加工のプロフェッショナル",
  description:
    "株式会社ヨシダの企業情報をご紹介します。会社概要、沿革、代表挨拶など、当社の基本情報をご覧いただけます。茨城県水戸市を拠点とする製缶・溶接・機械加工のプロフェッショナル企業です。",
  keywords:
    "企業情報,会社概要,沿革,代表挨拶,株式会社ヨシダ,製缶,溶接,機械加工,茨城県,水戸市",
  authors: [{ name: "株式会社ヨシダ" }],
  creator: "株式会社ヨシダ",
  publisher: "株式会社ヨシダ",
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
    type: "website",
    locale: "ja_JP",
    url: "https://yoshida-co.vercel.app/company",
    siteName: "株式会社ヨシダ",
    title:
      "企業情報 | 株式会社ヨシダ | 製缶・溶接・機械加工のプロフェッショナル",
    description:
      "株式会社ヨシダの企業情報をご紹介します。会社概要、沿革、代表挨拶など、当社の基本情報をご覧いただけます。茨城県水戸市を拠点とする製缶・溶接・機械加工のプロフェッショナル企業です。",
    images: [
      {
        url: "https://yoshida-co.vercel.app/images/company/factory.webp",
        width: 1200,
        height: 630,
        alt: "株式会社ヨシダ - 企業情報",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "企業情報 | 株式会社ヨシダ | 製缶・溶接・機械加工のプロフェッショナル",
    description:
      "株式会社ヨシダの企業情報をご紹介します。会社概要、沿革、代表挨拶など、当社の基本情報をご覧いただけます。茨城県水戸市を拠点とする製缶・溶接・機械加工のプロフェッショナル企業です。",
    images: ["https://yoshida-co.vercel.app/images/company/factory.webp"],
  },
  alternates: {
    canonical: "https://yoshida-co.vercel.app/company",
  },
};

export default function CorporatePage() {
  return <Corporate />;
}
