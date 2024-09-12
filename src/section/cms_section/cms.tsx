import dynamic from "next/dynamic";
import "./cms.css";
import Image from "next/image";

const CmsGlobe = dynamic(() => import("@/components/cms/scene"), {
  ssr: false,
  loading: () => <Image fill src="/assets/circle.webp" alt="3d circle" />,
});

const Cms = () => {
  return (
    <div className="w-full text-white mx-auto">
      <div className="text-center flex flex-col  md:gap-[100px] gap-[50px] mx-auto ">
        <div>
          <h2 className="text-[80px] md:text-[120px] lg:text-[133px] font-bold">api</h2>
          <p className="text-[13px] leading-relaxed md:text-[16px] lg:text-[18px] xl:text-[20px]">
            At build time, a Jamstack website uses data from one or more <br className="md:block hidden" /> APIs to
            generate markup. These APIs can be a headless CMS <br className="md:block hidden" /> like Prismic, a
            database like Supabase, or even a local JSON file!
          </p>
        </div>
        <div className="relative mx-auto max-h-[914px] xl:h-auto max-w-[914px] xl:w-[100vw] aspect-square  lg:h-[714px]  lg:w-[714px] md:w-[500px] md:h-[500px] w-[300px] h-[300px]">
          <Image
            fill
            src="/assets/glow.webp"
            className="md:scale-125 scale-110 z-[-1] -translate-y-2 -translate-x-2"
            alt="3d circle"
          />
          <Image
            fill
            src="/assets/glow_2.webp"
            className="md:scale-150 scale-125 z-[-1] -translate-y-2 -translate-x-2"
            alt="3d circle"
          />
          <CmsGlobe />
        </div>
      </div>
    </div>
  );
};

export default Cms;

// todo list
// [] -> make all the images to png
// [] -> listen to theo yap about seo 100
// [] -> fix the positing about the image blob
