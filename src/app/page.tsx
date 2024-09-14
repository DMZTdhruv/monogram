import dynamic from "next/dynamic";
import HeroSection from "@/section/hero_section/heroSection";
// dynamically importing / code splitting, this is done to improve the performance and make web page load at fast rate
const JavascriptSection = dynamic(() => import("@/section/javascript_section/javascriptSection"));
const FallingIcons = dynamic(() => import("@/section/fallingIcons_section/fallingIcon"));
const MarkUpSection = dynamic(() => import("@/section/markup_section/markup"));
const ScoreSection = dynamic(() => import("@/section/scores_section/scoreSection"));

export default function Home() {
  return (
    <main id="main" className="w-full ">
      <HeroSection />
      <JavascriptSection />
      {/* margin-top -200px ensures that this section is which is positioned behind the card, moves slightly up from the bottom of the Javascript section by 200px. Using 'translate' caused unwanted gaps at the bottom, so opting for margin-top provided a cleaner layout. */}
      <div className="mt-[-200px]">
        <FallingIcons />
        <MarkUpSection />
      </div>
      <ScoreSection />
    </main>
  );
}
