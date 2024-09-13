import Image from "next/image";
import "./heroSection.css";
import GraphicIllustration from "@/components/GraphicIllustration";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl mx-auto responsive_height xl:p-0 lg:px-[50px] xl:block flex flex-col items-center justify-center">
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

        {/* Graphic illustration of the hero section */}
        <div className="cards absolute flex gap-[46px] top-[50%] xl:translate-y-0 -translate-y-1/2 left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:top-[153px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]">
          <GraphicIllustration
            alt1="hero rectangle illustration 1"
            src1="/assets/hero_rectangle_1.webp"
            alt2="hero rectangle illustration 2"
            src2="/assets/hero_rectangle_2.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
