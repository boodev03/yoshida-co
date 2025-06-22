import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  // Image position
  align?: "left" | "right";
  developmentItems?: string[];
  developmentTitle?: string;
}

export default function ContentSection({
  title,
  subTitle,
  description,
  imageUrl,
  align = "left",
  developmentItems,
  developmentTitle = "開発項目",
}: IProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[640px] pt-[120px]",
        align === "right" && "justify-start"
      )}
    >
      <div
        className={cn(
          "space-y-6 md:space-y-12 max-w-[544px] relative z-[50]",
          align === "right" ? "left-[10%]" : "right-[10%] self-end"
        )}
      >
        <div className="relative">
          <p className="text-[13px] md:text-base -tracking-[0.02em] font-bold text-web-main">
            {title}
          </p>
          <p className="text-xl md:text-[32px] -tracking-[0.02em] font-bold text-web-dark">
            {subTitle}
          </p>
        </div>
        <p className="text-[15px] whitespace-pre-line md:text-base -tracking-[0.02em] text-web-dark">
          {description}
        </p>
        {developmentItems && developmentItems.length > 0 && (
          <div className="absolute z-[100] top-full bg-white right-0 rounded-[8px] w-full max-w-[544px] border border-web-main py-8 px-6 space-y-6">
            <p className="text-[15px] mlg:text-xl -tracking-[0.02em] font-bold text-web-main text-center">
              {developmentTitle}
            </p>
            <ul className="text-[13px] mlg:text-base font-noto-sans-jp -tracking-[0.02em] text-web-dark space-y-2">
              {developmentItems?.map((item) => (
                <li key={item} className="flex items-baseline gap-1">
                  <span>•</span>
                  <span className="whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {imageUrl && (
        <div
          className={`relative ${
            align === "left" ? "left-0" : "right-0 self-end"
          } w-full z-10 max-w-1/2 mlg:max-w-[640px] aspect-video`}
        >
          <Image src={imageUrl} alt="image" fill />
        </div>
      )}
      <div
        style={{
          clipPath:
            align === "left"
              ? "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%)",
        }}
        className={cn(
          "absolute top-0 right-0 bg-web-gray size-full",
          align === "right" && "justify-start"
        )}
      ></div>
    </div>
  );
}
