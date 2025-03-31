import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  title: "原子力の隔離技術から、宇宙への挑戦",
  content: `100年続く挑戦の歴史。
技術者が一丸となって
前例のない難題に立ち向かう。

株式会社ヨシダは、
失敗の許されない原子力業界で放射性物質の隔離を行うグローブボックスをはじめとする
製品製造や開発を行い隔離技術を培ってきました。

今では業界の垣根を超えて
様々な製品をお客様の課題に合わせて
完全オーダーメイドで提供しております。

ヨシダは、原子力から宇宙まで、これからも隔離技術を軸とした
挑戦を続けていきます。`,
};

export default function VisionSection() {
  return (
    <section className="mlg:mt-[130px] xl:mt-[170px] pt-[94px] mlg:pt-[120px] pb-[60px] mlg:pb-[150px]">
      <div className="container px-0 mlg:px-8 2xl:px-[72px] flex flex-col mlg:flex-row gap-12 mlg:gap-9 mlg:items-center">
        {/* Left content */}
        <div className="basis-full mlg:basis-5/12 px-6 mlg:px-0">
          <h4 className="relative section-title text-web-main uppercase">
            Vision
            <div
              className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
              style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
            />
          </h4>
          {/* Title */}
          <div className="w-full mlg:w-[420px] mt-4">
            <p className="text-web-dark text-jp-h1">{data.title}</p>
          </div>

          {/* Content */}
          <div className="mt-12 space-y-6">
            <p className="whitespace-pre-wrap break-words text-jp-p1 text-web-dark">
              {data.content}
            </p>

            <Button>
              企業情報を見る
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right content */}
        <div className="basis-full mlg:basis-7/12 flex flex-col gap-5 mlg:gap-12 mlg:mt-10">
          <div className="relative xl:w-[544px] max-w-[544px] aspect-[1.77778] mr-12 xl:mr-0">
            <Image src="/images/vision-1.png" alt="Vision" fill />
          </div>
          <div className="relative xl:w-[544px] max-w-[544px] aspect-[1.77778] ml-12 xl:ml-0 xl:self-end">
            <Image src="/images/vision-2.png" alt="Vision" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
