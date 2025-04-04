"use client";

import Image from "next/image";
import { ArrowTopLong } from "./icons/ArrowTopLong";

export default function ScrollToTop() {
  const onBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center gap-8 fixed bottom-4 md:bottom-14 right-6 md:right-14 z-[99999999999] bg-web-dark px-2 py-5 rounded-full">
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <Image
          src="/images/instagram-white.png"
          alt="instagram"
          width={24}
          height={24}
        />
      </a>
      <button
        onClick={onBackToTop}
        className="flex items-center justify-center size-10 rounded-full bg-white hover:bg-white/80 transition-colors duration-300"
      >
        <ArrowTopLong />
      </button>
    </div>
  );
}
