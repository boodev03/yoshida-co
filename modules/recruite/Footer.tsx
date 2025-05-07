"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import HeaderButton from "@/components/HeaderButton";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-web-main pt-20 pb-6 font-shippori-mincho">
      <div className="px-[72px] space-y-6 pb-20">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="block size-full">
              <Image
                src="/images/light-logo.png"
                alt="logo"
                width={120}
                height={34}
                className="w-[120px] h-[34px] object-cover"
                quality={100}
              />
            </Link>
          </motion.div>
          <motion.div
            className="hidden mlg:flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Navbar isWhite />
            <HeaderButton isWhite />
          </motion.div>
        </div>
        <div className="space-y-2">
          <p className="py-0.5 px-2 border border-white w-fit text-white font-bold">
            本社工場
          </p>
          <p className="text-sm whitespace-pre-wrap text-white">
            {`〒311-1135
茨城県水戸市六反田町1279番地の1`}
          </p>
        </div>
      </div>

      <div className="px-[72px]">
        <div className="flex items-center gap-4 justify-center relative">
          <p className="absolute left-0 top-0 text-web-light text-xs">
            ©︎株式会社ヨシダ
          </p>
          <Link href="/" className="text-xs text-white underline">
            コーポレートサイト
          </Link>
          <span className="h-[12px] w-[1px] bg-white rounded-full" />
          <Link href="/" className="text-xs text-white underline">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
