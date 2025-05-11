"use client";

import NavbarItem from "@/components/NavbarItem";
import { cn } from "@/lib/utils";

const navbarItems = [
  {
    label: "キャリアパス",
    href: "#",
  },
  {
    label: "働く環境",
    href: "#",
  },
  {
    label: "ヨシダの技術",
    href: "#",
  },
];

interface IProps {
  isWhite?: boolean;
  className?: string;
}

export default function Navbar({ isWhite, className }: IProps) {
  return (
    <nav className={cn("flex items-center gap-4 h-full", className)}>
      {navbarItems.map((item) => (
        <NavbarItem isWhite={isWhite} key={item.label} {...item} />
      ))}
    </nav>
  );
}
