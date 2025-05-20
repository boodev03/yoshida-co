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
            <Image src="/images/achivement.png" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              工場について
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
            title={`設計の強み概要のテキストを
ここに入力する。`}
            description="設計の強み概要のテキストをここに入力する。設計の強み概要のテキストをここに入力する。設計の強み概要のテキストをここに入力する。設計の強み概要のテキストをここに入力する。"
          />
        </div>

        <div className="hidden md:block space-y-[200px] mt-20 mlg:mt-[120px]">
          <ContentSection
            title="設計の強み 01"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
          />
          <ContentSection
            title="設計の強み 02"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
            align="right"
          />
        </div>

        <div className="block md:hidden space-y-20">
          <ContentSectionMobile
            title="設計の強み 01"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
          />
          <ContentSectionMobile
            title="設計の強み 02"
            subTitle="強みを紹介するテキスト"
            description={`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
            imageUrl="/images/achivement.png"
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
                title="材質"
                description={`テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れ。... `}
                imageUrl="/images/achivement.png"
              />
              <CoverageCard
                title="サイズ"
                description={`テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れ。...  `}
                imageUrl="/images/achivement.png"
              />
              <CoverageCard
                title="加工精度"
                description={`テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れる。テキストをここに入れ。... `}
                imageUrl="/images/achivement.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
