"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["全て", "お知らせ", "研究開発"];

export default function Category() {
  const [activeCategory, setActiveCategory] = useState<string>("全て");

  return (
    <div className="flex gap-4 md:gap-8 items-center flex-wrap">
      {categories.map((item) => (
        <Button
          className={`min-w-[160px] ${
            activeCategory === item
              ? "hover:bg-web-main hover:text-white"
              : "bg-white border border-web-main text-web-main hover:opacity-30"
          }`}
          key={item}
          onClick={() => setActiveCategory(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
