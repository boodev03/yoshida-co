import { ChevronRight } from "@/components/icons/ChervonRight";
import Image from "next/image";
import Category from "./Category";
import BlogList from "./BlogList";

export default function Blog() {
  return (
    <section className="pt-[82px] mlg:pt-[90px]">
      {/* Decor */}
      <div className="relative mt-10">
        <div
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 66.67% 100%, 0% 100%, 0% 60%)",
          }}
          className="bg-web-main h-[90%] w-1/2 absolute top-[10%] left-0 z-10"
        >
          <p className="flex flex-col md:gap-4 text-white absolute bottom-1/4 left-8 md:left-1/2 md:-translate-x-1/2">
            <span className="section-title text-[13px] md:text-[16px]">
              NEWS
            </span>
            <span className="text-jp-h1 text-[20px] md:text-[36px]">
              新着記事
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <div className="relative aspect-video w-[68.88889%]">
            <Image src="/images/achivement.png" alt="blog-decor" fill />
          </div>

          <div className="hidden md:flex items-center gap-2 container mx-auto justify-end mt-4 text-web-main">
            <p className="text-normal text-sm text-web-dark font-normal">Top</p>
            <ChevronRight />
            <p className="text-normal text-sm text-web-dark font-normal">
              新着記事
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-[60px] md:my-[120px] px-0 sm:px-6 container mx-auto space-y-8 md:space-y-20">
        <Category />
        <BlogList />
      </div>
    </section>
  );
}
