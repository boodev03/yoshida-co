"use client";
import Image from "next/image";
import { Copy } from "./icons/Copy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Footer() {
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
                  <p className="text-white hidden md:block text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                    ヨシダの技術
                  </p>
                  <ul className="space-y-2 hidden md:block">
                    {["隔離技術", "溶接技術", "設計技術", "研究開発"].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="cursor-pointer text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2 hover:opacity-30 transition-opacity duration-300"
                        >
                          <span className="block w-2 border-1 border-white rounded-full" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <Accordion type="single" collapsible className="md:hidden">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white rounded-none">
                        企業情報
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 px-4 text-white pt-4">
                        <ul className="space-y-2">
                          {["隔離技術", "溶接技術", "設計技術", "研究開発"].map(
                            (item, index) => (
                              <li
                                key={index}
                                className="cursor-pointer text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2 hover:opacity-30 transition-opacity duration-300"
                              >
                                <span className="block w-2 border-1 border-white rounded-full" />
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="space-y-4">
                  <p className="text-white hidden md:block text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                    工場について
                  </p>
                  <ul className="space-y-2 hidden md:block">
                    {["工場設備", "品質管理"].map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2 hover:opacity-30 transition-opacity duration-300"
                      >
                        <span className="block w-2 border-1 border-white rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Accordion type="single" collapsible className="md:hidden">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white rounded-none">
                        工場について
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 px-4 text-white pt-4">
                        <ul className="space-y-2">
                          {["工場設備", "品質管理"].map((item, index) => (
                            <li
                              key={index}
                              className="cursor-pointer text-white text-xs tracking-[-0.015em] font-medium flex items-center gap-2 hover:opacity-30 transition-opacity duration-300"
                            >
                              <span className="block w-2 border-1 border-white rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="basis-1/3 space-y-10">
                <p className="text-white text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
                  新着情報
                </p>
                <p className="cursor-pointer text-white flex items-center gap-2 text-base leading-[1.6] tracking-[0.02em] font-bold pb-4 border-b border-white">
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
    </footer>
  );
}
