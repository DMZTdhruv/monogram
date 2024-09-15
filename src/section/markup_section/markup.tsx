import GraphicIllustration from "@/components/GraphicIllustration";
import Image from "next/image";
import "./markupcss.css";

const MarkUpSection = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative max-w-7xl  xl:h-[1500px] md:h-[1500px] sm:h-[1200px] xl:block flex flex-col items-center justify-center   mx-auto responsive_height xl:p-0 lg:px-[50px]">
        <div className="text-center xl:mt-[200px] xl:text-left lg:pt-[213px] ">
          <h1 className="font-[900] xl:-ml-[10px] tracking-[-0.047em] text-[50px] md:text-[100px] lg:text-[133px]">
            markup
          </h1>

          <p className="w-full text-[#414141] font-[400] tracking-[0.5%] xl:w-[480px] mt-[10px] md:mt-[20px] lg:mt-[45px] px-[16px] sm:px-[100px]  lg:px-0  md:text-[18px] lg:text-[24px] leading-snug lg:leading-[1.65]">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website.
            The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN
            like Vercel’s Edge Network.
          </p>
        </div>

        <div draggable={false} className="hidden xl:block relative w-[620.58px] h-[455.74px] left-[-70px] mt-[78px]">
          <Image
            alt="toppled_blocks"
            fill
            sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 620.58px"
            src="/assets/toppled_blocks.svg"
          />
        </div>

        <div
          draggable={false}
          className="cards absolute flex gap-[46px] top-[50%] xl:translate-y-0 -translate-y-1/2 left-[50%] -translate-x-1/2  xl:-translate-x-0 xl:right-[10px] xl:ml-[20px] xl:top-[263px] scale-[0.4] md:scale-75 xl:scale-100 z-[-1]"
        >
          <GraphicIllustration
            alt1="markup rectangle 1"
            src1="/assets/markup_rect_1.webp"
            alt2="markup rectangle 2"
            src2="/assets/markup_rect_2.webp"
            unoptimized={true}
          />
        </div>
      </div>
      <div className="w-full bottom-0 absolute left-[50%] -translate-x-1/2 max-w-[1920px] ">
        <div className="relative w-full  h-[50px] lg:h-[150px] md:h-[115px] xl:h-[220px]">
          <Image
            loading="lazy"
            src="/assets/wall_of_blocks.svg"
            className=" object-bottom scale-[1.07]"
            alt="Wall of blocks"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default MarkUpSection;
