import HeroSection from "@/section/hero_section/heroSection";
import JavascriptSection from "@/section/javascript_section/javascriptSection";
import FallingIcons from "@/section/fallingIcons_section/fallingIcon";

export default function Home() {
  return (
    <main id="main" className="w-full ">
      <HeroSection />
      <JavascriptSection />
      <FallingIcons />
      <div className="h-[100vh] w-full bg-white" />
    </main>
  );
}
