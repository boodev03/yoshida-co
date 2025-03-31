import { Copy } from "@/components/icons/Copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CareerSection() {
  return (
    <section className="pt-5 mlg:pt-[200px] pb-[140px] relative">
      <div className="container">
        <div
          className={cn(
            "flex gap-[72px]",
            "flex-col mlg:flex-row gap-12 mlg:gap-[72px]"
          )}
        >
          <div
            className={cn(
              "max-w-full space-y-6",
              "w-full sm:w-[504px] pt-8 sm:pt-0"
            )}
          >
            <div className="space-y-4">
              <h4 className="relative z-10 section-title text-web-main uppercase">
                JOB OPENING
                <div
                  className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
                  style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
                />
              </h4>
              <p className="text-jp-h2 text-web-dark mt-4 mb-6">採用情報</p>
            </div>

            <p className="text-jp-p2 text-web-dark">
              株式会社ヨシダでは、技術を活かしたい人材の募集を行っています。
            </p>

            <Button>
              採用情報を見る
              <Copy />
            </Button>
          </div>

          <div className="flex-1 relative aspect-[auto_1.77778]">
            <Image src="/images/job-opening.png" alt="career" fill />
          </div>
        </div>
      </div>

      {/* Decor */}
      <div
        className="absolute size-full -z-[1] top-20 left-0 bg-web-gray hidden mlg:block"
        style={{
          clipPath: "polygon(0% 0%, 66.7% 0%, 85.4% 100%, 0% 100%)",
        }}
      />

      <div
        className="absolute size-full -z-[1] top-0 left-0 bg-web-gray mlg:hidden"
        style={{
          clipPath: "polygon(0% 0%, 33.3% 0%, 100% 67.5%, 100% 100%, 0% 100%)",
        }}
      />
    </section>
  );
}
