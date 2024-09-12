import Image from "next/image";

const MarkUpSection = () => {
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="relative max-w-7xl h-[2000px] xl:block border-red-500 border flex flex-col items-center justify-center   mx-auto responsive_height xl:p-0 lg:px-[50px]">
        {/* markup section intro */}
        <div className="text-center xl:mt-[600px] border-red-500 border xl:text-left lg:pt-[153px] ">
          <h1 className="font-black leading-[100%] md:text-[100px] text-[70px] lg:text-[133px]">
          markup <br className="block lg:hidden" />
          </h1>

          <p className="w-full xl:text-2xl text-xl xl:w-[480px] mt-[10px] px-[16px] sm:px-[100px] lg:px-0 pt-[20px]  text-body-text-secondary md:text-[18px] leading-[28px] lg:leading-[35px]">
          When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
          </p>
        </div>

        {/* mouse image */}
        <div draggable={false} className="hidden xl:block relative w-[620.58px] h-[455.74px] left-[-50px] mt-[78px]">
          <Image priority={true} draggable={false} alt="toppled_blocks" fill unoptimized src="/assets/toppled_blocks.svg" />
        </div>

        <div
          draggable={false}
          className="cards absolute flex gap-[46px] xl:top-[50%] top-[50%]  -translate-y-1/2 left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:pt-[153px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]"
        >
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image
              alt="markup_rect_1"
              fill
              unoptimized
              priority={true}
              className="lg:opacity-100 opacity-20"
              src="/assets/markup_rect_1.webp"
            />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
          <div className="relative w-[280px] h-[629px]">
            <Image
              fill
              alt="markup_rect_2"
              unoptimized
              priority={true}
              className="lg:opacity-100 opacity-20"
              src="/assets/markup_rect_2.webp"
            />
            <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
        </div>
      </div>
      <div className="w-full bottom-0 absolute left-[50%] -translate-x-1/2 max-w-[1920px] ">
        <div className="relative w-full h-[70px] md:h-[252px]">
          <Image loading="lazy" src="/assets/wall_of_blocks.svg" className=" object-top" alt="Wall of blocks" fill />
        </div>
      </div>
    </section>
  );
};

export default MarkUpSection;
