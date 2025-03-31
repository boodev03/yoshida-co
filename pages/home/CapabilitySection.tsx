import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons/ArrowRight";
import Image from "next/image";

const cards = [
  {
    image: "/images/capability-1.png",
    title: "設計技術",
    description:
      "設計から機械加工、製缶溶接まで、原子力業界での経験から培った技術力を持っています。また、新たな技術を生かした研究開発を行い挑戦を続けています。",
  },
  {
    image: "/images/capability-2.png",
    title: "機械加工技術",
    description:
      "設計から機械加工、製缶溶接まで、原子力業界での経験から培った技術力を持っています。また、新たな技術を生かした研究開発を行い挑戦を続けています。",
  },
  {
    image: "/images/capability-3.png",
    title: "溶接技術",
    description:
      "設計から機械加工、製缶溶接まで、原子力業界での経験から培った技術力を持っています。また、新たな技術を生かした研究開発を行い挑戦を続けています。",
  },
  {
    image: "/images/capability-4.png",
    title: "研究開発について",
    description:
      "設計から機械加工、製缶溶接まで、原子力業界での経験から培った技術力を持っています。また、新たな技術を生かした研究開発を行い挑戦を続けています。",
  },
];

interface CapabilityCardProps {
  image: string;
  title: string;
  description: string;
}

const CapabilityCard = ({ image, title, description }: CapabilityCardProps) => {
  return (
    <div className="space-y-4">
      <div className="relative w-full sm:w-[448px] max-w-full aspect-[1.77778]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="w-[90%] h-[42px] absolute bottom-0 left-0">
          <div
            className="size-full bg-web-main flex items-center z-10"
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
              <p className="text-jp-p2 text-white font-bold">設計技術</p>
            </div>
          </div>

          <div className="text-white absolute right-[2%] top-1/2 -translate-y-1/2 translate-x-1/2">
            <ArrowRight />
          </div>
        </div>
      </div>

      <p className="text-jp-p3 text-web-dark">{description}</p>
    </div>
  );
};

export default function CapabilitySection() {
  return (
    <section className="pt-[166px] sm:pt-[220px] pb-20 mlg:py-[100px] bg-web-light-bg">
      <div className="container space-y-12 mlg:space-y-[60px]">
        <div className="flex flex-col items-center max-w-[736px] mx-auto">
          <h4 className="relative section-title text-web-main z-10 uppercase">
            CAPABILITY
            <div
              className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
              style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
            />
          </h4>
          <p className="text-jp-h2 text-web-dark mt-4 mb-6 text-center">
            ヨシダの技術
          </p>

          <p className="text-jp-p2 text-web-dark text-center">
            設計から機械加工、製缶溶接まで、原子力業界での経験から培った技術力を持っています。また、新たな技術を生かした研究開発を行い挑戦を続けています。
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mlg:gap-y-[52px] w-full mlg:w-[896px] mx-auto">
          {cards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button>
            開発事例を見る
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
