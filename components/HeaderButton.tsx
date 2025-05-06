import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface IProps {
  isWhite?: boolean;
}

const LanguageButton = ({ isWhite }: IProps) => {
  return (
    <button
      className={cn(
        "flex shrink-0 lg:px-1 xl:px-3 items-center gap-[6px] text-sm -tracking-[1.5%] font-bold hover:opacity-30 transition-opacity duration-300",
        isWhite ? "text-white" : "text-web-dark"
      )}
    >
      <Image
        src={isWhite ? "/images/global-white.png" : "/images/global.png"}
        alt="language"
        width={24}
        height={24}
        className="size-6"
      />
      <p className="shrink-0">日本語</p>
    </button>
  );
};

export default function HeaderButton({ isWhite }: IProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="block shrink-0 hover:opacity-30 transition-opacity duration-300 lg:px-1 xl:px-3"
      >
        <Image
          src={
            isWhite ? "/images/instagram-white.png" : "/images/instagram.png"
          }
          alt="instagram"
          width={24}
          height={24}
          className="size-6"
        />
      </a>

      {/* Language */}
      <LanguageButton isWhite={isWhite} />

      {/* CTA Button */}
      <Button className="ml-3 bg-white text-web-main rounded-[3px] h-[42px] hover:border-white hover:bg-web-main hover:text-white transition">
        エントリー
      </Button>
    </div>
  );
}
