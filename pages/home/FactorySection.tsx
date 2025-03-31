import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons/ArrowRight";
import Image from "next/image";

const cards = [
  {
    image: "/images/factory-1.png",
    title: "工場設備",
  },
  {
    image: "/images/factory-2.png",
    title: "品質管理",
  },
];

interface FactoryCardProps {
  image: string;
  title: string;
}

const FactoryCard = ({ image, title }: FactoryCardProps) => {
  return (
    <div>
      <div className="relative w-full sm:w-[544px] max-w-full aspect-[1.77778]">
        <Image src={image} alt={title} fill className="object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="w-[90%] h-[42px] absolute bottom-0 left-0">
          <div
            className="size-full flex items-center z-10"
            style={{
              clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="flex items-center gap-2 px-4">
              <div
                className="size-2 bg-white"
                style={{
                  clipPath:
                    "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                }}
              />
              <p className="text-jp-p2 text-white font-bold">{title}</p>
            </div>
          </div>

          <div className="text-white absolute right-[2%] top-1/2 -translate-y-1/2 translate-x-1/2">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FactorySection() {
  return (
    <section className="py-[60px] sm:py-[120px] mlg:py-[240px] relative">
      <div className="container space-y-12 mlg:space-y-[60px]">
        <div className="flex flex-col items-center max-w-[736px] mx-auto">
          <h4 className="section-title relative text-web-main z-10 uppercase">
            FACTORY
            <div
              className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
              style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
            />
          </h4>
          <p className="text-jp-h2 text-web-dark mt-4 mb-6 text-center">
            工場について
          </p>

          <p className="text-jp-p2 text-web-dark text-center">
            お客様の抱えるあらゆる課題を解決するため充実した設備を備え、失敗の許されない原子力業界で多くの製品を製造してきたヨシダだからこそできる、高品質な製品づくりを保証いたします。
          </p>
        </div>

        {/* Card */}
        <div className="mlg:w-[1088px] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mlg:gap-y-[52px] w-full mx-auto">
          {cards.map((card) => (
            <FactoryCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button>
            開発事例を見る
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Decor */}
      <div
        className="absolute size-full top-0 left-[15%] bg-web-gray -z-[2] hidden sm:block"
        style={{
          clipPath: "polygon(35% 10%, 100% 10%, 65% 90%, 0% 90%)",
        }}
      />

      <div
        className="absolute w-full h-1/2 bottom-0 left-0 bg-web-gray -z-[2] sm:hidden"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 30%)",
        }}
      />
    </section>
  );
}
