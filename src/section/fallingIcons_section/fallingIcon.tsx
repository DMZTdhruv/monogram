import InfiniteColumnEffect from "@/components/InfiniteColumnEffect";
import NextJsLogo from "@/components/logos/NextJsLogo";
import ReactLogo from "@/components/logos/ReactLogo";
import VueLogo from "@/components/logos/VueLogo";
import Cms from "../cms_section/cms";

const FallingIcons = () => {
  const defaultClassnames = "flex-1 h-full overflow-hidden border-dashed border-[#E8E8E8]/20";
  return (
    <div className="xl:h-[2500px] h-[1000px] md:h-[1500px] mx-auto relative bg-[#151515]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          draggable={false}
          className="flex select-none relative z-[0] h-full top-0 max-w-[1500px] mx-auto lg:px-[116px] md:px-[60px] px-[16px]"
        >
          {/* First column (fastest) */}
          <InfiniteColumnEffect className={`${defaultClassnames} md:block hidden border-x-2`} speed={0.175}>
            <ReactLogo />
            <NextJsLogo />
            <VueLogo />
          </InfiniteColumnEffect>
          {/* Second column (slower) */}
          <InfiniteColumnEffect className={`${defaultClassnames}`} speed={0.075}>
            <VueLogo />
            <ReactLogo />
            <NextJsLogo />
          </InfiniteColumnEffect>
          {/* Third column (slowest) */}
          <InfiniteColumnEffect className={`${defaultClassnames} border-l-2`} speed={0.05}>
            <ReactLogo />
            <VueLogo />
            <NextJsLogo />
          </InfiniteColumnEffect>
          {/* Fourth column (fast but slower than first) */}
          <InfiniteColumnEffect className={`${defaultClassnames} md:border-x-2 border-l-2`} speed={0.125}>
            <VueLogo />
            <NextJsLogo />
            <ReactLogo />
          </InfiniteColumnEffect>
        </div>
      </div>

      {/* CMS section */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] ">
        <Cms />
      </div>
    </div>
  );
};

export default FallingIcons;
