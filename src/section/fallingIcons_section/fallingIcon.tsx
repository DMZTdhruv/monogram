import dynamic from "next/dynamic";
import NextJsLogo from "@/components/logos/NextJsLogo";
import ReactLogo from "@/components/logos/ReactLogo";
import VueLogo from "@/components/logos/VueLogo";
import SvelteLogo from "@/components/logos/SvelteLogo";

// Dynamically import components with ssr false,
// As we are relying on client side interaction for the 3d model and the infinite icon falling effect we are using ssr false,
// This will reduce the server load as well as it doesn't run on server :D
const InfiniteColumnEffect = dynamic(() => import("@/components/InfiniteColumnEffect"), {
  ssr: false,
});
const Cms = dynamic(() => import("../cms_section/cms"), {
  ssr: false,
});

const FallingIcons = () => {
  const defaultBorderClassname = "flex-1 h-full relative overflow-hidden border-dashed border-[#E8E8E8]/20";
  const svg = false;
  return (
    <section
      id="Falling icon"
      className="xl:h-[2600px] lg:h-[1800px] h-[1000px] md:h-[1500px] mx-auto relative bg-[#151515]"
    >
      {/* Container for falling icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          draggable={false}
          className="flex select-none relative z-[0] h-full top-0 max-w-[1500px] mx-auto lg:px-[100px] md:px-[60px] px-[16px]"
        >
          {/* First column (fastest speed) */}
        <InfiniteColumnEffect className={`${defaultBorderClassname} md:block hidden border-x border-1`} speed={0.175}>
            <ReactLogo svg={svg} />
            <NextJsLogo svg={svg} />
            <VueLogo svg={svg} />
          </InfiniteColumnEffect>
          {/* Second column (slower speed) */}
          <InfiniteColumnEffect className={`${defaultBorderClassname}`} speed={0.075}>
            <VueLogo svg={svg} />
            <ReactLogo svg={svg} />
            <SvelteLogo svg={svg} />
          </InfiniteColumnEffect>
          {/* Third column (slowest speed) */}
          <InfiniteColumnEffect className={`${defaultBorderClassname} border-l border-1`} speed={0.05}>
            <ReactLogo svg={svg} />
            <VueLogo svg={svg} />
            <NextJsLogo svg={svg} />
          </InfiniteColumnEffect>
          {/* Fourth column (fast but slower than the first column) */}
          <InfiniteColumnEffect
            className={`${defaultBorderClassname} md:border-x border-1 border-l border-1`}
            speed={0.125}
          >
            <SvelteLogo svg={svg} />
            <NextJsLogo svg={svg} />
            <ReactLogo svg={svg} />
          </InfiniteColumnEffect>
        </div>
      </div>

      {/* CMS section positioned at the bottom of the section */}
      <div className="absolute left-1/2 z-[1] -translate-x-1/2 bottom-[-10%]">
        <Cms />
      </div>
      {/* Decorative white wave element to visually separate sections */}
      <div className="absolute max-w-[2000px]  left-1/2 -translate-x-1/2 w-full z-[0] lg:bottom-[-2px]  sm:bottom-[-80px] -bottom-[1px]">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg">
          <title>wave</title>
          <path
            d="M 0,400 L 0,150 C 87.41626794258374,185.08133971291866 174.8325358851675,220.16267942583733 278,200 C 381.1674641148325,179.83732057416267 500.0861244019138,104.43062200956938 595,78 C 689.9138755980862,51.569377990430624 760.8229665071771,74.11483253588517 838,105 C 915.1770334928229,135.88516746411483 998.622009569378,175.11004784688996 1100,184 C 1201.377990430622,192.88995215311004 1320.688995215311,171.444976076555 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#ffffff"
            fill-opacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default FallingIcons;
