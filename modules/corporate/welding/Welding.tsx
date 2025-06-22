import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../ContentSection";
import ContentSectionMobile from "../ContentSectionMobile";
import CorporateHeading from "../CorporateHeading";
import CoverageCard from "../CoverageCard";

export default function Welding() {
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
              WELDING
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              製缶・溶接
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/welding/banner.webp" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              ヨシダの技術
            </p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              溶接
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto">
          <CorporateHeading
            sectionName="WELDING STRENGTHS"
            title={`原子力製品に対応する溶接品質
0.1mm〜150mm厚、ステンレスからチタンまで対応`}
            description="製缶・溶接棟には、揚程12m、30tクレーンを付設し、TIG溶接、アーク溶接、プラズマ溶接、ファイバーレーザー溶接、ロボット溶接を配置。日本溶接協会および原子炉等規制法に係る溶接士が在籍し、薄板から厚板、ステンレスからアルミ、インコネル、チタンなど多様な溶接に対応しています。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="溶接の強み 01"
            subTitle="原子力製品で培った溶接技術
気密性を担う製缶技術"
            description={`原子力規格に準拠した検査・管理体制を整備  し、完全なトレーサビリティを確保しています。また、日本溶接協会および原子炉等規制法に係る認定を受けた溶接士が、製作を担当しています。`}
            imageUrl="/images/welding/strength-1.webp"
            developmentItems={[
              `施設建設技術標準(CTS)
JAEA G2A、JAEA J3`,
              `ステンレス鋼溶接(JIS Z 3821-2018)
TN-P、MA-F、TN-F`,
              `アーク溶接(JIS Z 3801-2018)
T-1P、T-1F`,
              `半自動溶接(JIS Z 3841-2018)
SA-3V、SA-3H、SA-3F、SA-2F`,
              `アルミニウム溶接(JIS Z 3811)
TN-2F、TN-1F`,
              `普通ボイラー溶接`,
            ]}
            developmentTitle="溶接資格"
          />
          <ContentSection
            title="溶接の強み 02"
            subTitle="設計、製缶・溶接、機械加工を
ワンストップで迅速対応"
            description={`設計、製缶・溶接、機械加工の3部門が同一サイトで連携し、製缶溶接後すぐに5面加工や立旋盤による仕上げへ移行できる工程設計を採用。
外部搬送や治具の再段取りが不要なため、試作レベルの一点物から高精度な大型機器、小ロット生産にまでスピーディーに対応し、お客様専用仕様を短納期でお届けしています。`}
            imageUrl="/images/welding/strength-1.webp"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="溶接の強み 01"
            subTitle="原子力製品で培った溶接技術
気密性を担う製缶技術"
            description={`原子力規格に準拠した検査・管理体制を整備  し、完全なトレーサビリティを確保しています。また、日本溶接協会および原子炉等規制法に係る認定を受けた溶接士が、製作を担当しています。`}
            imageUrl="/images/welding/strength-1.webp"
          />
          <ContentSectionMobile
            title="溶接の強み 02"
            subTitle="設計、製缶・溶接、機械加工を
ワンストップで迅速対応"
            description={`設計、製缶・溶接、機械加工の3部門が同一サイトで連携し、製缶溶接後すぐに5面加工や立旋盤による仕上げへ移行できる工程設計を採用。
外部搬送や治具の再段取りが不要なため、試作レベルの一点物から高精度な大型機器、小ロット生産にまでスピーディーに対応し、お客様専用仕様を短納期でお届けしています。`}
            imageUrl="/images/welding/strength-1.webp"
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
              <p className="text-web-dark text-base mt-12">
                薄いものから厚みのあるものまで、幅広く対応しています。小規模開発から大型設備まで対応可能ですので、なんでもお気軽にお問い合わせください。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mlg:grid-cols-3 mlg:gap-6">
              <CoverageCard
                title="グローブボックス／アイソレータ筐体"
                description={`水分・酸素を除去した高純度環境下 <span style="color: #FF0404;">でTIG溶接を行い</span> 低リーク・高クリーン度を保証する医薬・核融合研究用筐体を <span style="color: #FF0404;">提供しています</span> 。`}
                imageUrl="/images/welding/strength-1.webp"
              />
              <CoverageCard
                title="鉛遮へい容器・厚板製缶"
                description={`<span style="color: #FF0404;">30mm</span>以上の厚板SUS304／316Lや、鉛・炭素鋼を高入熱TIG／プラズマで溶接し、機械仕上げまで一貫対応。大型放射線遮へい設備の納期短縮に貢献します。`}
                imageUrl="/images/welding/strength-1.webp"
              />
              <CoverageCard
                title="ハステロイ・チタン高気密溶接"
                description={`腐食・高温環境で使用されるハステロイC-22やチタン材を、高気密プラズマ溶接。漏洩検査<span style="color: #FF0404;">や</span>X線透過試験にも社内で対応<span style="color: #FF0404;">しています</span>。`}
                imageUrl="/images/welding/strength-1.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
