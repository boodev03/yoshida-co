import Image from "next/image";

export default function EquipmentCard() {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video">
        <Image src="/images/achivement.png" alt="blog-decor" fill />
      </div>
      <p className="text-[15px] md:text-base -tracking-[0.02em] font-bold">
        ワイヤ放電加工機 MP2400：三菱電機
      </p>
      <p className="text-[13px] md:text-sm font-noto-sans-jp font-normal -tracking-[0.02em]">
        ワイヤ放電加工機とは、細い黄銅のワイヤを電極として使う放電加工機です。ワイヤを送り出しながらワーク（被工作物）との間で放電を行ない、プログラム... 
      </p>
    </div>
  );
}
