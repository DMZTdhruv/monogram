import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the 3D globe component to enhance performance
// This ensures the 3D globe is only rendered on the client-side
const CmsGlobe = dynamic(() => import("@/components/cms/scene"), {
  // Turn off server-side rendering for this component
  ssr: false,
  // Loading fallback: displays a 2D circle while the 3D globe loads
  loading: () => <Image fill src="/assets/circle.svg" unoptimized alt="3D circle placeholder" />,
});

const Cms = () => {
  return (
    <div className="w-full text-white ">
      <div className="text-center flex flex-col md:gap-[100px] gap-[50px] mx-auto">
        {/* Section title and description */}
        <div className="max-w-[730px] lg:pb-[70px] md:pb-[40px] pb-[20px] mx-auto space-y-[38px]">
          <h2 className="text-[80px] md:text-[120px] lg:text-[133px] font-black tracking-[-0.035em]">api</h2>
          <p className="text-[13px] leading-[20px] tracking-[0.023em] md:leading-[28px] lg:leading-[32px] xl:leading-[38.8px] xl:text-nowrap font-[300] md:text-[16px] lg:text-[18px] xl:text-[24px]">
            At build time, a Jamstack website uses data from one or more
            <br className="md:block hidden" />
            &nbsp;APIs to generate markup. These APIs can be a headless CMS
            <br className="md:block hidden" />
            &nbsp;like Prismic, a database like Supabase, or even a local JSON file!
          </p>
        </div>

        {/* 3D globe container with glow effects */}
        <div className="relative  mx-auto max-h-[914px] xl:h-auto max-w-[914px] xl:w-[100vw] aspect-square lg:h-[714px] lg:w-[714px] md:w-[500px] md:h-[500px] w-[250px] h-[250px]">
          {/* Glow and glow gradient for visual enhancement */}
          <Image
            loading="lazy"
            fill
            draggable={false}
            src="/assets/glow.svg"
            className=" md:scale-125 scale-[1.12] z-[0] xl:-translate-y-5 lg:-translate-y-6 lg:-translate-x-8 -translate-y-2 xl:-translate-x-14  mix-blend-color-dodge -translate-x-2"
            alt="Glow effect"
          />
          <Image
            loading="lazy"
            fill
            draggable={false}
            src="/assets/glow_2.svg"
            className="md:scale-150 scale-150  mix-blend-overlay z-[-1] xl:-translate-y-20 -translate-y-4 xl:-translate-x-20 -translate-x-5 lg:-translate-y-6 lg:-translate-x-8"
            alt="Glow gradient effect"
          />
          {/* Render the dynamically loaded 3D globe */}
          <CmsGlobe />
        </div>
      </div>
    </div>
  );
};

export default Cms;
