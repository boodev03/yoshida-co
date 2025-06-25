import Image from "next/image";

export default function Place() {
  return (
    <section className="mt-[82px] mlg:mt-[90px] pt-12 mlg:pt-[120px] pb-[60px] mlg:pb-[120px] font-shippori-mincho space-y-12">
      <div className="container flex flex-col md:flex-row gap-12 md:gap-[136px]">
        <div className="flex items-start justify-center gap-8 w-full md:w-fit">
          <div className="flex pt-8 gap-2">
            {["工場、倉庫をご紹介します。", "社員が働くオフィスや"].map(
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
          <Image src="/images/place/banner.webp" alt="Place" fill />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto pt-0 md:pt-[120px] space-y-6 md:space-y-20">
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between">
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
              src="/images/place/02 headquarters factory.webp"
              alt="Headquarters Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/03 factory equipments.webp"
              alt="Factory Equipments"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/04 assembling area of factory.webp"
              alt="Assembling Area of Factory"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/05 welding area of factory.webp"
              alt="Welding Area of Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              オフィス
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              営業・設計・生産管理・総務（事務）など各部門が業務で使用する、本社工場に隣接したオフィス。製造現場との距離が近く、図面確認や打合せもスムーズに行えます。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/place/06 office.webp"
              alt="Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              会議室
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              部門を超えたプロジェクトメンバーが集まり、提案や打合せを行える広々とした会議室。オンライン対応設備も完備しています。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/place/07 presenting.webp"
              alt="Presenting"
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
              ボリュームたっぷりの日替わりランチが楽しめる社員食堂。リフレッシュの場であり、社員同士のコミュニケーションの場としても活用されています。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/place/08 eating lunch while chatting.webp"
              alt="Eating Lunch While Chatting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/09 homemade miso soup.webp"
              alt="Homemade Miso Soup"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/10 lunch menu.webp"
              alt="Lunch Menu"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 aspect-video max-w-[544px]">
            <Image
              src="/images/place/11 cooperating at the factory.webp"
              alt="Cooperating at the Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between">
          <div className="space-y-4 md:max-w-[384px]">
            <p className="text-xl mlg:text-[32px] text-web-dark font-bold">
              フォトギャラリー
            </p>
            <p className="text-[15px] text-web-dark mlg:text-sm">
              会社の雰囲気を写真でご紹介します。
              生け花や雛人形・五月人形に加え、各種表彰状など、季節感とものづくりへのこだわりが感じられるヨシダの魅力をご覧ください。
            </p>
          </div>
          <div className="relative w-full aspect-video max-w-[544px]">
            <Image
              src="/images/place/12 discussing.webp"
              alt="Discussing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Photo Gallery Carousel */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll">
              <div className="flex gap-4 shrink-0">
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/13 seasonal ikebana.webp"
                    alt="Seasonal Ikebana"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/14 asking.webp"
                    alt="Asking"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/15 smiling.webp"
                    alt="Smiling"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/16 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/17 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/18 eating.webp"
                    alt="Eating"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/19 designing.webp"
                    alt="Designing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/20 taking a break.webp"
                    alt="Taking a Break"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/21 using a crane.webp"
                    alt="Using a Crane"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/22 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/23 designing.webp"
                    alt="Designing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex gap-4 shrink-0">
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/13 seasonal ikebana.webp"
                    alt="Seasonal Ikebana"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/14 asking.webp"
                    alt="Asking"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/15 smiling.webp"
                    alt="Smiling"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/16 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/17 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/18 eating.webp"
                    alt="Eating"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/19 designing.webp"
                    alt="Designing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/20 taking a break.webp"
                    alt="Taking a Break"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/21 using a crane.webp"
                    alt="Using a Crane"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/22 discussing.webp"
                    alt="Discussing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[300px] h-[200px] shrink-0">
                  <Image
                    src="/images/place/23 designing.webp"
                    alt="Designing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
