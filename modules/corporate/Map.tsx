import { Button } from "@/components/ui/button";
import Image from "next/image";

const locations = [
  {
    name: "本社工場",
    address: `〒311-1135 
茨城県水戸市六反田町1279-1`,
  },
  {
    name: "塩崎工場",
    address: `〒311-1114 
茨城県水戸市塩崎町2363`,
  },
  {
    name: "小泉倉庫",
    address: `〒311-1111
茨城県水戸市小泉町213-1`,
  },
  {
    name: "福島オフィス",
    address: `〒311-1111
茨城県水戸市小泉町213-1`,
  },
];

export default function Map() {
  return (
    <div className="flex gap-8 overflow-x-auto px-6 mlg:px-16">
      {locations.map((location, index) => (
        <div key={index} className="space-y-6 shrink-0 flex-1 min-w-[256px]">
          <div className="aspect-video relative">
            <Image src="/images/achivement.png" alt="map" fill />
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
