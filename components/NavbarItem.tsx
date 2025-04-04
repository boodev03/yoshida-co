import Link from "next/link";
import { ChervonDown } from "./icons/ChervonDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
  leftIcon?: React.ReactNode;
}

export default function NavbarItem({
  label,
  href,
  children,
  leftIcon,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const commonClasses =
    "h-full flex cursor-pointer outline-none items-center gap-[6px] text-sm -tracking-[1.5%] text-web-dark font-bold transition-opacity duration-300";

  if (children) {
    return (
      <div className="h-full lg:px-1 xl:px-3">
        <DropdownMenu modal={false} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className={cn(commonClasses, "group")}>
            {label}
            <div
              className={cn(
                "transition-all duration-200 text-web-main group-hover:opacity-30",
                isOpen && "rotate-180"
              )}
            >
              <ChervonDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={16}
            side="bottom"
            className="w-20 bg-white rounded-none shadow-sm py-4 px-0 space-y-6 z-[99999999999]"
          >
            {children.map((item) => (
              <DropdownMenuItem
                key={item.label}
                asChild
                className="text-xs font-bold tracking-[-1.5%]"
              >
                <Link
                  href={item.href}
                  className="justify-center cursor-pointer"
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center gap-[6px] lg:px-1 xl:px-3">
      <Link href={href} className={commonClasses}>
        {label}
      </Link>
      {leftIcon && leftIcon}
    </div>
  );
}
