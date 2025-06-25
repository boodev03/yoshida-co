"use client";

import { Copy } from "./icons/Copy";
import NavbarItem from "./NavbarItem";

const navbarItems = [
  {
    label: "企業情報",
    href: "/company",
  },
  {
    label: "実例紹介",
    href: "/case",
  },
  {
    label: "ヨシダの技術",
    href: "/technology",
    children: [
      {
        label: "設計",
        href: "/technology/design",
      },
      {
        label: "製缶・溶接",
        href: "/technology/welding",
      },
      {
        label: "機械加工",
        href: "/technology/machining",
      },
      {
        label: "研究開発",
        href: "/technology/development",
      },
    ],
  },
  {
    label: "工場と品質への取り組み",
    href: "/factory-and-quality",
    children: [
      {
        label: "工場設備",
        href: "#",
      },
      {
        label: "品質保証",
        href: "#",
      },
    ],
  },
  {
    label: "新着情報",
    href: "/news",
  },
  {
    label: "採用情報",
    href: "/recruit",
    leftIcon: (
      <button
        onClick={() => {
          navigator.clipboard.writeText("090-1234-5678");
        }}
        className="text-web-main"
      >
        <Copy />
      </button>
    ),
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 h-full">
      {navbarItems.map((item) => (
        <NavbarItem key={item.label} {...item} />
      ))}
    </nav>
  );
}
