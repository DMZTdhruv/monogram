import Image from "next/image";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="relative w-full ">
      {/* Hero section intro */}
      <div className="pt-[153px]">
        <h1 className="text-[133px] font-black">
          jamstack <span className="gradient-text">101</span>
        </h1>

        <p className="text-body-text-secondary mt-[10px] text-[18px] w-[549px] leading-[35px] ml-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra
          tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
        </p>
      </div>

      {/* mouse image */}
      <div className="w-[84px] h-[580.19px] left-[256px] mt-[78px] relative">
        <Image alt="mouse" fill unoptimized className="" src="/assets/mouse_line.png" />
      </div>

      {/* Gradient cards image with blur cards div */}
      <div className="cards absolute -right-[50px] top-[153px] flex gap-[46px]">
        <div className="h-[629px] w-[280px] relative mt-[193px]">
          <Image alt="hero_rectangle_1" fill unoptimized className="" src="/assets/hero_rectangle_1.png" />
          <div className="top-[314px] absolute rounded-[68px] left-[164px] z-[10] h-full w-full bg-primary bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30  " />
        </div>
        <div className="h-[629px] w-[280px] relative ">
          <Image fill alt="hero_rectangle_2" unoptimized src="/assets/hero_rectangle_2.png" />
          <div className="top-[302px] absolute rounded-[68px] left-[158px] z-[10] h-full w-full bg-primary bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30  " />
        </div>
        <div />
      </div>
    </div>
  );
};

export default HeroSection;
