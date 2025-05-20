import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../ContentSection";
import ContentSectionMobile from "../ContentSectionMobile";
import CorporateHeading from "../CorporateHeading";

export default function RaD() {
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
              R&D
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              研究開発
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/achivement.png" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              研究開発
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto mb-8 mlg:mb-0">
          <CorporateHeading
            sectionName="PROJECT 01"
            title={`令和4年度成長型中小企業等
研究開発支援事業（Go-Tech事業）`}
            description="弊社では、現在、『FROM DECOMMISSIONING TO SPACE(廃炉から宇宙まで)』のテーマのもと、大学やベンチャー企業と様々な共同研究を実施しています。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="溶接の強み 01"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            developmentItems={[
              "耐放射線性、触覚フィードバック機能を有する3本指エンドエフェクタ",
              "耐放射線性機能を有するアーム",
              "分析用アームに特化したコントローラー",
            ]}
          />
          <div className="container mx-auto mb-8 mlg:mb-[120px]">
            <CorporateHeading
              sectionName="PROJECT 02"
              title={`シンチレーターの分離`}
              description="テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。"
            />
          </div>

          <ContentSection
            title="溶接の強み 02"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="溶接の強み 01"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            developmentItems={[
              "耐放射線性、触覚フィードバック機能を有する3本指エンドエフェクタ",
              "耐放射線性機能を有するアーム",
              "分析用アームに特化したコントローラー",
            ]}
          />
          <div className="container mx-auto mb-8">
            <CorporateHeading
              sectionName="PROJECT 02"
              title={`シンチレーターの分離`}
              description="テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。テキストを入力する。"
            />
          </div>
          <ContentSectionMobile
            title="溶接の強み 02"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
