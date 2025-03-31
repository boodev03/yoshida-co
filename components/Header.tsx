"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "max-w-full h-[82px] mlg:h-[90px] flex items-center justify-between fixed top-0 left-0 right-0 z-[99999] transition-all duration-300",
        `${
          isScrolled ? "bg-[#1247AF] md:bg-white shadow-md" : "bg-transparent"
        }`,
        "px-4 xl:px-6 2xl:px-[72px]"
      )}
    >
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={30}
          className="w-[120px] h-[30px] hidden md:block"
        />
        <Image
          src="/images/light-logo.png"
          alt="logo"
          width={120}
          height={30}
          className="w-[120px] h-[30px] md:hidden"
        />
      </div>
      <div className="hidden mlg:flex items-center gap-4">
        <Navbar />
        <HeaderButton />
      </div>
      <div className="mlg:hidden">
        <HamburgerMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}
