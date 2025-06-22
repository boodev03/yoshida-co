"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const data = {
  title: "ヨシダの技術",
  description: `設計から製缶・溶接、機械加工まで、原子力分野で培った技術を活かし、
新技術の研究開発にも挑戦しています。`,
};

const cards = [
  {
    image: "/images/top/top-04.webp",
    title: "設計",
    description:
      "機械・電気・制御設計から耐震解析までをワンストップで対応。設計者自らが工場へ足を運び、製造部門と打合せや進捗確認を行うことで、お客様の要求を最大限実現できる体制を整えています。",
    href: "#",
  },
  {
    image: "/images/top/top-05.webp",
    title: "製缶・溶接",
    description:
      "製缶・溶接棟には、揚程12m、30tクレーンを付設し、TIG溶接、アーク溶接、プラズマ溶接、ファイバーレーザー溶接、ロボット溶接を配置。日本溶接協会および原子炉等規制法に係る溶接士が在籍し、薄板から厚板、ステンレスからアルミ、インコネル、チタンなど多様な溶接に対応しています。",
    href: "#",
  },
  {
    image: "/images/top/top-06.webp",
    title: "機械加工",
    description:
      "機械加工棟には、揚程12m、30tクレーンを付設しています。5軸加工機、門型5面加工機、横中ぐりフライス盤、立旋盤（φ2.5m）、長尺旋盤などを配置。大型品の機械加工から溶接品の加工まで、高精度かつ短納期を実現します。",
    href: "#",
  },
  {
    image: "/images/top/top-07.webp",
    title: "研究開発",
    description:
      "『FROM DECOMMISSIONING TO SPACE（廃炉から宇宙まで）』のテーマのもと、大学や研究機関、ベンチャー企業とさまざまな共同研究を実施しています。",
    href: "#",
  },
];

interface CapabilityCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const MotionLink = motion.create(Link);

const CapabilityCard = ({
  image,
  title,
  description,
  href,
  index,
}: CapabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="space-y-4"
    >
      <MotionLink
        href={href}
        className="relative group block w-full sm:w-[448px] max-w-full aspect-video overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        <div className="w-[90%] h-[42px] absolute bottom-0 left-0">
          <div
            className="size-full bg-web-main flex items-center z-10 transition-colors duration-300 group-hover:bg-web-main/90"
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

          <div className="text-white absolute right-[2%] top-1/2 -translate-y-1/2 translate-x-1/2 transition-transform duration-300 group-hover:translate-x-[calc(50%+5px)]">
            <ArrowRight />
          </div>
        </div>
      </MotionLink>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        className="text-jp-p3 text-web-dark"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function CapabilitySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="pt-[166px] sm:pt-[220px] pb-20 mlg:py-[100px] bg-web-light-bg"
    >
      <div className="container space-y-12 mlg:space-y-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center max-w-[736px] mx-auto"
        >
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative section-title text-web-main z-10 uppercase"
          >
            CAPABILITY
            <div
              className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light -z-[1] rotate-[135deg]"
              style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
            />
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-jp-h2 text-web-dark mt-4 mb-6 text-center"
          >
            {data.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-jp-p2 text-web-dark text-center whitespace-pre-line"
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mlg:gap-y-[52px] w-full mlg:w-[928px] mx-auto">
          {cards.map((card, index) => (
            <CapabilityCard key={card.title} {...card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button className="group relative overflow-hidden">
            ヨシダの技術を見る
            <ArrowRight />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
