"use client";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AchivementSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mlg:h-[735px] pt-5 pb-[60px] mlg:py-20 mlg:pl-[60px] relative"
    >
      <div className="h-full relative">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            "max-w-full w-[58%] min-w-[350px] z-10",
            // Translate 30px = 1/2 padding of parent
            "absolute mlg:relative top-full mlg:top-0 -right-6 sm:-right-10 mlg:right-0 -translate-y-[30px] sm:-translate-y-[30%] mlg:translate-y-0"
          )}
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        >
          <div className="relative aspect-video">
            <Image
              src="/images/achivement.png"
              alt="achivement-image"
              className="object-cover"
              fill
            />
          </div>
        </motion.div>

        {/*Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden mlg:block absolute right-0 top-[100px] h-[475px] w-[80%] bg-web-vivid z-[1]"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[120px] right-[150px] w-[358px] space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative text-white section-title uppercase"
            >
              ACHIVEMENT
              <div
                className="absolute top-1 left-2 -translate-x-full size-[30px] bg-web-light -z-[1] -rotate-[135deg]"
                style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
              />
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white text-jp-h2"
            >
              開発事例
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white text-jp-p2"
            >
              設計から溶接、隔離技術とワンストップで高品質な製品開発をオーダーメイドで行っています。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button className="bg-white text-web-main hover:bg-web-main hover:text-white">
                開発事例を見る
                <ArrowRight />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-web-vivid block sm:hidden py-[60px] px-0 sm:px-[15%]"
          style={{
            clipPath: "polygon(0% 25%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 max-w-[75%] mx-auto"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative text-white font-bold tracking-[0.02em] text-base leading-[1.6] uppercase"
            >
              ACHIVEMENT
              <div
                className="absolute top-1 left-2 -translate-x-full size-[30px] bg-web-light -z-[1] -rotate-[135deg]"
                style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
              />
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white font-bold tracking-[0.02em] text-[32px] leading-[1.6]"
            >
              開発事例
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white tracking-[0.02em] text-base leading-[1.6]"
            >
              設計から溶接、隔離技術とワンストップで高品質な製品開発をオーダーメイドで行っています。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button className="bg-white text-web-main hover:bg-web-main hover:text-white">
                開発事例を見る
                <ArrowRight />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-web-vivid hidden sm:block mlg:hidden py-[60px] px-0 sm:px-[15%]"
          style={{
            clipPath: "polygon(0% 25%, 10% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6 max-w-[75%] mx-auto"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative text-white font-bold tracking-[0.02em] text-base leading-[1.6] uppercase"
            >
              ACHIVEMENT
              <div
                className="absolute top-1 left-2 -translate-x-full size-[30px] bg-web-light -z-[1] -rotate-[135deg]"
                style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
              />
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white font-bold tracking-[0.02em] text-[32px] leading-[1.6]"
            >
              開発事例
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white tracking-[0.02em] text-base leading-[1.6]"
            >
              設計から溶接、隔離技術とワンストップで高品質な製品開発をオーダーメイドで行っています。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button className="bg-white text-web-main">
                開発事例を見る
                <ArrowRight />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Apart background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute bottom-0 left-0 w-full h-[50%] bg-web-light-bg -z-[1]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
    </motion.section>
  );
}
