import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Strengths() {
  return (
    <div className="bg-web-light-bg pt-12 pb-[60px] mlg:py-[120px] mlg:mt-[200px]">
      <div className="space-y-12 md:space-y-20 container mx-auto">
        <div className="w-full space-y-2 flex flex-col items-center">
          <div className="relative">
            <div
              className="size-10 bg-web-light absolute -bottom-1 left-0 -translate-x-2/3 z-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 90%, 0% 90%)",
              }}
            />
            <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
              STRENGTHS
            </p>
          </div>
          <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
            各部門の強み
          </p>
        </div>

        <div className="space-y-12 mlg:space-y-20">
          <div className="flex flex-col gap-6 mlg:flex-row mlg:items-center mlg:gap-8">
            <div className="relative aspect-video max-w-[544px] w-full shrink-0">
              <Image
                src="/images/achivement.png"
                alt="achivement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-[32px] font-bold text-web-dark -tracking-[0.02em]">
                設計部門について
              </p>
              <p className="text-[15px] md:text-base font-normal font-noto-sans-jp -tracking-[0.02em]">
                {`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
              </p>

              <Button className="group relative overflow-hidden">
                設計の技術を見る
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 mlg:flex-row mlg:items-center mlg:gap-8">
            <div className="relative aspect-video max-w-[544px] w-full shrink-0">
              <Image
                src="/images/achivement.png"
                alt="achivement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-[32px] font-bold text-web-dark -tracking-[0.02em]">
                設計部門について
              </p>
              <p className="text-[15px] md:text-base font-normal font-noto-sans-jp -tracking-[0.02em]">
                {`テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。テキストを入力します。`}
              </p>

              <Button className="group relative overflow-hidden">
                設計の技術を見る
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
