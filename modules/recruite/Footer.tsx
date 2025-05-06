"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import HeaderButton from "@/components/HeaderButton";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-web-main pt-20">
      <div className="px-[72px] flex justify-between items-center">
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
    </footer>
  );
}
