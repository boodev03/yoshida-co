import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../ContentSection";
import ContentSectionMobile from "../ContentSectionMobile";
import CorporateHeading from "../CorporateHeading";
import CoverageCard from "../CoverageCard";

export default function Machining() {
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
              MACHINING
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              機械加工
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/machining/banner.webp" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              ヨシダの技術
            </p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              機械加工
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto">
          <CorporateHeading
            sectionName="MACHINING STRENGTHS"
            title={`大型ワークの一貫体制
30tクレーン × 機械加工ライン`}
            description="機械加工棟には、揚程12m、30tクレーンを付設しています。
5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）、長尺旋盤などを配置。
大型品の機械加工から溶接品の加工まで、高精度かつ短納期を実現します。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="機械加工の強み 01"
            subTitle="30tクレーン × 門型5面加工機で
超大型機器にも対応"
            description={`門型5面加工機（8m）や大型立旋盤（φ2.5m）を活かし、大型品の機械加工から溶接品の二次加工まで、さまざまな製造ニーズに対応します。`}
            imageUrl="/images/machining/strength-1.webp"
          />
          <ContentSection
            title="機械加工の強み 02"
            subTitle="3次元CAD/CAE/CAMを用いた
複雑な加工、難削加工に対応"
            description={`3次元CAD/CAE/CAM × 5軸加工機により、複雑な加工、難削加工に対応。
3次元測定機へ3次元CADデータを共有することで、ミクロンオーダーの製品を提供可能です。`}
            imageUrl="/images/machining/strength-1.webp"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="機械加工の強み 01"
            subTitle="30tクレーン × 門型5面加工機で
超大型機器にも対応"
            description={`門型5面加工機（8m）や大型立旋盤（φ2.5m）を活かし、大型品の機械加工から溶接品の二次加工まで、さまざまな製造ニーズに対応します。`}
            imageUrl="/images/machining/strength-1.webp"
          />
          <ContentSectionMobile
            title="機械加工の強み 02"
            subTitle="3次元CAD/CAE/CAMを用いた
複雑な加工、難削加工に対応"
            description={`3次元CAD/CAE/CAM × 5軸加工機により、複雑な加工、難削加工に対応。
3次元測定機へ3次元CADデータを共有することで、ミクロンオーダーの製品を提供可能です。`}
            imageUrl="/images/machining/strength-1.webp"
            align="right"
          />
        </div>

        <div className="bg-web-light-bg">
          <div className="container mx-auto mt-20 mlg:mt-[200px] py-12 mlg:py-[120px] space-y-12 mlg:space-y-20">
            <div className="w-full space-y-2 flex flex-col items-center">
              <div className="relative">
                <div
                  className="size-10 bg-web-light absolute -bottom-1 left-0 -translate-x-2/3 z-0"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 90%, 0% 90%)",
                  }}
                />
                <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
                  SCOPE OF COVERAGE
                </p>
              </div>
              <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
                対応範囲
              </p>
              <p className="text-web-dark text-base mt-12 text-left w-full">
                厳しい精度要求や、小ロット・短納期のご依頼にも対応いたします。なんでもお気軽にお問い合わせください。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mlg:grid-cols-3 mlg:gap-6">
              <CoverageCard
                title="大型構造物・筐体加工"
                description={`30tクレーンと門型5面加工機を活かし、原子炉用遮へいセルや宇宙試験装置フレームなど、大型筐体の高精度切削に<span style="color: #FF0404;">対応しています</span>。`}
                imageUrl="/images/machining/strength-1.webp"
              />
              <CoverageCard
                title="高精度部品・治具加工"
                description={`横中ぐりフライス盤・立旋盤を組み合わせ、φ3,000mmの真円度5µm以内や、平面度10µm以内といった厳しい精度要求にも<span style="color: #FF0404;">対応しています</span>。`}
                imageUrl="/images/machining/strength-1.webp"
              />
              <CoverageCard
                title="試作～量産の短納期対応"
                description={`治具製作から機械加工、表面処理までを社内外のネットワークで統合し、小ロット・短納期の製品もワンストップで提供しています。`}
                imageUrl="/images/machining/strength-1.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
