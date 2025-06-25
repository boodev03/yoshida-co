import { ChevronRight } from "lucide-react";
import Image from "next/image";
import CorporateHeading from "../CorporateHeading";
import ContentSection from "../ContentSection";
import ContentSectionMobile from "../ContentSectionMobile";
import Strengths from "./Strengths";
import RAndD from "./RAndD";

export default function Technology() {
  return (
    <section className="pt-[82px] mlg:pt-[90px] font-noto-sans">
      {/* Decor */}
      <div className="relative mt-10">
        <div
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 66.67% 100%, 0% 100%, 0% 60%)",
          }}
          className="bg-web-main h-[90%] w-1/2 absolute top-[10%] left-0 z-10"
        >
          <p className="flex flex-col text-white absolute bottom-1/4 left-8 md:left-1/2 md:-translate-x-1/2">
            <span className="section-title text-[13px] md:text-[16px]">
              TECHNOLOGY
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              ヨシダの技術
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/technology/banner.webp" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              ヨシダの技術
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto mb-[60px] mlg:mb-[120px]">
          <CorporateHeading
            sectionName="TECHNOLOGY STRENGTHS"
            title={`遮へい・隔離技術、大型製缶・溶接、機械加工、
そして医療・宇宙への展開`}
            description="原子力分野で培った数々の放射線の遮へい・隔離技術や、それを応用したクリーンベンチ、グローブボックス、鉛遮へい、鉄セル、コンクリートセル。
これらのコア技術を活用し、放射性医薬品製造設備や宇宙実験モジュールなど、異業種の製品開発をワンストップで支援しています。"
          />
        </div>

        <div className="hidden md:block space-y-[200px]">
          <ContentSection
            title="ヨシダの強み 01"
            subTitle="遮へい・隔離技術を活かした製品"
            description={`原子力分野で培った数々の放射線の遮へい・隔離技術や、それを応用したクリーンベンチやグローブボックス。放射線、微粒子、ウイルス、毒ガスなどから人や機器を守るソリューションを提供いたします。原子力分野から医療、宇宙分野まで、さまざまな分野に応用が可能です。`}
            imageUrl="/images/technology/strength-1.webp"
          />
          <ContentSection
            title="ヨシダの強み 02"
            subTitle="大型装置の製造"
            description={`4,500m²の工場に、揚程12m・30tクレーンを付設。5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）、TIG溶接、アーク溶接、プラズマ溶接、ファイバーレーザー溶接、3次元測定機を完備しています。大型装置の設計→加工→溶接→検査→据付まで、一貫した体制で提供しています。`}
            imageUrl="/images/technology/strength-2.webp"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="ヨシダの強み 01"
            subTitle="遮へい・隔離技術を活かした製品"
            description={`原子力分野で培った数々の放射線の遮へい・隔離技術や、それを応用したクリーンベンチやグローブボックス。放射線、微粒子、ウイルス、毒ガスなどから人や機器を守るソリューションを提供いたします。原子力分野から医療、宇宙分野まで、さまざまな分野に応用が可能です。`}
            imageUrl="/images/technology/strength-1.webp"
          />
          <ContentSectionMobile
            title="ヨシダの強み 02"
            subTitle="大型装置の製造"
            description={`4,500m²の工場に、揚程12m・30tクレーンを付設。5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）、TIG溶接、アーク溶接、プラズマ溶接、ファイバーレーザー溶接、3次元測定機を完備しています。大型装置の設計→加工→溶接→検査→据付まで、一貫した体制で提供しています。`}
            imageUrl="/images/technology/strength-2.webp"
            align="right"
          />
        </div>
        <Strengths />
        <RAndD />
      </div>
    </section>
  );
}
