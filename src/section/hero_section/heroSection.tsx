import Image from "next/image";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl  mx-auto responsive_height--hero xl:p-0 lg:px-[50px]">
        {/* Hero section intro */}
        <div className="text-center xl:text-left md:pt-[153px] pt-[25vh]">
          <h1 className="font-black leading-[100%] md:text-[100px] text-[70px] lg:text-[133px]">
            jamstack <br className="block lg:hidden" />
            <span className="gradient-text leading-[100%]">101</span>
          </h1>

          <p className="w-full xl:w-[509px] mt-[10px] px-[16px] sm:px-[100px] lg:px-0 pt-[20px] lg:ml-[50px] text-body-text-secondary md:text-[18px] leading-[28px] lg:leading-[35px]">
            A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher
            search-engine ranking and a more positive, responsive end-user experience.
          </p>
        </div>

        {/* mouse image */}
        <div draggable={false} className="hidden xl:block relative w-[84px] h-[580px] left-[256px] mt-[78px]">
          <Image draggable={false} alt="mouse" fill unoptimized src="/assets/mouse_line.webp" />
        </div>

        <div
          draggable={false}
          className="cards absolute flex gap-[46px] top-[0%] left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:top-[153px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]"
        >
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image
              alt="hero_rectangle_1"
              fill
              unoptimized
              className="lg:opacity-100 opacity-40"
              src="/assets/hero_rectangle_1.webp"
            />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
          <div className="relative w-[280px] h-[629px]">
            <Image
              fill
              alt="hero_rectangle_2"
              unoptimized
              className="lg:opacity-100 opacity-40"
              src="/assets/hero_rectangle_2.webp"
            />
            <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
        </div>
      </div>
      {/* Gradient cards image with blur cards div */}
    </section>
  );
};

export default HeroSection;
