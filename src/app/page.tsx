import dynamic from "next/dynamic";
import HeroSection from "@/section/hero_section/heroSection";
const JavascriptSection = dynamic(() => import("@/section/javascript_section/javascriptSection"));
const FallingIcons = dynamic(() => import("@/section/fallingIcons_section/fallingIcon"));
const MarkUpSection = dynamic(() => import("@/section/markup_section/markup"));

export default function Home() {
  return (
    <main id="main" className="w-full ">
      <HeroSection />
      <JavascriptSection />
      <div className="mt-[-200px] ">
        <FallingIcons />
        <MarkUpSection />
      </div>
    </main>
  );
}
