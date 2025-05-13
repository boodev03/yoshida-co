import Image from "next/image";

export default function Place() {
  return (
    <section className="mt-[82px] mlg:mt-[90px] pt-12 mlg:pt-[120px] pb-[60px] mlg:pb-[120px] font-shippori-mincho space-y-12">
      <div className="container flex flex-col md:flex-row gap-12 md:gap-[136px]">
        <div className="flex items-start justify-center gap-8 w-full md:w-fit">
          <div className="flex pt-8 gap-2">
            {["工場、倉庫のご紹介。", "社員が働くオフィスや"].map(
              (text, index) => (
                <p
                  key={index}
                  className="text-base tracking-[0.02em] font-medium"
                  style={{
                    writingMode: "vertical-rl",
                    WebkitWritingMode: "vertical-rl",
                    msWritingMode: "vertical-rl",
                  }}
                >
                  {text}
                </p>
              )
            )}
          </div>
          <p
            className="shrink-0 mlg:tracking-[0.04em] text-center text-xl mlg:text-[32px] leading-none text-white font-bold bg-web-main px-8 py-4 relative"
            style={{
              writingMode: "vertical-rl",
              WebkitWritingMode: "vertical-rl",
              msWritingMode: "vertical-rl",
            }}
          >
            働く環境
          </p>
        </div>
        {/* Image */}
        <div className="aspect-video relative w-full">
          <Image src="/images/recruite-hero.png" alt="Career Path" fill />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto pt-0 md:pt-[120px] space-y-6 md:space-y-20">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              本社工場
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              平成30年6月に新設した、株式会社ヨシダのオフィスを併設する本社工場。
            </p>
            <div className="space-y-2 border border-line-gray p-6">
              <p className="text-[15px] text-web-dark mlg:text-base">住所</p>
              <p className="text-[13px] text-web-dark mlg:text-sm">
                〒311-1135 茨城県水戸市六反田町1279-1
              </p>
              <a
                href="#"
                className="underline block text-web-light text-[13px] font-bold"
              >
                Map
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/job-opening.png"
              alt="Career Path"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative flex-1 aspect-video max-w-[544px]"
            >
              <Image
                src={`/images/capability-${index + 1}.png`}
                alt="Career Path"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              オフィス
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              営業部門や設計部門が主に業務で使用する本社工場に併設されたオフィス。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/capability-4.png"
              alt="Career Path"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              会議室
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              プロジェクトに取り組むメンバーが⁨⁩部門を超えて全員で提案や会議を行えるよう広く設計された会議室。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/capability-1.png"
              alt="Career Path"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              社員食堂
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              ボリュームたっぷりの日替わりランチを楽しめる社員食堂。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/capability-2.png"
              alt="Career Path"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              工場
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              設備の充実した約4,500平方メートルの大型工場。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/capability-3.png"
              alt="Career Path"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
