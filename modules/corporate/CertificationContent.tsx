import Image from "next/image";

export default function CertificationContent() {
  return (
    <div>
      <div className="pb-6 mlg:pb-12 border-b-2 border-line-gray w-full space-y-2">
        <div className="relative">
          <div
            className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light rotate-[135deg]"
            style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
          />
          <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
            CERTIFICATION
          </p>
        </div>
        <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
          認証
        </p>
      </div>

      <div className="pt-12 mlg:pt-20 mlg:px-8 divide-y divide-line-gray">
        <p className="py-6 text-[15px] md:text-base font-bold text-center whitespace-pre-line w-full text-web-dark tracking-[-0.02em] border-t border-b border-line-gray">
          建設業許可証明書・茨城県知事（一般）18040号（管工事・機械器具設置工事業）
        </p>

        <div className="divide-y divide-line-gray">
          <div className="py-6 flex flex-col gap-4 md:flex-row">
            <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
              平成29年
            </p>
            <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
              ISO9001:2015 認証取得
            </p>
          </div>
          <div className="py-6 flex flex-col gap-4 md:flex-row">
            <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
              平成29年
            </p>
            <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
              ISO14001:2015 認証取得
            </p>
          </div>
          <div className="py-6 flex flex-col gap-4 md:flex-row">
            <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
              平成29年
            </p>
            <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
              水戸市優良工場認定
            </p>
          </div>
          <div className="py-6 flex flex-col gap-4 md:flex-row">
            <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
              平成30年
            </p>
            <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
              地域未来牽引企業認定
            </p>
          </div>
          <div className="py-6 flex flex-col gap-4 md:flex-row border-b border-line-gray">
            <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
              令和元年 6月
            </p>
            <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
              はばたく中小企業社300認定
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex mlg:grid mlg:grid-cols-3 gap-8 overflow-x-auto mlg:overflow-visible">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="aspect-video relative min-w-[256px] md:min-w-0"
            >
              <Image
                src={`/images/company/iso-cert-${index + 1}.webp`}
                alt={`Certification image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
