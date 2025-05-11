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

export default function CareerPath() {
  return (
    <section className="mt-[82px] mlg:mt-[90px] mlg:pt-[120px] pb-[60px] mlg:pb-[120px] font-shippori-mincho space-y-12 mlg:space-y-[72px]">
      <div className="flex flex-col mlg:flex-row container mx-auto items-start gap-12 mlg:gap-[136px]">
        <div className="flex items-start gap-8 w-full mlg:w-fit">
          <div className="flex-1 flex pt-8 gap-2">
            {careerPath.map((text, index) => (
              <p
                key={index}
                className="w-[22px] text-center text-[15px] mlg:text-base tracking-[0.02em] font-medium"
              >
                {text}
              </p>
            ))}
          </div>
          <p className="shrink-0 text-xl mlg:text-[32px] text-white font-bold bg-web-main p-4 relative">
            宇 <br /> 宙 <br />へ <br />の <br /> 貢 <br /> 献 <br />へ
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
          <CareerPathCardMobile
            index={1}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
          <CareerPathCardMobile
            index={2}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
          <CareerPathCardMobile
            index={3}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
        </div>

        {/* Desktop */}
        <div className="hidden mlg:block space-y-[96px]">
          <CareerPathCard
            index={1}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
          <CareerPathCard
            index={2}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
          <CareerPathCard
            index={3}
            position="品質保証担当"
            title="他業界からのキャリアチェンジ例"
            description={`異業種での品質保証の経験を活かしたキャリアチェンジ。また、プロダクトエンジニアの経験から設計にも携わり部署を横断しながら働くケース。`}
            before={["〇〇大学", "〇〇学科卒業"]}
            steps={[
              ["医療機器の", "プロダクトエンジニア"],
              ["医療機器の", "品質保証"],
            ]}
            now={["放射線隔離", "グローブボックスの", "品質保証 ・ 設計"]}
          />
        </div>
      </div>
    </section>
  );
}
