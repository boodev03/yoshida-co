export default function Inpsection() {
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
              INSPECTION CAPABILITIES
            </p>
          </div>
          <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
            対応する検査・種類
          </p>
        </div>

        <div className="w-[992px] max-w-full mx-auto bg-white px-8 py-12 space-y-4">
          <div className="*:text-center space-y-2 *:text-[15px] md:text-base -tracking-[0.02em] *:text-web-dark *:font-bold">
            <p className="!text-web-main !text-xl">非破壊検査</p>
            <p>溶剤除去性浸透探傷試験</p>
            <p>超音波探傷試験</p>
            <p>磁気探傷試験</p>
            <p>放射能透過磁気探傷試験</p>
          </div>
          <div className="*:text-center space-y-1 *:text-xs md:text-sm -tracking-[0.02em] *:text-web-dark">
            <p className="!mb-2 !text-web-main !text-xl font-bold">
              その他検査
            </p>
            <p>気体漏れ検査</p>
            <p>水漏れ検査</p>
            <p>耐圧検査</p>
            <p>膜圧検査</p>
          </div>
        </div>
      </div>
    </div>
  );
}
