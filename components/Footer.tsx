"use client";
import Image from "next/image";
import { ArrowTopLong } from "./icons/ArrowTopLong";
import { Copy } from "./icons/Copy";

export default function Footer() {
  const onBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-web-dark pt-[75px] mlg:pt-[130px] pb-6 relative">
      <div className="container xl:ml-14">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-[84px] xl:gap-0">
          <div className="basis-1/5 space-y-12">
            <Image
              src="/images/light-logo.png"
              alt="logo"
              width={120}
              height={34}
            />
            <div className="space-y-2">
              <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold">
                本社工場
              </p>
              <p className="text-white text-sm leading-[1.6] tracking-[-0.015em] font-medium">
                〒311-1135 <br />
                茨城県水戸市六反田町1279番地の1
              </p>
            </div>
          </div>

          <div className="basis-3/5 space-y-8">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="basis-1/3 space-y-6 md:space-y-10">
                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  企業情報
                </p>
                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  実例紹介
                </p>
              </div>
              <div className="basis-1/3 space-y-10">
                <div className="space-y-4">
                  <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                    企業情報
                  </p>
                  <ul className="space-y-2">
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                    企業情報
                  </p>
                  <ul className="space-y-2">
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                    <li className="text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2">
                      <span className="block w-2 border-1 border-white rounded-full" />
                      隔離技術
                    </li>
                  </ul>
                </div>
              </div>
              <div className="basis-1/3 space-y-10">
                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  新着情報
                </p>
                <p className="text-white flex items-center gap-2 text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  採用情報
                  <Copy />
                </p>

                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  お問い合わせ
                </p>
                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  プライバシーポリシー
                </p>
              </div>
            </div>

            {/* Language */}
            <div className="flex xl:justify-end">
              <button className="flex shrink-0 px-3 items-center gap-[6px] text-sm -tracking-[1.5%] text-white font-bold">
                <Image
                  src="/images/global-white.png"
                  alt="language"
                  width={24}
                  height={24}
                  className="size-6"
                />
                <p className="shrink-0">日本語</p>
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs text-white leading-[1.6] tracking-[0.02em] font-bold py-[22px] md:py-4 mt-[60px] md:mt-14 text-center md:text-left">
          ©︎株式会社ヨシダ
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col items-center gap-8 absolute bottom-4 md:bottom-14 right-6 md:right-14">
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <Image
            src="/images/instagram-white.png"
            alt="instagram"
            width={24}
            height={24}
          />
        </a>
        <button
          onClick={onBackToTop}
          className="flex items-center justify-center size-10 rounded-full bg-white hover:bg-white/80 transition-colors duration-300"
        >
          <ArrowTopLong />
        </button>
      </div>
    </footer>
  );
}
