"use client";

import NavbarItem from "@/components/NavbarItem";
import { cn } from "@/lib/utils";

const navbarItems = [
  {
    label: "キャリアパス",
    href: "/recruit/career-path",
  },
  {
    label: "働く環境",
    href: "/recruit/place",
  },
  {
    label: "募集要項",
    href: "/recruit/requirement",
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
        <NavbarItem
          isWhite={isWhite}
          key={item.label}
          {...item}
          textClassName="text-web-main"
        />
      ))}
    </nav>
  );
}
