import { cn } from "@/lib/utils";
import Image from "next/image";

const data = [
  {
    year: 1923,
    detail: "大正12年4月",
    content: "初代吉田久雄が水戸市本8丁目817番地に個人創業",
  },
  {
    year: 1940,
    detail: "昭和15年 8月",
    content: "水戸市南町に鶴田第二鉄工所として工場を開設",
  },
  {
    year: 1945,
    detail: "昭和20年12月",
    content: "那珂湊市田中7985番地に工場を移転し吉田鉄工所として操業",
  },
  {
    year: 1959,
    detail: "昭和34年 4月",
    content:
      "法人組織に変更　有限会社吉田鉄工所として発足。吉田健が代表取締役となる",
  },
  {
    year: 1961,
    detail: "昭和36年 3月",
    image: "/images/company/glove-box.webp",
    content: "動力炉、核燃料開発事業団のグローブボックスを受注",
  },
  {
    year: 1965,
    detail: "昭和40年 2月",
    content: "常澄村塩ケ崎2363番地に大型機械工場を新設",
  },
  {
    year: 1966,
    detail: "昭和41年 4月",
    content: "吉田久修が代表取締役に就任",
  },
  {
    year: 1969,
    detail: "昭和44年 4月",
    content: "製缶工場を新設",
  },
  {
    year: 1970,
    detail: "昭和45年 4月",
    content: "下館市小川1400番地に下館工場を新設",
  },
  {
    year: 1976,
    detail: "昭和51年 3月",
    content: "吉田陽子が代表取締役に就任",
  },
  {
    year: 1980,
    detail: "昭和55年10月",
    content: "下館工場を分離　別法人とする",
  },
  {
    year: 1992,
    detail: "平成4年 2月",
    content: "株式会社に組織変更　株式会社ヨシダとして発足",
  },
  {
    year: 1993,
    detail: "平成5年 5月",
    image: "/images/company/factory-complete.webp",
    content: "新事務所及び工場が完成",
  },
  {
    year: 2009,
    detail: "平成21年 1月",
    image: "/images/company/koizumi-warehouse.webp",
    content: "水戸市小泉町へ倉庫を新設",
  },
  {
    year: 2018,
    detail: "平成30年 6月",
    image: "/images/company/new-factory.webp",
    content: "水戸市六反田町へ本社工場を新設",
  },
  {
    year: 2022,
    detail: "令和4年 7月",
    image: "/images/achivement.png",
    content: "米川周佑が代表取締役に就任",
  },
];

export default function HistoryContent() {
  return (
    <div>
      <div className="pb-12 mlg:border-b-2 border-line-gray w-full space-y-2">
        <div className="relative">
          <div
            className="size-10 bg-web-light absolute -bottom-1 left-0 -translate-x-2/3 z-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 90%, 0% 90%)",
            }}
          />
          <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
            HISTORY
          </p>
        </div>
        <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
          沿革
        </p>
      </div>

      {/* Timeline */}
      <div className="mlg:pt-20 mlg:px-8 divide-y divide-line-gray">
        {data.map((item, index) => (
          <div
            key={item.content}
            className={cn(
              "flex flex-col gap-6 md:flex-row md:gap-[96px]",
              index !== 0 ? "py-6" : "pb-6",
              index === data.length - 1 ? "border-b border-line-gray" : ""
            )}
          >
            <div className="min-w-[160px]">
              <p className="text-2xl md:text-[40px] font-bold text-web-vivid tracking-[-0.02em]">
                {item.year}
              </p>
              <p className="text-web-vivid font-bold  text-[13px] md:text-base tracking-[-0.02em]">
                {item.detail}
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-web-dark font-bold text-[13px] md:text-base tracking-[-0.02em]">
                {item.content}
              </p>
              {item.image && (
                <div className="aspect-video relative w-[256px] mx-auto md:mx-0">
                  <Image
                    src={item.image}
                    alt={item.content}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
