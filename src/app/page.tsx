import HeroSection from "@/section/hero_section/heroSection";
import JavascriptSection from "@/section/javascript_section/javascriptSection";
import FallingIcons from "@/section/fallingIcons_section/fallingIcon";
import MarkUpSection from "@/section/markup_section/markup";

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
