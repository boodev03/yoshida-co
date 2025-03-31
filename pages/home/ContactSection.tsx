import { Mail } from "@/components/icons/Mail";
import { Phone } from "@/components/icons/Phone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section className="relative">
      <div
        className={cn(
          "container mx-auto bg-web-vivid z-100 relative -top-20 mlg:top-0",
          "px-6 md:px-[120px] py-[60px] md:py-20 md:h-[390px] md:mx-auto"
        )}
      >
        <div
          className={cn(
            "flex items-center",
            "flex-col md:flex-row justify-center md:justify-between gap-12"
          )}
        >
          <div className="w-full space-y-6">
            <div className="space-y-4">
              <h4 className="relative z-10 section-title text-white uppercase">
                CONTACT
                <div
                  className="absolute top-0 left-0 -translate-x-1/2 size-[30px] -z-[1] bg-web-light rotate-[135deg]"
                  style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
                />
              </h4>
              <p className="text-jp-h2 text-white mt-4 mb-6">お問い合わせ</p>
            </div>

            <p className="text-jp-p2 text-white">
              お見積もり依頼や、製造に関するお問い合わせはこちらから
            </p>
          </div>

          {/* Button */}
          <div className="w-full md:w-[350px] max-w-full space-y-6 md:space-y-8">
            <Button
              className={cn(
                "bg-white text-web-vivid hover:bg-white/80 w-full rounded-full text-lg md:text-base",
                "h-20 md:h-[99px]"
              )}
            >
              <Mail />
              お問い合わせ
            </Button>
            <Button
              className={cn(
                "bg-white text-web-vivid hover:bg-white/80 w-full rounded-[8px] flex-col items-center gap-1 md:gap-0",
                "h-20 md:h-[99px]"
              )}
            >
              <p className="flex items-center text-2xl md:text-[32px]leading-[1.6] tracking-[0.02em] font-normal">
                <Phone />
                029-297-1005
              </p>
              <p className="text-web-light font-medium text-sm tracking-[-0.015em] leading-[17px]">
                受付時間 8:00 - 17:00 ( 土日・祝日除く )
              </p>
            </Button>
          </div>
        </div>
      </div>

      {/* Apart of background */}
      <div
        className="absolute bottom-0 left-0 size-full bg-web-dark"
        style={{
          clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
        }}
      />
    </section>
  );
}
