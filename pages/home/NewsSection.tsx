import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const news = [
  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
  },
];

interface NewCardProps {
  image: string;
  category: string;
  title: string;
  shortDesc: string;
  date: string;
}

const NewCard = ({ image, category, title, shortDesc, date }: NewCardProps) => {
  return (
    <div className="space-y-4 w-[292px] min-w-[292px] sm:basis-1/2 md:basis-1/3 mlg:basis-1/4 shrink-0 px-4">
      <div className="relative aspect-[1.77778]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <p className="bg-web-main rounded-[15px] text-white text-xs leading-[1.6] tracking-[0.02em] font-bold px-4 py-1 w-max">
        {category}
      </p>
      <div className="space-y-2">
        <p className="text-sm leading-[1.6] tracking-[0.02em] font-bold">
          {title}
        </p>
        <p className="text-sm leading-[1.6] tracking-[0.02em] line-clamp-3">
          {shortDesc}
        </p>
      </div>
      <p className="text-sm text-web-main font-bold leading-[1.6] tracking-[0.02em]">
        {date}
      </p>
    </div>
  );
};

export default function NewsSection() {
  return (
    <section className="py-[60px] sm:py-[120px]">
      <div className="container space-y-12 sm:space-y-[60px]">
        {/* Heading */}
        <div
          className={cn(
            "flex justify-between gap-6",
            "flex-col sm:flex-row sm:items-center"
          )}
        >
          <div>
            <h4 className="relative section-title text-web-main z-10 uppercase">
              News
              <div
                className="absolute top-1/2 -left-[2px] -translate-x-1/2 -translate-y-1/2 size-[30px] bg-web-light -z-[1]"
                style={{ clipPath: "polygon(100% 53%, 0% 100%, 0% 0%)" }}
              />
            </h4>
            <p className="text-jp-h2 text-web-dark mt-4">工場について</p>
          </div>
          <Button className="px-4 w-max">
            お知らせ一覧を見る
            <ArrowRight />
          </Button>
        </div>

        {/* News */}
        <div className="flex -mx-4 overflow-x-auto">
          {news.map((item, index) => (
            <NewCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
