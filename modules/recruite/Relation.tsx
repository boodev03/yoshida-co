import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Relation() {
  return (
    <section className="flex flex-col mlg:flex-row font-shippori-mincho">
      <div className="flex-1 aspect-video relative group overflow-hidden">
        <Image
          src="/images/capability-1.png"
          alt="relation"
          fill
          className="transition-transform duration-[0.75s] ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-web-main/50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Button
            asChild
            className="text-[36px] h-[60px] w-[284px] rounded-[3px]"
          >
            <a href="#">募集要項</a>
          </Button>
        </div>
      </div>
      <div className="flex-1 aspect-video relative group overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="relation"
          fill
          className="transition-transform duration-[0.75s] ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-web-main/50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Button
            asChild
            className="text-[36px] h-[60px] w-[284px] rounded-[3px]"
          >
            <a href="#">募集要項</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
