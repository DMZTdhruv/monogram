"use client";

import InfiniteColumnEffect from "@/components/InfiniteColumnEffect";
import NextJsLogo from "@/components/logos/NextJsLogo";
import ReactLogo from "@/components/logos/ReactLogo";
import VueLogo from "@/components/logos/VueLogo";

const TechSection = () => {
  const defaultClassnames = "flex-1 border-dashed border-[#E8E8E8]/20";
  return (
    <div className="md:h-[200vh] h-[90vh] overflow-hidden w-full mt-[-200px] relative z-[-1] bg-[#151515]">
      <div className="flex h-full lg:px-[116px] md:px-[60px] px-[16px]">
        {/* First column (fastest) */}
        <InfiniteColumnEffect className={`${defaultClassnames} border-x-2`} speed={0.35}>
          <ReactLogo />
          <NextJsLogo />
          <VueLogo />
        </InfiniteColumnEffect>
        {/* Second column (slower) */}
        <InfiniteColumnEffect className={`${defaultClassnames} md:block hidden`} speed={0.15}>
          <VueLogo />
          <ReactLogo />
          <NextJsLogo />
        </InfiniteColumnEffect>
        {/* Third column (slowest) */}
        <InfiniteColumnEffect className={`${defaultClassnames} md:block hidden border-l-2`} speed={0.1}>
          <ReactLogo />
          <VueLogo />
          <NextJsLogo />
        </InfiniteColumnEffect>
        {/* Fourth column (fast but slower than first) */}
        <InfiniteColumnEffect className={`${defaultClassnames} md:block hidden border-x-2`} speed={0.25}>
          <VueLogo />
          <NextJsLogo />
          <ReactLogo />
        </InfiniteColumnEffect>
      </div>

      <div className="bg-gradient-to-b absolute bottom-0 h-[50vh] w-full from-slate-50/0 to-neutral-900" />
    </div>
  );
};

export default TechSection;
