"use client";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const news = [
  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
    href: "#",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
    href: "#",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
    href: "#",
  },

  {
    image: "/images/news-1.png",
    category: "お知らせ",
    title: "ツギノジダイ　インタビュー記事　掲載",
    shortDesc:
      "「ツギノジダイ」へ弊社代表取締役のインタビュー記事が掲載されました。 詳細は、下記リンクをご参照ください。",
    date: "2025/03/30",
    href: "#",
  },
];

interface NewCardProps {
  image: string;
  category: string;
  title: string;
  shortDesc: string;
  date: string;
  href: string;
  index: number;
}

const MotionLink = motion.create(Link);

const NewCard = ({
  image,
  category,
  title,
  shortDesc,
  date,
  href,
  index,
}: NewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="w-[292px] min-w-[292px] sm:basis-1/2 md:basis-1/3 mlg:basis-1/4 shrink-0 px-4"
    >
      <MotionLink
        href={href}
        className="space-y-4 block group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-video group-hover:opacity-50 transition-opacity duration-300">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="bg-web-main rounded-[15px] text-white text-xs leading-[1.6] tracking-[0.02em] font-bold px-4 py-1 w-max"
        >
          {category}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="space-y-2"
        >
          <p className="text-sm leading-[1.6] tracking-[0.02em] font-bold">
            {title}
          </p>
          <p className="text-sm leading-[1.6] tracking-[0.02em] line-clamp-3">
            {shortDesc}
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="text-sm text-web-main font-bold leading-[1.6] tracking-[0.02em]"
        >
          {date}
        </motion.p>
      </MotionLink>
    </motion.div>
  );
};

export default function NewsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-[60px] sm:py-[120px]"
    >
      <div className="container space-y-12 sm:space-y-[60px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            "flex justify-between gap-6",
            "flex-col sm:flex-row sm:items-center"
          )}
        >
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative section-title text-web-main z-10 uppercase"
            >
              News
              <div
                className="absolute top-1/2 -left-[2px] -translate-x-1/2 -translate-y-1/2 size-[30px] bg-web-light -z-[1]"
                style={{ clipPath: "polygon(100% 53%, 0% 100%, 0% 0%)" }}
              />
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-jp-h2 text-web-dark mt-4"
            >
              お知らせ
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button className="px-4 w-max">
              お知らせ一覧を見る
              <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>

        {/* News */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex -mx-4 overflow-x-auto"
        >
          {news.map((item, index) => (
            <NewCard key={index} {...item} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
