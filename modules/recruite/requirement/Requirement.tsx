import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define interfaces for the requirement data structure
interface RequirementDetail {
  text: string;
  hasBullet?: boolean;
}

interface RequirementItem {
  category: string;
  details: RequirementDetail[];
  hasBullet?: boolean;
}

interface RequirementSection {
  title: string;
  items: RequirementItem[];
}

interface RequirementData {
  sections: RequirementSection[];
}

// Define the requirement data structure based on the image
const requirementData: RequirementData = {
  sections: [
    {
      title: "募集職種",
      items: [
        {
          category: "営業職",
          details: [],
        },
        {
          category: "機械設計・電気設計",
          details: [],
        },
        {
          category: "製缶作業員",
          details: [],
        },
        {
          category: "マシニングオペレーター",
          details: [],
        },
      ],
    },
    {
      title: "雇用形態",
      items: [
        {
          category: "正社員",
          details: [],
        },
      ],
    },
    {
      title: "待遇",
      items: [
        {
          category: `59歳以下
年齢制限の理由（省令1号）：60歳未満の方を募集（定年が60歳）`,
          details: [],
        },
      ],
    },
    {
      title: "学歴",
      items: [
        {
          category: "高卒以上",
          details: [],
        },
      ],
    },
    {
      title: "資格・経験等【必須】",
      items: [
        {
          category: "普通自動車免許",
          details: [
            { text: "営業職/機械設計・電気設計", hasBullet: true },
            {
              text: "パソコン基本操作（Word、Excel、Powerpoint）",
              hasBullet: false,
            },
          ],
        },
      ],
    },
    {
      title: "資格・経験等【優遇】",
      items: [
        {
          category: "機械設計・電気設計",
          details: [{ text: "CAD、3DCAD経験者" }],
          hasBullet: true,
        },
        {
          category: "製缶作業員",
          hasBullet: true,
          details: [
            {
              text: `TIG溶接（専門級）および半自動溶接（専門級）、玉掛け技能、床上操作式クレーン運転、フォークリフト運転`,
              hasBullet: false,
            },
          ],
        },
        {
          category: "マシニングセンタオペレーター",
          hasBullet: true,
          details: [
            {
              text: "加工工程がレイアウトできる、CADの図面が理解できる、プログラミングできる、玉掛け技能、床上操作式クレーン運転、フォークリフト運転",
              hasBullet: false,
            },
          ],
        },
      ],
    },
    {
      title: "採用人数",
      items: [
        {
          category: "各職種若干名",
          details: [],
        },
      ],
    },
    {
      title: "給与",
      items: [
        {
          category: `200,000円～335,000円
経験・能力等を考慮し、当社規定により決定いたします。`,
          details: [],
        },
      ],
    },
    {
      title: "諸手当",
      items: [
        {
          category: "時間外手当て、家族手当、役職手当、通勤手当等",
          details: [],
        },
      ],
    },
    {
      title: "勤務時間",
      items: [
        {
          category: "8:00～17:00",
          details: [],
        },
      ],
    },
    {
      title: "休日休暇",
      items: [
        {
          category: "時間外：月平均20時間、休憩時間：60分",
          details: [],
        },
        {
          category: "休日出勤あり（仕事量に応じて）",
          details: [],
        },
        {
          category: "年間休日125日（夏期休暇、お盆、年末年始、GW）",
          details: [],
        },
        {
          category:
            "有給休暇、半日有給休暇、慶弔休暇、産休・育児休暇、誕生日休暇",
          details: [],
        },
      ],
    },
    {
      title: "保険",
      items: [
        {
          category:
            "雇用保険、労災保険、健康保険、厚生年金保険、退職金共済（退職金制度あり）",
          details: [],
        },
      ],
    },
    {
      title: "福利厚生",
      items: [
        {
          category:
            "退職金制度（勤続3年以上）、職場レクリエーション、クラブ活動",
          details: [],
        },
      ],
    },
  ],
};

export default function Requirement() {
  return (
    <section className="mt-[82px] mlg:mt-[90px] mlg:pt-[120px] pb-[60px] mlg:pb-[120px] font-shippori-mincho">
      <div className="container space-y-12 md:space-y-0">
        <p className="text-web-main text-center font-bold text-xl tracking-[0.02em] mlg:text-[32px] md:mb-[120px]">
          募集要項
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:gap-[160px] items-center md:justify-center md:mb-12">
          <Button className="max-w-[352px] h-[79px] border-none w-full text-web-vivid text-[15px] tracking-[0.02em] rounded-[5px] bg-white hover:bg-web-vivid hover:text-white shadow-[4px_4px_12px_0px_#0000001A]">
            新卒採用
          </Button>

          <Button className="max-w-[352px] h-[79px] border-none w-full text-white text-[15px] tracking-[0.02em] rounded-[5px] bg-web-vivid hover:bg-white hover:text-web-vivid shadow-[4px_4px_12px_0px_#0000001A]">
            中途採用
          </Button>
        </div>

        {/* Content */}
        <div className="px-6 mlg:px-[95px] py-[60px] mlg:py-[120px] space-y-12 shadow-[4px_4px_12px_0px_#0000001A] bg-white">
          <p className="text-web-vivid font-bold text-xl tracking-[0.02em] mlg:text-[32px]">
            新卒採用
          </p>

          <div>
            <hr className="border-line-gray" />
            <div className="divide-y divide-line-gray">
              {requirementData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-6 py-6 mlg:flex">
                  <p className="text-[15px] mlg:w-[160px] shrink-0 text-web-main font-bold tracking-[0.02em] mlg:text-xl">
                    {section.title}
                  </p>
                  <ul className="space-y-2 list-none">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <li
                          key={itemIndex}
                          className={`text-[15px] whitespace-pre-line tracking-[0.02em] text-web-dark mlg:text-base ${
                            item.hasBullet ? "list-disc ml-7" : ""
                          }`}
                        >
                          {item.category}
                        </li>
                        {item.details.length > 0 && (
                          <ul className="list-none mt-1">
                            {item.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-[15px] whitespace-pre-line tracking-[0.02em] text-web-dark mlg:text-base ${
                                  detail.hasBullet
                                    ? "list-disc ml-7"
                                    : "indent-7"
                                }`}
                              >
                                {detail.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mlg:hidden">
          <Link
            href="#"
            className="text-[15px] text-web-main font-bold mlg:text-base underline"
          >
            キャリア採用の募集要項を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
