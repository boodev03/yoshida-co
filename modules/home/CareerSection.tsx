"use client";
import { Copy } from "@/components/icons/Copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const data = {
  title: "採用情報",
  description: `株式会社ヨシダでは、自らの技術を社会に役立てたいと考える人材を募集しています。`,
};

export default function CareerSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="pt-5 mlg:pt-[200px] pb-[140px] relative"
    >
      <div className="container">
        <div
          className={cn(
            "flex gap-[72px]",
            "flex-col mlg:flex-row gap-12 mlg:gap-[72px]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn(
              "max-w-full space-y-6",
              "w-full sm:w-[504px] pt-8 sm:pt-0"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-10 section-title text-web-main uppercase"
              >
                JOB OPENING
                <div
                  className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
                  style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
                />
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-jp-h2 text-web-dark mt-4 mb-6"
              >
                {data.title}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-jp-p2 text-web-dark whitespace-pre-line"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button>
                採用情報を見る
                <Copy />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative aspect-[auto_1.77778]"
          >
            <Image src="/images/top/top-10.webp" alt="career" fill />
          </motion.div>
        </div>
      </div>

      {/* Decor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute size-full -z-[1] top-20 left-0 bg-web-gray hidden mlg:block"
        style={{
          clipPath: "polygon(0% 0%, 66.7% 0%, 85.4% 100%, 0% 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute size-full -z-[1] top-0 left-0 bg-web-gray mlg:hidden"
        style={{
          clipPath: "polygon(0% 0%, 33.3% 0%, 100% 67.5%, 100% 100%, 0% 100%)",
        }}
      />
    </motion.section>
  );
}
