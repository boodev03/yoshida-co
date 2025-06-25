import Image from "next/image";
import CareerPathCardMobile from "./CareerPathCardMobile";
import CareerPathCard from "./CareerPathCard";

const careerPath = [
  "その一例をご紹介します。",
  "活かしヨシダで活躍しているか、",
  "今までの知識や技術をどのように",
  "社員のキャリアパス。",
  "仲間と常に新しい挑戦する",
  "初めての業界へと飛び込んで、",
  "決してメジャーでは無い業界。",
  "原子力(廃炉)から医療、宇宙と、",
];

const careerPathData = [
  {
    index: 1,
    position: "設計課",
    title: "大手企業からのキャリアパス",
    description:
      "じっとPCに向かっていた大手企業の設計から、上流から下流まですべての工程に関われる環境を求めて転職。毎日社内を駆け回り活躍中。",
    before: "国立大学大学院\n医工学研究科修了",
    steps: [
      "加速器関連機器の\n基本設計",
      "検体搬送・\n前処理システムの\nシステム設計",
    ],
    now: "グローブボックス・\n給排気の設計",
  },
  {
    index: 2,
    position: "設計課",
    title: "専門知識を活かしたキャリアパス",
    description:
      "専門性が求められる電気設計において、深い知識と実務経験を武器にキャリアアップ。ヨシダの設計として、新たな分野にもどんどん挑戦しています。",
    before: "工業高等専門学校 本科\n電子制御科卒業",
    steps: [
      "FA（工場自動化）の\nソフトウェア\n設計・作成",
      "電動工具の\nフトウェア設計・作成",
    ],
    now: "隔離技術を使用した\n製品の設計",
  },
  {
    index: 3,
    position: "設計課",
    title: "学びを活かしたキャリアパス",
    description:
      "核融合系の実験を学んだ大学生時代から、巡り巡って核分裂を扱うヨシダへ。コンサルで培ったスキルも駆使し、多種多様な設計やプロジェクトマネジメントに関わっています。",
    before: "国立大学大学院\n電気系工学科\n修了",
    steps: ["原子力発電所の\n電源設計", "エネルギー関係の\n大手外資コンサル"],
    now: "グローブボックスの\n電気・機械設計・\n開発案件のPM",
  },
  {
    index: 4,
    position: "品質保証課",
    title: "経験を活かしたキャリアチェンジ",
    description:
      "自動車整備や検査業務で培ってきた豊富な経験と正確な技術で、精密さを求められる品質保証課にて活躍中。",
    before: "産業技術専門学院\n自動車整備課卒業",
    steps: [
      "大手自動車メーカーの\n自動車整備士事",
      "原子力発電所の\n放射線管理業務\n原子力製品の検査",
    ],
    now: "隔離技術を\n使用した製品の\n品質保証",
  },
  {
    index: 5,
    position: "生産管理課",
    title: "他業界からのキャリアチェンジ",
    description:
      "スーパー勤務中に取得したフォークリフトや危険物取扱者の資格を活かし、ものづくりの業界へ。幅広い業務に携わることができる生産管理課に転職。",
    before: "国立大学\n文系学科卒業",
    steps: ["業務用スーパー勤務", "ケーブル加工機メーカー\n生産管理、他"],
    now: "ヨシダの生産管理",
  },
  {
    index: 6,
    position: "製造担当",
    title: "経験を活かしたキャリアアップ",
    description:
      "<span className='text-brand-accent'>異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。</span>",
    before: "工業高等学校\n電子機械科卒業",
    steps: ["金属工作機械製造会社\nにて、真空装置の\n組み立て業務に従事"],
    now: "大型設備や\nグローブボックスの\n製缶・溶接士",
  },
  {
    index: 7,
    position: "製造担当",
    title: "経験を活かしたキャリアアップ",
    description:
      "<span className='text-brand-accent'>異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。</span>",
    before: "横型マシニングで\n真空チャンバーの加工業務",
    steps: [
      "マシニングオペレーターとして、\n5面加工機を用い、\n多種多様な物を加工",
    ],
    now: "放射線隔離\nグローブボックスの\n品質保証・設計",
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
            キャリアパス
          </p>
        </div>
        {/* Image */}
        <div className="aspect-video relative w-full">
          <Image
            src="/images/career-path/banner.webp"
            alt="Career Path"
            fill
            className="object-cover"
          />
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
