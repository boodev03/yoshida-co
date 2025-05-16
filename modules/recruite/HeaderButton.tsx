import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface IProps {
  isWhite?: boolean;
  className?: string;
}

const LanguageButton = ({ isWhite }: IProps) => {
  return (
    <button
      className={cn(
        "flex shrink-0 lg:px-1 xl:px-3 items-center gap-[6px] text-sm -tracking-[1.5%] font-bold hover:opacity-30 transition-opacity duration-300",
        isWhite ? "text-white" : "text-web-main"
      )}
    >
      {/* <Image
        src={isWhite ? "/images/global-white.png" : "/images/global.png"}
        alt="language"
        width={24}
        height={24}
        className="size-6"
      /> */}
      <Globe className="size-6" />
      <p className="shrink-0">日本語</p>
    </button>
  );
};

export default function HeaderButton({ isWhite, className }: IProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className={cn(
          "hidden mlg:block shrink-0 hover:opacity-30 transition-opacity duration-300 lg:px-1 xl:px-3 text-web-main",
          isWhite && "text-white"
        )}
      >
        {/* <Image
          src={
            isWhite ? "/images/instagram-white.png" : "/images/instagram.png"
          }
          alt="instagram"
          width={24}
          height={24}
          className="size-6"
        /> */}

        <InstagramIcon />
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
