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

      <div className="py-[60px] md:py-[120px]">
        <div className="container mx-auto">
          <CorporateHeading
            sectionName="TECHNOLOGY STRENGTHS"
            title={`原子力業界から医療、宇宙と幅広い業界での
製造や開発で磨いてきた技術`}
            description="長年製品開発を行ってきた原子力業界での隔離技術から、医療業界での放射線の隔離など、業界を超え様々な製品開発に挑戦し、技術を培ってきました。"
          />
        </div>

        <div className="hidden md:block space-y-[200px]">
          <ContentSection
            title="ヨシダの強み 01"
            subTitle="隔離・遮蔽技術を生かした製品"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
          />
          <ContentSection
            title="ヨシダの強み 02"
            subTitle="大型装置の製造"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="ヨシダの強み 01"
            subTitle="隔離・遮蔽技術を生かした製品"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
          />
          <ContentSectionMobile
            title="ヨシダの強み 02"
            subTitle="大型装置の製造"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            align="right"
          />
        </div>
        <Strengths />
        <RAndD />
      </div>
    </section>
  );
}
