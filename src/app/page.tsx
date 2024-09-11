import HeroSection from "@/section/hero_section/heroSection";
import JavascriptSection from "@/section/javascript_section/javascriptSection";
import TechSection from "@/section/tech_section/techSection";

export default function Home() {
  return (
    <main id="main" className="w-full ">
      <HeroSection />
      <JavascriptSection />
      <TechSection />
    </main>
  );
}
