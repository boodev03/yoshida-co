"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Equipment from "./Equipment";
import EquipmentList from "./EquipmentList";

export default function EquipmentWrapper() {
  return (
    <section className="pt-[82px] mlg:pt-[90px] font-noto-sans">
      {/* Decor */}
      <div className="relative mt-10">
        <div
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 66.67% 100%, 0% 100%, 0% 60%)",
          }}
          className="bg-web-main h-[90%] w-1/2 absolute top-[10%] left-0 z-10"
        >
          <p className="flex flex-col text-white absolute bottom-1/4 left-8 md:left-1/2 md:-translate-x-1/2">
            <span className="section-title text-[13px] md:text-[16px]">
              EQUIPMENT
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              工場設備
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/equipment/banner.webp" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight size={20} />
            <p className="text-normal text-sm text-web-dark font-normal">
              工場について
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-[60px] md:py-[120px] px-0 sm:px-6 container mx-auto space-y-8 md:space-y-20">
        <div className="container space-y-6 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative section-title text-web-main uppercase text-[13px] md:text-base -tracking-[0.02em]"
            >
              EQUIPMENT
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
              className="w-full mlg:w-[420px]"
            >
              <p className="text-web-dark text-xl text-[32px] tracking-[-0.02em] font-bold">
                設備について
              </p>
            </motion.div>
          </motion.div>
          <div className="flex flex-col gap-6 md:flex-row">
            <p className="flex-1 text-[15px] md:text-base -tracking-[0.02em] whitespace-pre-line">
              {`本社工場の敷地は約14,000平方メートル、工場の建築面積は約4,500平方メートルです。工場内部は製缶部門、マシニング加工部門、旋盤加工部門の3つに分かれており、それぞれの部門は約15メートル×90メートルのエリアで構成されています。
各部門には、30トン（20トン＋10トン）のツインクレーンに加え、10トンおよび5トンのクレーンを複数設置。クレーンの揚程は12メートルあり、長尺・重量物の搬送にも対応しています。

主な設備として、5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）を備えており、これらの設備と搬送体制を組み合わせることで、大型機器の製缶から高精度加工まで一貫して対応可能です。
各設備の詳細仕様については、以下をご覧ください。`}
            </p>
            <div className="relative aspect-video flex-1">
              <Image
                src="/images/equipment/equipment-01.webp"
                alt="blog-decor"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <Equipment />
      <EquipmentList />
    </section>
  );
}
