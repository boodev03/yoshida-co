import { cn } from "@/lib/utils";

export default function CompanyContent() {
  const companyInfo = [
    { label: "社名", value: "株式会社ヨシダ" },
    { label: "代表者", value: "代表取締役　米川 周佑" },
    { label: "創業", value: "大正12年4月" },
    { label: "資本金", value: "15,000,000円" },
    { label: "電話", value: "029-297-1005（代表）" },
    { label: "ファックス", value: "029-297-1008（代表）" },
    { label: "メール", value: "soumu@ysd-k.co.jp" },
    {
      label: "従業員",
      value: [
        "原子力施設用各種装置",
        "エネルギー関連機器の設計製作据付け",
        "精密機器部品の製作",
        "発電所用部品等の製作",
        "その他／関連事業",
      ],
      isList: true,
    },
    {
      label: "取引銀行",
      value: [
        "三菱ＵＦＪ銀行／水戸支店",
        "茨城県信用組合／下市支店",
        "商工組合中央金庫",
        "常陽銀行／本店",
      ],
      isList: true,
    },
  ];

  return (
    <div>
      <div className="pb-6 mlg:pb-12 border-b-2 border-line-gray w-full space-y-2">
        <div className="relative">
          <div
            className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light rotate-[135deg]"
            style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
          />
          <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
            COMPANY
          </p>
        </div>
        <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em]">
          会社概要
        </p>
      </div>

      <div className="pt-12 mlg:pt-20 mlg:px-8 divide-y divide-line-gray">
        <div className="divide-y divide-line-gray">
          {companyInfo.map((item, index) => (
            <div
              key={index}
              className={cn(
                "py-6 flex flex-col gap-4 md:flex-row border-b border-line-gray",
                index === 0 && "border-t"
              )}
            >
              <p className="text-[15px] md:text-base font-bold text-web-vivid tracking-[-0.02em] md:min-w-[256px]">
                {item.label}
              </p>
              {item.isList ? (
                <ul className="space-y-6">
                  {item.value.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px] md:text-base font-bold text-web-dark tracking-[-0.02em]">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
