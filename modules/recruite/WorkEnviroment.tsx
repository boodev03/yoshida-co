"use client";

import { ArrowDown } from "@/components/icons/ArrowDown";
import Image from "next/image";
import Link from "next/link";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function WorkEnviroment() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [startScrollY, setStartScrollY] = useState(0);
  const { scrollY } = useScroll();

  // Track when the element enters viewport
  const handleViewportEnter = () => {
    setIsInView(true);
    setStartScrollY(window.scrollY);
  };

  const handleViewportLeave = () => {
    setIsInView(false);
  };

  // Bottom triangle animation
  const rotateBottom = useTransform(scrollY, (value) => {
    if (!isInView) return 0;
    const scrollDelta = value - startScrollY;
    return scrollDelta * 0.01;
  });

  const scaleBottom = useTransform(scrollY, (value) => {
    if (!isInView) return 1;
    const scrollDelta = value - startScrollY;
    return 1 + Math.sin(scrollDelta * 0.003) * 0.05;
  });

  // Top triangle animation
  const rotateTop = useTransform(scrollY, (value) => {
    if (!isInView) return 15;
    const scrollDelta = value - startScrollY;
    return 15 + Math.sin(scrollDelta * 0.005) * 8;
  });

  const xFloat = useTransform(scrollY, (value) => {
    if (!isInView) return 0;
    const scrollDelta = value - startScrollY;
    return Math.sin(scrollDelta * 0.004) * 20;
  });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      className="font-shippori-mincho py-[160px] pr-[50px] mlg:pr-0 relative"
    >
      {/* Decor triangle */}
      <motion.div
        style={{
          clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
          rotate: rotateBottom,
          scale: scaleBottom,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="absolute -bottom-[20%] mlg:-bottom-[160px] mlg:rotate-[10deg] left-0 size-[80%] mlg:size-[65%] bg-web-light-bg"
      />

      <motion.div
        style={{
          clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
          rotate: rotateTop,
          x: xFloat,
        }}
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden mlg:block absolute top-0 right-[10%] size-[20%] rotate-[15deg] bg-web-light-bg"
      />

      {/* Content */}
      <div className="flex flex-col gap-12 mlg:gap-0">
        {/* Desktop view */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-3/4 h-[422px] bg-web-main pt-[135px] hidden mlg:block"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
          }}
        >
          <div className="space-y-2 pl-[15%] relative">
            <p className="text-[32px] leading-[1.625] font-bold text-white">
              ヨシダの環境
            </p>
            <p className="text-white">
              社員のキャリアパスや<span className="text-brand-accent">、</span>
              ヨシダ<span className="text-brand-accent">での</span>
              働く環境をご紹介します。
            </p>
          </div>
        </motion.div>

        {/* Mobile view */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-web-main block mlg:hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        >
          <div className="space-y-2 pl-6 py-14 relative max-w-[70%]">
            <p className="text-xl mlg:text-[32px] leading-[1.625] font-bold text-white">
              ヨシダの環境
            </p>
            <p className="text-[15px] mlg:text-base text-white">
              社員のキャリアパスやヨシダの働く環境をご紹介します。
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col mlg:flex-row mlg:justify-end mlg:items-end pl-12 mlg:px-16 gap-8 relative mlg:-top-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex-1 max-w-[544px] aspect-square object-cover overflow-hidden group"
          >
            <Image
              src="/images/recruit/17 material confirmation.webp  "
              alt="career"
              fill
              className="transition-transform duration-[0.75s] object-cover ease-in-out group-hover:scale-110"
            />
            <Link href="#" className="absolute bottom-0 left-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative text-xl text-white font-shippori-mincho font-bold bg-web-main p-4 w-fit flex flex-col items-center gap-4"
              >
                働
                <br />く <br />環 <br />境
                <motion.div
                  initial={{ y: -5 }}
                  animate={{ y: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  <ArrowDown />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex-1 max-w-[544px] aspect-square object-cover overflow-hidden group"
          >
            <Image
              src="/images/recruit/18 3d measurement inspection.webp  "
              alt="career"
              fill
              className="transition-transform duration-[0.75s] object-cover ease-in-out group-hover:scale-110"
            />
            <Link href="#" className="absolute bottom-0 left-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative text-xl text-white font-shippori-mincho font-bold bg-web-main p-4 w-fit flex flex-col items-center gap-4"
              >
                働
                <br />く <br />環 <br />境
                <motion.div
                  initial={{ y: -5 }}
                  animate={{ y: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  <ArrowDown />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
