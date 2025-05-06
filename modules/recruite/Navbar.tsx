"use client";

import NavbarItem from "@/components/NavbarItem";

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
}

export default function Navbar({ isWhite }: IProps) {
  return (
    <nav className="flex items-center gap-4 h-full">
      {navbarItems.map((item) => (
        <NavbarItem isWhite={isWhite} key={item.label} {...item} />
      ))}
    </nav>
  );
}
