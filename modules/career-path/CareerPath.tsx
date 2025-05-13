import Image from "next/image";
import CareerPathCardMobile from "./CareerPathCardMobile";
import CareerPathCard from "./CareerPathCard";

const careerPath = [
  "キャリアパスの一例をご紹介します。",
  "活かしヨシダで活躍しているか",
  "今までの知識や技術をどのように",
  "社員のキャリアパス。",
  "仲間と常に新しい挑戦する",
  "初めての業界へと飛び込んで、",
  "決してメジャーでは無い業界。",
  "原子力の廃炉から医療、宇宙と、",
];

const careerPathData = [
  {
    index: 1,
    position: "品質保証担当",
    title: "他業界からのキャリアチェンジ例",
    description:
      "異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。",
    before: "〇〇大学\n〇〇学科卒業",
    steps: ["医療機器の\nプロダクトエンジニア", "医療機器の品質保証"],
    now: "放射線隔離グローブボックスの\n品質保証・設計",
  },

  {
    index: 2,
    position: "品質保証担当",
    title: "他業界からのキャリアチェンジ例",
    description:
      "異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。",
    before: "〇〇大学\n〇〇学科卒業",
    steps: ["医療機器の\nプロダクトエンジニア", "医療機器の品質保証"],
    now: "放射線隔離グローブボックスの\n品質保証・設計",
  },

  {
    index: 3,
    position: "品質保証担当",
    title: "他業界からのキャリアチェンジ例",
    description:
      "異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。",
    before: "〇〇大学\n〇〇学科卒業",
    steps: ["医療機器の\nプロダクトエンジニア", "医療機器の品質保証"],
    now: "放射線隔離グローブボックスの\n品質保証・設計",
  },
];

export default function CareerPath() {
  return (
    <section className="mt-[82px] mlg:mt-[90px] mlg:pt-[120px] pb-[60px] mlg:pb-[120px] font-shippori-mincho space-y-12 mlg:space-y-[72px]">
      <div className="flex flex-col mlg:flex-row container mx-auto items-start gap-12 mlg:gap-[136px]">
        <div className="flex items-start gap-8 w-full mlg:w-fit">
          <div className="flex-1 flex pt-8 gap-2">
            {careerPath.map((text, index) => (
              <p
                key={index}
                className="text-[15px] mlg:text-base tracking-[0.02em] font-medium"
                style={{
                  writingMode: "vertical-rl",
                  WebkitWritingMode: "vertical-rl",
                  msWritingMode: "vertical-rl",
                }}
              >
                {text}
              </p>
            ))}
          </div>
          <p
            className="shrink-0 mlg:tracking-[0.04em] text-center text-xl mlg:text-[32px] leading-none text-white font-bold bg-web-main px-8 py-4 relative"
            style={{
              writingMode: "vertical-rl",
              WebkitWritingMode: "vertical-rl",
              msWritingMode: "vertical-rl",
            }}
          >
            宇宙への貢献へ
          </p>
        </div>
        {/* Image */}
        <div className="aspect-video relative w-full">
          <Image src="/images/recruite-hero.png" alt="Career Path" fill />
        </div>
      </div>

      {/* List */}
      <div className="container mx-auto">
        <div className="block mlg:hidden px-6 space-y-12">
          {careerPathData.map((item) => (
            <CareerPathCardMobile
              key={item.index}
              index={item.index}
              position={item.position}
              title={item.title}
              description={item.description}
              before={item.before}
              steps={item.steps}
              now={item.now}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden mlg:block space-y-[96px]">
          {careerPathData.map((item) => (
            <CareerPathCard
              key={item.index}
              index={item.index}
              position={item.position}
              title={item.title}
              description={item.description}
              before={item.before}
              steps={item.steps}
              now={item.now}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
