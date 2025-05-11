"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import PositionCard from "./PositionCard";

interface RecruitePositionProps {
  index?: number;
}

export default function RecruitePosition({ index = 1 }: RecruitePositionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const bgImages = [
    "/images/capability-1.png",
    "/images/capability-2.png",
    "/images/capability-3.png",
    "/images/capability-4.png",
    "/images/capability-1.png",
  ];

  const titles = ["営業", "エンジニア", "デザイナー", "製造", "品質保証"];

  const descriptions = [
    "お客様との見積もりや納期交渉など、お客様とのコミュニケーションの窓口として役割を担っています。",
    "製品開発からシステム構築まで、技術的な課題解決を主導します。",
    "視覚的なコミュニケーション手段を通じて、ブランドの価値を高めます。",
    "お客様のニーズに合わせたグローブボックスや製品を製造します。設計図をもとに機械加工や製缶溶接など技術を駆使して製造を行います。また、営業部門と生産部門と共に技術観点からお客様に提案も行います。",
    "製造関連のデータの収集や調査、納品先のお客様へのヒヤリングなど、お客様が安心して製品を使用できるように品質のコントロールを行います。",
  ];

  const idx = (index - 1) % bgImages.length;

  return (
    <section className="w-full relative mlg:h-screen mlg:sticky mlg:top-0">
      {/* Background image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center z-0",
          isOpen && "bg-repeat bg-contain"
        )}
        style={{
          backgroundImage: `url(${bgImages[idx]})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container mx-auto font-shippori-mincho relative z-10 h-full flex items-center pt-12 pb-[35px] mlg:py-[135px]">
        <div className="bg-white pt-12 mlg:p-[100px] relative w-full">
          {/* Index */}
          <p className="px-3 mlg:px-0 font-bold text-[64px] leading-[47px] mlg:leading-[133px] mlg:text-[180px] text-web-light-bg w-fit absolute top-6 mlg:top-0 left-2 mlg:left-0 z-0">
            {index.toString().padStart(2, "0")}
          </p>

          <div className="relative z-10">
            <div className="px-3 mlg:px-0 space-y-4 mb-12 mlg:mb-[60px]">
              <p className="text-2xl mlg:text-[32px] text-web-dark font-bold">
                {titles[idx]}
              </p>
              <p className="font-medium">{descriptions[idx]}</p>
            </div>

            {/* Desktop view - always show grid */}
            <div className="hidden mlg:grid grid-cols-3 gap-20">
              <PositionCard />
              <PositionCard />
              <PositionCard />
            </div>

            {/* Mobile view - collapsible section */}
            <div className="mlg:hidden">
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full"
              >
                <AnimatePresence>
                  {isOpen && (
                    <CollapsibleContent className="mt-8 my-12">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, staggerChildren: 0.1 }}
                        className="grid grid-cols-1 gap-8"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <PositionCard />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <PositionCard />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <PositionCard />
                        </motion.div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
                <CollapsibleTrigger asChild>
                  <motion.div
                    className="bg-web-main text-white py-4 px-12 flex justify-between items-center cursor-pointer"
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium text-[15px]">詳しく見る</span>
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 0 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </motion.div>
                  </motion.div>
                </CollapsibleTrigger>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
