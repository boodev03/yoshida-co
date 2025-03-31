/* eslint-disable @next/next/no-img-element */

const ScrollDown = () => {
  return (
    <div className="absolute -bottom-[8%] md:bottom-auto md:top-[77.67%] lg:top-[77.67%] 2xl:top-[66.67%] 3xl:top-[65%] right-8 md:right-20 flex items-center rotate-90 gap-2 origin-bottom-right cursor-default">
      <p className="text-helvetica-neue-bold text-[10px] md:text-xs leading-[16px] tracking-[0.025em] w-max uppercase text-[#1247AF] md:text-white font-medium">
        Scroll
      </p>
      <p className="w-[60px] md:w-[120px] border border-[#1247AF] md:border-white" />
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative">
        <div className="relative h-full">
          <img
            src="/images/hero.png"
            alt="hero-image"
            className="size-full object-cover object-top hidden md:block"
            style={{
              clipPath:
                "polygon(30% 0%, 100% 0%, 100% 20%, 70% 100%, 0% 100%, 0% 80%)",
            }}
          />
          <img
            src="/images/hero-mobile.png"
            alt="hero-image"
            className="w-full h-[627px] object-cover block sm:hidden"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 100%)",
            }}
          />

          <img
            src="/images/hero-mobile.png"
            alt="hero-image"
            className="w-full h-[627px] object-cover hidden sm:block md:hidden"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)",
            }}
          />
        </div>

        <p className="absolute bottom-[100px] md:top-[120px] xl:top-[202px] md:bottom-0 right-6 md:right-10 text-en-h1 text-white text-right">
          From <br /> Decommissioning <br /> to space.
        </p>

        {/* Right Decor */}
        <div
          className="absolute top-[10%] mlg:top-[130px] xl:top-[170px] -right-20 mlg:-right-[122px] size-full bg-web-main -z-[1] hidden md:block"
          style={{
            clipPath: "polygon(30% 0%, 110% 0%, 75% 100%, 0% 100%)",
          }}
        />

        <div
          className="absolute top-[8%] left-0 size-full bg-web-main -z-[1] block sm:hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 78%, 55% 100%, 0% 100%)",
          }}
        />

        <div
          className="absolute top-[6%] left-0 size-full bg-web-main -z-[1] hidden sm:block md:hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 78%, 78% 100%, 0% 100%)",
          }}
        />

        <ScrollDown />
      </div>
    </section>
  );
}
