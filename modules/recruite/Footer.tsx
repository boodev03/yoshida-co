"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-web-main pt-20 pb-[72px] mlg:pb-6 font-shippori-mincho"
    >
      <div className="px-[72px] space-y-6 pb-20">
        <div className="flex flex-col mlg:flex-row gap-6 mlg:gap-0 mlg:justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
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
            <p className="text-xs text-white font-normal text-center">
              Corporation <br /> Recruit site
            </p>
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
        <div className="space-y-2 mb-20 mlg:mb-0">
          <p className="py-0.5 px-2 border border-white w-fit text-white font-bold">
            本社工場
          </p>
          <p className="text-sm whitespace-pre-wrap text-white">
            {`〒311-1135
茨城県水戸市六反田町1279番地の1`}
          </p>
        </div>

        <motion.div
          className="flex mlg:hidden items-center gap-8 flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Navbar isWhite className="flex-col gap-8" />
          <HeaderButton isWhite className="flex-col-reverse gap-8" />
        </motion.div>
      </div>

      <div className="mlg:px-[72px] space-y-8 mlg:space-y-0">
        <div className="flex items-center gap-4 justify-center relative">
          <p className="hidden mlg:block absolute left-0 top-0 text-web-light text-xs">
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
        <p className="block mlg:hidden text-web-light text-xs text-center">
          ©︎株式会社ヨシダ
        </p>
      </div>
    </footer>
  );
}
