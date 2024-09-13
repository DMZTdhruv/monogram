import Image from "next/image";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl mx-auto responsive_height xl:p-0 lg:px-[50px] lg:block flex flex-col items-center justify-center">
        {/* Hero section intro */}
        <div className="text-center xl:text-left lg:pt-[153px]">
          <h1 className="font-black leading-[100%] text-[50px] md:text-[100px] lg:text-[133px]">
            jamstack <br className="block lg:hidden" />
            <span className="gradient-text leading-[100%]">101</span>
          </h1>

          <p className="w-full xl:w-[509px] mt-[10px] px-[16px] sm:px-[100px] lg:px-0 pt-[20px] lg:ml-[50px] text-body-text-secondary text-base md:text-lg leading-[28px] lg:leading-[35px]">
            A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher
            search-engine ranking and a more positive, responsive end-user experience.
          </p>
        </div>

        {/* mouse image */}
        <div className="hidden xl:block relative w-[84px] h-[580px] left-[256px] mt-[78px]">
          <Image
            priority
            alt="mouse"
            src="/assets/mouse_line.webp"
            fill
            sizes="84px"
            quality={90}
            className="object-contain"
          />
        </div>

        <div className="cards absolute flex gap-[46px] lg:top-[0%] top-[50%] lg:translate-y-0 -translate-y-1/2 left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:top-[153px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]">
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image
              alt="hero rectangle 1"
              src="/assets/hero_rectangle_1.webp"
              fill
              sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 280px"
              quality={90}
              className="lg:opacity-100 opacity-40 object-cover"
              priority
            />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
          <div className="relative w-[278px] h-[670px]">
            <Image
              alt="hero rectangle 2"
              src="/assets/hero_rectangle_2.webp"
              fill
              sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 278px"
              quality={90}
              className="lg:opacity-100 opacity-40 object-cover"
              priority
            />
            <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
