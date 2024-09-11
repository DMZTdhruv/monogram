"use client";

import InfiniteColumnEffect from "@/components/InfiniteColumnEffect";
import NextJsLogo from "@/components/logos/NextJsLogo";
import ReactLogo from "@/components/logos/ReactLogo";
import SvelteLogo from "@/components/logos/SvelteLogo";

const TechSection = () => {
  const defaultClassnames = "flex-1 md:mt-[-400%] mt-[-700%] relative border-dashed border-x-2 border-[#E8E8E8]/20";
  return (
    <div className="lg:h-[200vh] overflow-hidden h-[90vh] w-full mt-[-150px] relative z-[-1] bg-[#151515]">
      <div className="flex h-full lg:px-[116px] md:px-[60px] px-[16px]">
        <InfiniteColumnEffect className={`${defaultClassnames} md:block hidden`} speed={0.18}>
          <NextJsLogo />
          <SvelteLogo />
          <ReactLogo />
        </InfiniteColumnEffect>
        <InfiniteColumnEffect className={`${defaultClassnames}`} speed={0.08}>
          <SvelteLogo />
          <NextJsLogo />
          <ReactLogo />
        </InfiniteColumnEffect>
        <InfiniteColumnEffect className={`${defaultClassnames} `} speed={0.2}>
          <ReactLogo />
          <NextJsLogo />
          <SvelteLogo />
        </InfiniteColumnEffect>
        <InfiniteColumnEffect className={`${defaultClassnames}`} speed={0.06}>
          <NextJsLogo />
          <SvelteLogo />
          <ReactLogo />
        </InfiniteColumnEffect>
      </div>
      <div className="bg-gradient-to-b absolute bottom-0 h-[50vh] w-full from-slate-50/0 to-neutral-900" />
    </div>
  );
};

export default TechSection;
