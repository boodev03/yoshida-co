import { ArrowDown } from "@/components/icons/ArrowDown";
import Image from "next/image";
import Link from "next/link";

export default function WorkEnviroment() {
  return (
    <section className="font-shippori-mincho py-[160px]">
      <div
        className="w-3/4 h-[422px] bg-web-main pt-[135px]"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
        }}
      >
        <div className="space-y-2 pl-[15%] relative">
          <p className="text-[32px] leading-[1.625] font-bold text-white">
            ヨシダの環境
          </p>
          <p className="text-white">
            社員のキャリアパスやヨシダの働く環境をご紹介します。
          </p>
        </div>
      </div>
      <div className="flex justify-end items-end pr-16 gap-8 relative -top-10">
        <div className="flex-1 max-w-[544px]">
          <p className="text-xl text-white font-shippori-mincho font-bold bg-web-main p-4 relative w-fit flex flex-col items-center gap-4">
            キ <br />ャ <br />リ <br />ア <br />パ <br />ス
            <ArrowDown />
          </p>
        </div>
        <div className="relative flex-1 max-w-[544px] aspect-square object-cover overflow-hidden group">
          <Image
            src="/images/job-opening.png"
            alt="career"
            fill
            className="transition-transform duration-[0.75s] ease-in-out group-hover:scale-110"
          />
          <Link href="#" className="absolute bottom-0 left-0">
            <p className="relative text-xl text-white font-shippori-mincho font-bold bg-web-main p-4 w-fit flex flex-col items-center gap-4">
              働
              <br />く <br />環 <br />境
              <ArrowDown />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
