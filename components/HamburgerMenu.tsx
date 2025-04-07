import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Copy } from "./icons/Copy";
import { Hamburger } from "./icons/Hamburger";
import { Button } from "./ui/button";
import Image from "next/image";

interface IProps {
  isScrolled: boolean;
}

const navbarItems = [
  {
    label: "企業情報",
    href: "#",
  },
  {
    label: "実例紹介",
    href: "#",
  },
  {
    label: "ヨシダの技術",
    href: "#",
    children: [
      {
        label: "設計技術",
        href: "#",
      },
      {
        label: "機械加工技術",
        href: "#",
      },
      {
        label: "溶接技術",
        href: "#",
      },
      {
        label: "研究開発について",
        href: "#",
      },
    ],
  },
  {
    label: "工場について",
    href: "#",
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
    href: "#",
  },
  {
    label: "採用情報",
    href: "#",
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

export default function HamburgerMenu({ isScrolled }: IProps) {
  return (
    <Sheet>
      <SheetTrigger
        className={cn("text-web-main md:text-white", {
          "text-web-main md:text-black": isScrolled,
        })}
      >
        <Hamburger />
      </SheetTrigger>
      <SheetTitle className="hidden" />
      <SheetContent className="bg-web-main px-12 pt-[102px] pb-[46px] border-l-0 z-[999999] text-white w-[303px] flex flex-col justify-between">
        <div className="space-y-4">
          {navbarItems.map((item) =>
            item.children ? (
              <Accordion type="single" collapsible key={item.label}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white text-sm font-bold tracking-[-0.015em] py-0">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 px-4 text-white pt-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-white block text-sm font-bold tracking-[-0.015em] hover:opacity-30"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="text-white text-sm font-bold tracking-[-0.015em] hover:opacity-30"
                >
                  {item.label}
                </Link>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center gap-[62px]">
          <Button className="bg-white text-web-main hover:bg-white/80">
            お問い合わせ
          </Button>
          <div className="flex items-center gap-6">
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
            <button className="flex shrink-0 items-center gap-[6px] text-sm -tracking-[1.5%] text-white font-bold">
              <Image
                src="/images/global-white.png"
                alt="language"
                width={24}
                height={24}
                className="size-6"
              />
              <p className="shrink-0">日本語</p>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
