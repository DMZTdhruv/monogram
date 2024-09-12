import Image from "next/image";

export default function MarkUpSection() {
  return (
    <div className="relative max-w-7xl  mx-auto md:mt-[400px] mt-[50px] xl:p-0 lg:px-[50px] h-[110vh] lg:h-[1300px] xl:h-[1600px]">
      <div className="relative">
        {/* Hero section intro */}
        <div className="text-center xl:text-left md:pt-[153px] pt-[25vh]">
          <h1 className="font-black leading-[100%] md:text-[100px] text-[70px] lg:text-[133px]">markup</h1>
          <p className="w-full xl:w-[509px] font-semibold mt-[10px] px-[16px] sm:px-[100px] lg:px-0 pt-[20px] md:ml-[10px] text-black md:text-[18px] leading-relaxed lg:leading-[35px]">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website.
            The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN
            like Vercel&apos;s Edge Network
          </p>
        </div>

        {/* mouse image */}
        <div className="hidden xl:block absolute w-[84px] h-[580px] left-[256px] top-[231px]">
          {/* <Image draggable={false} alt="mouse" fill src="/assets/mouse_line.png" /> */}
        </div>

        {/* Gradient cards image with blur cards div */}
        <div className="cards absolute flex gap-[46px] top-[0%] left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:top-[153px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]">
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image alt="hero_rectangle_1" fill className="lg:opacity-100 opacity-20" src="/assets/markup_rect_1.png" />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
          <div className="relative w-[280px] h-[629px]">
            <Image fill alt="hero_rectangle_2" className="lg:opacity-100 opacity-20" src="/assets/markup_rect_2.png" />
            <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
        </div>
      </div>
      {/* Wall of blocks */}
      <div className="absolute w-full bottom-0">
        <div className="relative h-[252px] w-full">
          <Image src="/assets/wall_of_blocks.svg" alt="Wall of blocks" fill />
        </div>
      </div>
    </div>
  );
}
