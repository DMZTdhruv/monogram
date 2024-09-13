import GraphicIllustration from "@/components/GraphicIllustration";
import Image from "next/image";

const MarkUpSection = () => {
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="relative max-w-7xl xl:h-[1500px] md:h-[1500px] sm:h-[1200px] xl:block flex flex-col items-center justify-center   mx-auto responsive_height xl:p-0 lg:px-[50px]">
        {/* markup section intro */}
        <div className="text-center xl:mt-[200px] xl:text-left lg:pt-[153px] ">
          <h2 className="font-black leading-[100%] md:text-[100px] text-[70px] lg:text-[133px]">
            markup <br className="block lg:hidden" />
          </h2>

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
          <GraphicIllustration
            alt1="markup rectangle 1"
            src1="/assets/markup_rect_1.webp"
            alt2="markup rectangle 2"
            src2="/assets/markup_rect_2.webp"
          />
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
