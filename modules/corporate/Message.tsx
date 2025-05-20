"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const content = `私たちヨシダは、常に挑戦を続ける企業です。
1923年に創業、今日まで100年以上の歴史を持ちます。
1961年には、日本で初めてグローブボックスの設計・製作に携わり原子力産業へと参入いたしました。
弊社の強みは、設計・製缶溶接・機械加工、三部門の連携による社内一貫製作体制、お客様のニーズを最大限反映した製品製作が可能であることです。

また近年は、福島第一原子力発電所の廃炉作業で培った遮へい・隔離技術を、医療分野や宇宙産業等へ応用するなど、常に自社の保有技術を活用できる分野を探究し続けております。
研究開発も積極的に取り組んでおり、遠隔操作を可能とする次世代グローブボックスの開発や福島第一原子力発電所から放出される処理水の分離法の確立など、大学、研究期間、ベンチャー企業等と連携し取り組んでいます。

常に日頃より、「困ったときはヨシダさん」とお声がけ頂ける存在になれることを意識して、精進して参ります。
今後とも、皆様のご指導ご鞭撻をよろしくお願いいたします。`;

export default function Message() {
  return (
    <section className="px-6 mlg:px-0">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="basis-full mlg:basis-5/12"
        >
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative section-title text-web-main uppercase"
          >
            MESSAGE
            <div
              className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
              style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
            />
          </motion.h4>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full mlg:w-[420px] mt-4"
          >
            <p className="text-web-dark text-jp-h1">代表挨拶</p>
          </motion.div>
        </motion.div>

        <div>
          <div className="relative mt-2 space-y-6 mlg:space-y-12">
            {/* Animated border line */}
            <div className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden">
              <div className="w-full h-full relative"></div>
            </div>
            {/* Outlined text */}
            <AnimatedHeading />
            <div className="relative flex items-start flex-col mlg:flex-row">
              <div className="max-w-full mlg:max-w-[640px] shrink-0 space-y-12">
                <p className="text-[15px] mlg:text-base relative z-10 text-web-dark tracking-[-0.02em] whitespace-pre-line">
                  {content}
                </p>

                <div className="flex items-baseline gap-4 mlg:justify-end relative z-10">
                  <p className="text-[13px] mlg:text-[15px] tracking-[-0.02em] text-web-main font-bold">
                    代表取締役
                  </p>
                  <p className="text-xl mlg:text-[28px] tracking-[-0.02em] text-web-main font-bold">
                    米川 周佑
                  </p>
                </div>
              </div>

              <div
                className="w-full shrink-0 aspect-video bg-web-light-bg relative -right-[20%] mlg:right-[12%] -mt-8 mlg:mt-[120px]"
                style={{
                  clipPath: "polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
