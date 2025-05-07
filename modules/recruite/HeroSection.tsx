import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-web-main flex items-center justify-center">
      <div className="flex-1 relative pr-12 mlg:pr-0 h-full max-w-full pt-[100px] pb-[70px]">
        <div className="relative mlg:aspect-video w-full container mx-auto h-full max-h-[80vh]">
          <Image
            src="/images/recruite-hero.png"
            alt="Recruite Hero"
            fill
            className="object-cover"
          />
          <p className="absolute top-10 mlg:-top-6 right-0 translate-x-[70%] text-2xl mlg:text-[56px] leading-[1.625] tracking-[0.02em] text-white font-shippori-mincho font-bold">
            宇 <br /> 宙 <br /> ま <br /> で
          </p>
          <p className="absolute top-1/2 -translate-y-3/4 mlg:translate-y-0 mlg:top-0 mlg:bottom-5 right-4 mlg:right-11 text-2xl mlg:text-[56px] leading-[1.625] tracking-[0.02em] text-white font-shippori-mincho font-bold">
            続 <br />く <br />挑 <br />戦 <br />を
          </p>
          <div
            className="bg-white absolute -bottom-6 left-[1%] w-2/3 -translate-x-1/2 flex pr-[5%] items-center justify-end"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)",
            }}
          >
            <p className="text-jp-h1 text-web-main font-normal py-6 leading-[25px]">
              Always be a Pioneer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
