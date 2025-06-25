import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../corporate/ContentSection";
import ContentSectionMobile from "../corporate/ContentSectionMobile";
import CorporateHeading from "../corporate/CorporateHeading";
import Link from "next/link";

export default function FactoryAndQuality() {
  return (
    <section className="pb-[82px] mlg:pb-[90px] font-noto-sans">
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
              FACTORY & QUALITY
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              工場と品質への 取り組み
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
              品質保証
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] md:py-[120px]">
        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="EQUIPMENT"
            subTitle="工場設備"
            description={`敷地約14,000㎡・建屋4,500㎡の本社工場は、製缶・マシニング・旋盤の3部門で構成され、各エリアは約15m×90mの広さを確保。
30tツインクレーンや10t・5tクレーンを備え、12mの揚程で長尺・重量物の安全な搬送が可能です。5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）を活用し、大型機器の製缶から高精度加工まで一貫対応します。`}
            imageUrl="/images/factory-and-quality/equipment.webp"
            developmentItems={["本社工場はステンレスのみ", "塩崎工場は鉄対応"]}
            developmentTitle="工場の特徴"
            button={
              <Link href="/factory-and-quality/equipment">
                <Button className="group relative overflow-hidden">
                  工場設備を見る
                  <ArrowRight />
                </Button>
              </Link>
            }
          />

          <ContentSection
            title="QUALITY"
            subTitle="品質保証"
            description={`ISO 9001を基盤に原子力規格の検査手順を組み込み、寸法・幾何公差測定から気密試験、浸透探傷・超音波探傷まで多層チェックを実施。材料トレーサビリティと3次元測定機による自動出荷検査で「不適合ゼロ」を追求し、医療・宇宙分野にも通用するハイレベル品質を保証します。`}
            imageUrl="/images/factory-and-quality/quality.webp"
            button={
              <Link href="/factory-and-quality/quality">
                <Button className="group relative overflow-hidden">
                  工場設備を見る
                  <ArrowRight />
                </Button>
              </Link>
            }
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="EQUIPMENT"
            subTitle="工場設備"
            description={`敷地約14,000㎡・建屋4,500㎡の本社工場は、製缶・マシニング・旋盤の3部門で構成され、各エリアは約15m×90mの広さを確保。
30tツインクレーンや10t・5tクレーンを備え、12mの揚程で長尺・重量物の安全な搬送が可能です。5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）を活用し、大型機器の製缶から高精度加工まで一貫対応します。`}
            imageUrl="/images/factory-and-quality/equipment.webp"
            developmentItems={["本社工場はステンレスのみ", "塩崎工場は鉄対応"]}
          />
          <div className="container mx-auto mb-8">
            <CorporateHeading
              sectionName="PROJECT 02"
              title={`有機溶媒の水分分離プロセス`}
              description="有機溶媒の処分には、さまざまな規制が適用されます。ヨシダは、他産業で実績のある溶剤抽出技術に着目し、有機溶媒と水分を安全かつ効率的に分離する実証試験を進めています。専門分野の企業との連携により、お客様の課題解決に向けて多様な挑戦を続けています。"
            />
          </div>
          <ContentSectionMobile
            title="QUALITY"
            subTitle="品質保証"
            description={`ISO 9001を基盤に原子力規格の検査手順を組み込み、寸法・幾何公差測定から気密試験、浸透探傷・超音波探傷まで多層チェックを実施。材料トレーサビリティと3次元測定機による自動出荷検査で「不適合ゼロ」を追求し、医療・宇宙分野にも通用するハイレベル品質を保証します。`}
            imageUrl="/images/factory-and-quality/quality.webp"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
