import Image from "next/image";
import { Button } from "./ui/button";

const LanguageButton = () => {
  return (
    <button className="flex shrink-0 lg:px-1 xl:px-3 items-center gap-[6px] text-sm -tracking-[1.5%] text-web-dark font-bold hover:opacity-30 transition-opacity duration-300">
      <Image
        src="/images/global.png"
        alt="language"
        width={24}
        height={24}
        className="size-6"
      />
      <p className="shrink-0">日本語</p>
    </button>
  );
};

export default function HeaderButton() {
  return (
    <div className="flex items-center gap-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="block shrink-0 hover:opacity-30 transition-opacity duration-300 lg:px-1 xl:px-3"
      >
        <Image
          src="/images/instagram.png"
          alt="instagram"
          width={24}
          height={24}
          className="size-6"
        />
      </a>

      {/* Language */}
      <LanguageButton />

      {/* CTA Button */}
      <Button className="ml-3">お問い合わせ</Button>
    </div>
  );
}
