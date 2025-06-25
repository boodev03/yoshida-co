import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../../corporate/ContentSection";
import ContentSectionMobile from "../../corporate/ContentSectionMobile";
import CorporateHeading from "../../corporate/CorporateHeading";
import Inpsection from "./Inspection";
import Certification from "./Certification";

export default function Quality() {
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
              QUALITY
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              品質保証
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/quality/banner.webp" alt="blog-decor" fill />
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

      <div className="py-[60px] md:py-[120px] space-y-20 md:space-y-[120px]">
        <div className="px-6 container mx-auto">
          <CorporateHeading
            sectionName="COMMITMENT TO QUALITY"
            title={`原子力業界で培ってきた
徹底した品質管理`}
            description="ヨシダは、漏えいが一切許されない原子力機器を長年製作してきた経験をもとに、ISO 9001 に準拠した品質保証体系に原子力規格の要求事項を組み込んだ管理体制を構築・運用しています。この仕組みを医療・宇宙などの新分野にも展開し、設計から出荷検査まで一貫したハイレベルな品質管理と完全なトレーサビリティを実践しています。"
          />
        </div>
        <div className="space-y-[200px] hidden md:block">
          <ContentSection
            title="品質へのこだわり 01"
            subTitle="工程内検査"
            description={`寸法検査、フロンガスを用いた気密検査、浸透探傷試験、超音波探傷試験、外観検査など、幅広い検査に対応しています。溶接が図面指示どおりに行われているかを確認するため、重要工程の直後に中間検査を設定し、合格品のみを次工程へ進めます。完成検査やお客様立ち会い検査を含め、製品出荷に至るまで多段階の品質ゲートを設けることで、不適合品の流出を防止しています。`}
            imageUrl="/images/quality/quality-01.webp"
          />

          <ContentSection
            title="品質へのこだわり 02"
            imageUrl="/images/quality/quality-02.webp"
            subTitle="検査機器の校正"
            description={`品質保証部が出荷検査で使用する測定機器は、校正を実施のうえ管理番号を付けて管理しています。校正には有効期限を設けており、有効期限内の機器のみを使用して出荷検査を行っています。校正作業は外部機関に委託し、各機器ごとにJCSS標章付き校正証明書に紐づく校正記録を取得・保管しています。お客様のご要望に応じて、検査記録と併せて使用機器の校正証明書を提出することも可能です。`}
            align="right"
          />

          <ContentSection
            imageUrl="/images/quality/quality-03.webp"
            title="品質へのこだわり 03"
            subTitle="材料のトレーサビリティ"
            description={`使用する材料が指示どおりであることを、材料表示（ステンシル）、ミルシート（材料証明書）、図面の3点を照合して確認します。確認後はラベルによる管理を実施し、どのロットが製品のどの部位に使用されたかを記録しています。万一の際にも、迅速にロットを特定・追跡し、原因究明および是正措置を行える体制を整えています。`}
          />

          <ContentSection
            imageUrl="/images/quality/quality-04.webp"
            title="品質へのこだわり 04"
            subTitle="三次元測定器による出荷検査"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            align="right"
          />
        </div>
        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="品質へのこだわり 01"
            subTitle="工程内検査"
            description={`寸法検査、フロンガスを用いた気密検査、浸透探傷試験、超音波探傷試験、外観検査など、幅広い検査に対応しています。溶接が図面指示どおりに行われているかを確認するため、重要工程の直後に中間検査を設定し、合格品のみを次工程へ進めます。完成検査やお客様立ち会い検査を含め、製品出荷に至るまで多段階の品質ゲートを設けることで、不適合品の流出を防止しています。`}
            imageUrl="/images/quality/quality-01.webp"
          />

          <ContentSectionMobile
            title="品質へのこだわり 02"
            imageUrl="/images/quality/quality-02.webp"
            subTitle="検査機器の校正"
            description={`品質保証部が出荷検査で使用する測定機器は、校正を実施のうえ管理番号を付けて管理しています。校正には有効期限を設けており、有効期限内の機器のみを使用して出荷検査を行っています。校正作業は外部機関に委託し、各機器ごとにJCSS標章付き校正証明書に紐づく校正記録を取得・保管しています。お客様のご要望に応じて、検査記録と併せて使用機器の校正証明書を提出することも可能です。`}
            align="right"
          />

          <ContentSectionMobile
            imageUrl="/images/quality/quality-03.webp"
            title="品質へのこだわり 03"
            subTitle="材料のトレーサビリティ"
            description={`使用する材料が指示どおりであることを、材料表示（ステンシル）、ミルシート（材料証明書）、図面の3点を照合して確認します。確認後はラベルによる管理を実施し、どのロットが製品のどの部位に使用されたかを記録しています。万一の際にも、迅速にロットを特定・追跡し、原因究明および是正措置を行える体制を整えています。`}
          />

          <ContentSectionMobile
            imageUrl="/images/quality/quality-04.webp"
            title="品質へのこだわり 04"
            subTitle="三次元測定器による出荷検査"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            align="right"
          />
        </div>
      </div>
      <div className="hidden mlg:block">
        <Inpsection />
      </div>
      <div className="block mlg:hidden">
        <Certification />
      </div>
    </section>
  );
}
