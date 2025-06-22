import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../ContentSection";
import ContentSectionMobile from "../ContentSectionMobile";
import CorporateHeading from "../CorporateHeading";
import CoverageCard from "../CoverageCard";

export default function Design() {
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
              DESIGN
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">設計</span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/design/banner.webp" alt="Design" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              ヨシダの技術
            </p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              設計
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto">
          <CorporateHeading
            sectionName="DESIGN STRENGTHS"
            title={`製造過程を理解した設計
ヒアリングから製造までシームレスに対応`}
            description="機械・電気・制御設計から耐震解析までをワンストップで対応。
設計者自らが工場へ足を運び、製造部門と打合せや進捗確認を行うことで、お客様の要求を最大限実現できる体制を整えています。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="設計の強み 01"
            subTitle="専門分野を掛け合わせ
未踏領域へ挑戦"
            description={`メンバーは、機械・電気・制御・流体・解析など、多分野のスペシャリスト。それぞれの知見を持ち寄り、「パズルのピース」を組み合わせるような発想で、医薬や宇宙といった新たな分野の課題にも、チャレンジ精神を持って取り組んでいます。`}
            imageUrl="/images/design/strength-1.webp"
          />
          <ContentSection
            title="設計の強み 02"
            subTitle="工場併設の環境
図面と現物を往復しながら最適化"
            description={`事務棟と製造棟が隣接しているため、設計者は製造現場とリアルタイムで意見交換を行うことが可能です。お客様との打ち合わせには設計担当が同席し、要望を即時に図面へ反映 → 試作 → フィードバックという短サイクルで、製品品質の向上を図っています。`}
            imageUrl="/images/design/strength-2.webp"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="設計の強み 01"
            subTitle="専門分野を掛け合わせ
未踏領域へ挑戦"
            description={`メンバーは、機械・電気・制御・流体・解析など、多分野のスペシャリスト。それぞれの知見を持ち寄り、「パズルのピース」を組み合わせるような発想で、医薬や宇宙といった新たな分野の課題にも、チャレンジ精神を持って取り組んでいます。`}
            imageUrl="/images/design/strength-1.webp"
          />
          <ContentSectionMobile
            title="設計の強み 02"
            subTitle="工場併設の環境
図面と現物を往復しながら最適化"
            description={`事務棟と製造棟が隣接しているため、設計者は製造現場とリアルタイムで意見交換を行うことが可能です。お客様との打ち合わせには設計担当が同席し、要望を即時に図面へ反映 → 試作 → フィードバックという短サイクルで、製品品質の向上を図っています。`}
            imageUrl="/images/design/strength-2.webp"
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
            </div>

            <div className="grid grid-cols-1 gap-12 mlg:grid-cols-3 mlg:gap-6">
              <CoverageCard
                title="概念設計"
                description={`要求仕様のヒアリングから装置構成を検討。
営業と同行のうえ、お客様のご要望を直接ヒアリングし、最適な構成をご提案します。`}
                imageUrl="/images/design/strength-1.webp"
              />
              <CoverageCard
                title="解析"
                description={`FEM（有限要素法）による固有値解析・静解析などを実施。　原子力施設向けの耐震設計にも社内で即時対応し、検討期間の短縮とコスト低減を実現します。`}
                imageUrl="/images/design/strength-2.webp"
              />
              <CoverageCard
                title="製作設計"
                description={`確定仕様をもとに、部品図・組立図を作成。溶接・機械加工・組立の各プロセスについて製造部と調整を行い、製造現場に最適な図面を提供しています。`}
                imageUrl="/images/design/strength-3.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
