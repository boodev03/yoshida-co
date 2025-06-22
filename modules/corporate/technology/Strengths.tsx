import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
                src="/images/technology/strength-3.webp"
                alt="achivement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-[32px] font-bold text-web-dark -tracking-[0.02em]">
                設計
              </p>
              <p className="text-[15px] md:text-base font-normal font-noto-sans-jp -tracking-[0.02em]">
                {`機械・電気・制御設計から耐震解析までをワンストップで対応。設計者自らが工場へ足を運び、製造部門と打合せや進捗確認を行うことで、お客様の要求を最大限実現できる体制を整えています。`}
              </p>

              <Button className="group relative overflow-hidden">
                <Link
                  href="/technology/design"
                  className="flex items-center gap-2"
                >
                  設計の技術を見る
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 mlg:flex-row mlg:items-center mlg:gap-8">
            <div className="relative aspect-video max-w-[544px] w-full shrink-0">
              <Image
                src="/images/technology/strength-4.webp"
                alt="achivement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-[32px] font-bold text-web-dark -tracking-[0.02em]">
                製造
              </p>
              <p className="text-[15px] md:text-base font-normal font-noto-sans-jp -tracking-[0.02em]">
                {`4,500m²の工場には、揚程12m・30tクレーンを付設し、5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）、TIG溶接、アーク溶接、プラズマ溶接、ファイバーレーザー溶接、および3次元測定機を完備。設計から加工・溶接・検査・据付まで、一貫体制で対応します。`}
              </p>

              <div className="flex items-center gap-8">
                <Button className="group relative overflow-hidden">
                  <Link
                    href="/technology/welding"
                    className="flex items-center gap-2"
                  >
                    溶接の技術を見る
                    <ArrowRight />
                  </Link>
                </Button>
                <Button className="group relative overflow-hidden">
                  <Link
                    href="/technology/machining"
                    className="flex items-center gap-2"
                  >
                    機械加工の技術を見る
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
