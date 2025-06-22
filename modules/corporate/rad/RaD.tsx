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
            <Image src="/images/RandD/banner.webp" alt="blog-decor" fill />
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
          <p className="text-web-dark text-[13px] md:text-base text-center -tracking-[0.02em] mb-12">
            『FROM DECOMMISSIONING TO
            SPACE（廃炉から宇宙まで）』のテーマのもと、
            <br />
            大学や研究機関、ベンチャー企業とさまざまな共同研究を実施しています。
          </p>
          <CorporateHeading
            sectionName="PROJECT 01"
            title={`ロボットアーム遠隔操作型
次世代グローブボックス`}
            description="作業中の被ばくや汚染リスクの低減を目指すプロジェクトです。グローブボックス製造で培った遮へい・隔離技術にロボットアームを組み合わせることで、安全性と作業効率の両立を図ります。国立大学やベンチャー企業とコンソーシアムを組み、課題解決に取り組んでいます。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="CONTENTS"
            subTitle="開発の内容"
            description={`グローブボックス内に、耐放射線仕様のロボットアームと、“指先”にあたるエンドエフェクタを組み込みます。人の手の代わりにロボットが操作を行い、作業員は離れた安全な場所からリモート操作する仕組みです。触覚フィードバックにより“つかむ強さ”も再現でき、微細な分析作業でも操作感を損なうことはありません。`}
            imageUrl="/images/RandD/strength-1.webp"
            developmentItems={[
              "耐放射線性、触覚フィードバック機能を有する3本指エンドエフェクタ",
              "耐放射線性機能を有するアーム",
              "分析用アームに特化したコントローラー",
            ]}
            developmentTitle="開発項目"
          />
          <div className="container mx-auto mb-8 mlg:mb-[120px]">
            <CorporateHeading
              sectionName="PROJECT 02"
              title={`有機溶媒の水分分離プロセス`}
              description="有機溶媒の処分には、さまざまな規制が適用されます。ヨシダは、他産業で実績のある溶剤抽出技術に着目し、有機溶媒と水分を安全かつ効率的に分離する実証試験を進めています。専門分野の企業との連携により、お客様の課題解決に向けて多様な挑戦を続けています。"
            />
          </div>

          <ContentSection
            title="CONTENTS"
            subTitle="プロジェクトの内容"
            description={`検討中のプロセスでは、溶液に専用溶剤を添加し、「水分だけを選択的に抽出」→減容化→安全に処理・再利用する流れを想定。
廃棄コストの低減と環境負荷の最小化の両立を目指しています。`}
            imageUrl="/images/RandD/strength-2.webp"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="CONTENTS"
            subTitle="開発の内容"
            description={`グローブボックス内に、耐放射線仕様のロボットアームと、“指先”にあたるエンドエフェクタを組み込みます。人の手の代わりにロボットが操作を行い、作業員は離れた安全な場所からリモート操作する仕組みです。触覚フィードバックにより“つかむ強さ”も再現でき、微細な分析作業でも操作感を損なうことはありません。`}
            imageUrl="/images/RandD/strength-1.webp"
            developmentItems={[
              "耐放射線性、触覚フィードバック機能を有する3本指エンドエフェクタ",
              "耐放射線性機能を有するアーム",
              "分析用アームに特化したコントローラー",
            ]}
          />
          <div className="container mx-auto mb-8">
            <CorporateHeading
              sectionName="PROJECT 02"
              title={`有機溶媒の水分分離プロセス`}
              description="有機溶媒の処分には、さまざまな規制が適用されます。ヨシダは、他産業で実績のある溶剤抽出技術に着目し、有機溶媒と水分を安全かつ効率的に分離する実証試験を進めています。専門分野の企業との連携により、お客様の課題解決に向けて多様な挑戦を続けています。"
            />
          </div>
          <ContentSectionMobile
            title="CONTENTS"
            subTitle="プロジェクトの内容"
            description={`検討中のプロセスでは、溶液に専用溶剤を添加し、「水分だけを選択的に抽出」→減容化→安全に処理・再利用する流れを想定。
廃棄コストの低減と環境負荷の最小化の両立を目指しています。`}
            imageUrl="/images/RandD/strength-2.webp"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
