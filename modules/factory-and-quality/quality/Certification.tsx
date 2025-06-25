export default function Certification() {
  return (
    <div className="bg-web-light-bg py-[60px] md:py-20">
      <div className="container mx-auto space-y-12 md:space-y-20">
        <div className="w-full space-y-2 flex flex-col items-center md:items-start">
          <div className="relative">
            <div
              className="size-10 bg-web-light absolute -bottom-1 left-0 -translate-x-2/3 z-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 90%, 0% 90%)",
              }}
            />
            <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
              CERTIFICATION
            </p>
          </div>
          <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
            所得資格
          </p>
        </div>

        <div className="w-[992px] max-w-full mx-auto bg-white px-8 py-12 divide-y divide-line-gray">
          <p className="text-web-dark text-[13px] md:text-base font-bold text-center pb-6">
            建設業許可証明書・茨城県知事（一般）18040号（管工事・機械器具設置工事業）
          </p>
          <div className="py-6 flex items-center">
            <p className="w-[256px] text-web-main text-[13px] md:text-base font-bold">
              平成29年
            </p>
            <p className="text-web-dark text-[13px] md:text-base font-bold">
              ISO9001:2015 認証取得
            </p>
          </div>
          <div className="pt-6 flex items-center">
            <p className="w-[256px] max-w-full text-web-main text-[13px] md:text-base font-bold">
              平成29年
            </p>
            <p className="text-web-dark text-[13px] md:text-base font-bold">
              ISO14001:2015 認証取得
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
