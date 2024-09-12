import Image from "next/image";

const MarkUpSection = () => {
  return (
    <section className="relative w-full md:h-[1800px] overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl xl:p-0 lg:px-[50px] px-4 responsive_height--markup">
        {/* Hero section intro */}
        <div className="pt-[30vh] space-y-[70px] md:pt-[400px] text-center lg:text-left">
          <h1 className="text-[70px] md:text-[100px] lg:text-[133px] font-black leading-[100%]">
            markup <br className="lg:hidden block" />
          </h1>
          <p className="mt-[10px] w-full lg:w-[509px] px-4 sm:px-[100px] lg:px-0 mx-auto lg:ml-[5px] lg:mx-0 text-body-text-secondary md:text-[18px] leading-[28px] lg:leading-[35px]">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website.
            The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN
            like Vercel’s Edge Network.
          </p>
        </div>

        {/* Mouse image */}
        <div className="absolute hidden xl:block w-[620.58px] h-[580px] left-[-80px] mt-[180px]">
          <Image alt="mouse" fill src="/assets/toppled_blocks.svg" />
        </div>

        {/* Gradient cards image with blur cards div */}
        <div className="absolute flex gap-[46px] z-[-1] top-[0%] md:top-[200px] lg:top-[400px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-[50px] lg:-translate-x-0 scale-[0.4] md:scale-75 lg:scale-100">
          <div className="relative w-[280px] h-[629px] mt-[193px]">
            <Image alt="hero_rectangle_1" fill className="opacity-40 lg:opacity-100" src="/assets/markup_rect_1.png" />
            <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-blur-3xl backdrop-filter" />
          </div>
          <div className="relative w-[280px] h-[629px]">
            <Image alt="hero_rectangle_2" fill className="opacity-40 lg:opacity-100" src="/assets/markup_rect_2.png" />
            <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-blur-3xl backdrop-filter" />
          </div>
        </div>
      </div>

      {/* Wall of blocks */}
      <div className="absolute bottom-0 w-full">
        <div className="relative w-full h-[70px] md:h-[252px]">
          <Image src="/assets/wall_of_blocks.svg" className="object-cover" alt="Wall of blocks" fill />
        </div>
      </div>
    </section>
  );
};

export default MarkUpSection;
