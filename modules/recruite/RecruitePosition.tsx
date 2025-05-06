"use client";
import PositionCard from "./PositionCard";

interface RecruitePositionProps {
  index?: number;
}

export default function RecruitePosition({ index = 1 }: RecruitePositionProps) {
  const bgImages = [
    "/images/capability-1.png",
    "/images/capability-2.png",
    "/images/capability-3.png",
    "/images/capability-4.png",
    "/images/capability-1.png",
  ];

  const titles = ["営業", "エンジニア", "デザイナー"];

  const descriptions = [
    "お客様との見積もりや納期交渉など、お客様とのコミュニケーションの窓口として役割を担っています。",
    "製品開発からシステム構築まで、技術的な課題解決を主導します。",
    "視覚的なコミュニケーション手段を通じて、ブランドの価値を高めます。",
  ];

  const idx = (index - 1) % bgImages.length;

  return (
    <section className="h-screen w-full sticky top-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImages[idx]})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container mx-auto font-shippori-mincho relative z-10 h-full flex items-center py-[135px]">
        <div className="bg-white p-[100px] relative w-full">
          {/* Index */}
          <p className="font-bold text-[180px] text-web-light-bg w-fit absolute top-0 left-0 leading-[133px] z-0">
            {index.toString().padStart(2, "0")}
          </p>

          <div className="relative z-10">
            <div className="space-y-4 mb-[60px]">
              <p className="text-[32px] text-web-dark font-bold">
                {titles[idx]}
              </p>
              <p className="font-medium">{descriptions[idx]}</p>
            </div>

            <div className="grid grid-cols-3 gap-20">
              <PositionCard />
              <PositionCard />
              <PositionCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
