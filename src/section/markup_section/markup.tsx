import Image from "next/image";

const MarkUpSection = () => {
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="relative max-w-7xl xl:h-[1500px] md:h-[1500px] sm:h-[1200px] xl:block flex flex-col items-center justify-center   mx-auto responsive_height xl:p-0 lg:px-[50px]">
        {/* markup section intro */}
        <div className="text-center xl:mt-[200px] xl:text-left lg:pt-[153px] ">
          <h1 className="font-black leading-[100%] md:text-[100px] text-[70px] lg:text-[133px]">
            markup <br className="block lg:hidden" />
          </h1>

          <p className="w-full xl:text-2xl text-sm xl:w-[480px] mt-[10px] px-[16px] sm:px-[100px] lg:px-0 pt-[20px]  text-body-text-secondary md:text-[18px] leading-relaxed lg:leading-relaxed">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website.
            The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN
            like Vercel’s Edge Network.
          </p>
        </div>

        {/* mouse image */}
        <div draggable={false} className="hidden xl:block relative w-[620.58px] h-[455.74px] left-[-50px] mt-[78px]">
          <Image
            alt="toppled_blocks"
            fill
            sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 620.58px"
            src="/assets/toppled_blocks.svg"
          />
        </div>

        <div
          draggable={false}
          className="cards absolute flex gap-[46px] xl:top-[40%] top-[50%]  -translate-y-1/2 left-[50%] -translate-x-1/2 xl:left-auto xl:-translate-x-0 xl:right-[50px] xl:pt-[0px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]"
        >
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image
              alt="markup rectangle 1"
              src="/assets/markup_rect_1.webp"
              fill
              sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 280px"
              quality={90}
              className="lg:opacity-100 opacity-20 object-cover"
            />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
          </div>
          <div className="relative w-[278px] h-[670px]">
            <Image
              alt="markup rectangle 2"
              src="/assets/markup_rect_2.webp"
              fill
              sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 278px"
              quality={90}
              className="lg:opacity-100 opacity-20 object-cover"
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
