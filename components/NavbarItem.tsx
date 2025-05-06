import Link from "next/link";
import { ChervonDown } from "./icons/ChervonDown";
import { cn } from "@/lib/utils";

interface IProps {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
  leftIcon?: React.ReactNode;
  isWhite?: boolean;
}

export default function NavbarItem({
  label,
  href,
  children,
  leftIcon,
  isWhite,
}: IProps) {
  const commonClasses = cn(
    "h-full flex cursor-pointer outline-none items-center gap-[6px] text-sm -tracking-[1.5%] font-bold transition-opacity duration-300",
    isWhite ? "text-white" : "text-web-dark"
  );

  if (children) {
    return (
      <div className="h-full lg:px-1 xl:px-3 group relative">
        <div className={commonClasses}>
          {label}
          <div className="transition-all duration-200 text-web-main group-hover:opacity-30">
            <ChervonDown />
          </div>
        </div>
        <div className="absolute w-full h-4 -bottom-4 left-0 bg-transparent" />
        <div className="absolute border top-full left-1/2 -translate-x-1/2 py-4 w-max bg-white rounded-none shadow-sm space-y-6 z-[99999999999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-4">
          {children.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-xs font-bold tracking-[-1.5%] text-center hover:bg-gray-100/80 hover:text-web-main py-3 px-4 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center gap-[6px] lg:px-1 xl:px-3">
      <Link href={href} className={`${commonClasses} hover:opacity-30`}>
        {label}
      </Link>
      {leftIcon && leftIcon}
    </div>
  );
}
