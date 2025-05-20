import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContentSection from "../ContentSection";
import CorporateHeading from "../CorporateHeading";
import Certification from "./Certification";
import ContentSectionMobile from "../ContentSectionMobile";

export default function Quarity() {
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
              FACTORY
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              工場について
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
              工場について
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
            description="他業界と比較してもハイレベルな品質管理が必要とされる原子力業界。長年、原子力業界で製品作りを行ってきた経験から徹底した品質管理を心掛けています。"
          />
        </div>
        <div className="space-y-[200px] hidden md:block">
          <ContentSection
            title="品質へのこだわり 01"
            subTitle="工程内検査"
            description={`寸法検査、気密検査、浸透探傷試験、外観検査等、多様な検査に対応しています。
  工程内検査では、溶接が指示された通りに行われているかを確認したり、製作工程の中で、重要となる工程(ここで失敗すると要求通りの製品ができない重要な工程）後に検査をします。
  工程内検査以外にも、完成検査、立会検査等、製品を納めるまでに色々な検査を行います。
  `}
            imageUrl="/images/achivement.png"
          />

          <ContentSection
            title="品質へのこだわり 02"
            imageUrl="/images/achivement.png"
            subTitle="検査機器の校正"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。
  `}
            align="right"
          />

          <ContentSection
            imageUrl="/images/achivement.png"
            title="品質へのこだわり 03"
            subTitle="材料のトレーサビリティ"
            description={`製作前に、使用する材料が指示通りのものであるかを材料の表示（ステンシル）とミルシート（材料証明書）、図面等を用いて確認します。
確認した材料に、ラベルを貼付し、指示通りの場所に使われたことを確認できる様に管理します。`}
          />

          <ContentSection
            imageUrl="/images/achivement.png"
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
            description={`寸法検査、気密検査、浸透探傷試験、外観検査等、多様な検査に対応しています。
  工程内検査では、溶接が指示された通りに行われているかを確認したり、製作工程の中で、重要となる工程(ここで失敗すると要求通りの製品ができない重要な工程）後に検査をします。
  工程内検査以外にも、完成検査、立会検査等、製品を納めるまでに色々な検査を行います。
  `}
            imageUrl="/images/achivement.png"
          />

          <ContentSectionMobile
            title="品質へのこだわり 02"
            subTitle="検査機器の校正"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。
  `}
            imageUrl="/images/achivement.png"
            align="right"
          />

          <ContentSectionMobile
            title="品質へのこだわり 03"
            subTitle="材料のトレーサビリティ"
            description={`製作前に、使用する材料が指示通りのものであるかを材料の表示（ステンシル）とミルシート（材料証明書）、図面等を用いて確認します。
確認した材料に、ラベルを貼付し、指示通りの場所に使われたことを確認できる様に管理します。`}
            imageUrl="/images/achivement.png"
          />

          <ContentSectionMobile
            title="品質へのこだわり 04"
            subTitle="三次元測定器による出荷検査"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            align="right"
            imageUrl="/images/achivement.png"
          />
        </div>
        <Certification />
      </div>
    </section>
  );
}
