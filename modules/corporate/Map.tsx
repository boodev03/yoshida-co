import { Button } from "@/components/ui/button";
import Image from "next/image";

const locations = [
  {
    name: "本社工場",
    address: `〒311-1135 
茨城県水戸市六反田町1279-1`,
    images: "/images/company/head-office.webp",
  },
  {
    name: "塩崎工場",
    address: `〒311-1114 
茨城県水戸市塩崎町2363`,
    images: "/images/company/shiozaki-factory.webp",
  },
  {
    name: "小泉倉庫",
    address: `〒311-1111
茨城県水戸市小泉町213-1`,
    images: "/images/company/koizumi-warehouse.webp",
  },
  {
    name: "福島オフィス",
    address: `〒979-1308
福島県双葉郡大熊町下野上清水２３０ 大熊インキュベーションセンター　`,
    images: "/images/company/fukushima-office.webp",
  },
];

export default function Map() {
  return (
    <div className="flex gap-8 overflow-x-auto px-6 mlg:px-0">
      {locations.map((location, index) => (
        <div key={index} className="space-y-6 shrink-0 flex-1 min-w-[256px]">
          <div className="aspect-video relative">
            <Image
              src={location.images}
              alt="map"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xl font-bold text-web-dark -tracking-[0.02em]">
              {location.name}
            </p>
            <p className="text-[15px] md:text-base text-web-dark -tracking-[0.02em] whitespace-pre-line">
              {location.address}
            </p>
            <Button variant="outline">Google MAP</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
