import dynamic from "next/dynamic";
import "./cms.css";
import Image from "next/image";

// Dynamically import the 3D globe component to enhance performance
// This ensures the 3D globe is only rendered on the client-side
const CmsGlobe = dynamic(() => import("@/components/cms/scene"), {
  // Turn off server-side rendering for this component
  ssr: false, 
  // Loading fallback: displays a 2D circle while the 3D globe loads
  loading: () => <Image fill src="/assets/circle.webp" alt="3D circle placeholder" />,
});

const Cms = () => {
  return (
    <div className="w-full text-white mx-auto">
      <div className="text-center flex flex-col md:gap-[100px] gap-[50px] mx-auto">
        {/* Section title and description */}
        <div>
          <h2 className="text-[80px] md:text-[120px] lg:text-[133px] font-bold">api</h2>
          <p className="text-[13px] leading-relaxed md:text-[16px] lg:text-[18px] xl:text-[20px]">
            At build time, a Jamstack site pulls data from one or more APIs to generate markup. These APIs can be a
            headless CMS <br className="md:block hidden" /> like Prismic, a database like Supabase, or even a local JSON
            file!
          </p>
        </div>

        {/* 3D globe container with glow effects */}
        <div className="relative mx-auto max-h-[914px] xl:h-auto max-w-[914px] xl:w-[100vw] aspect-square lg:h-[714px] lg:w-[714px] md:w-[500px] md:h-[500px] w-[300px] h-[300px]">
          {/* Glow and glow gradient for visual enhancement */}
          <Image
            loading="lazy"
            fill
            draggable={false}
            src="/assets/glow.webp"
            className="md:scale-125 scale-110 z-[-1] -translate-y-2 -translate-x-2"
            alt="Glow effect"
          />
          <Image
            loading="lazy"
            fill
            draggable={false}
            src="/assets/glow_2.webp"
            className="md:scale-150 scale-125 z-[-1] -translate-y-2 -translate-x-2"
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
