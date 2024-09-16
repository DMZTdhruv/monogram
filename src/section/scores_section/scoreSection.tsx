import { animatedScores } from "@/constant";
import "./scoreSection.css";
import Image from "next/image";

const ScoreSection = () => {
  const defaultBorderClassname = "flex-1 h-full relative overflow-hidden border-dashed border-[#E8E8E8]/20";

  return (
    <section className="max-h-[1799px] xl:h-[1799px] h-auto relative w-full bg-[#151515]">
      <div className="gradientCard max-w-[1204px] relative z-[1] backdrop-blur-2xl xl:w-[1204px] w-[90vw] max-h-[1328px] xl:h-[1328px] -translate-y-[100px] h-auto mx-auto ">
        <div className="relative z-[2]  mix-blend-color-dodge">
          <h2 className="text-[#EFFFE2] pt-[60px] sm:pt-[100px] lg:pt-[120px] text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[76px] text-center font-black leading-[100%]">
            top audit scores
          </h2>
          <div className="scores">
            <div className="grid grid-cols-2 text-white w-fit mx-auto xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-[70px] my-6 sm:my-8 md:my-10 lg:my-16">
              {animatedScores.map((item, index) => (
                <div
                  key={item.blinkDelay}
                  className="w-[80px] sm:w-[140px] md:w-[180px] lg:w-[212px] relative aspect-square"
                >
                  <span
                    className={`text-xl text-glow-shadow text-[#EFFFE2] sm:text-3xl md:text-4xl lg:text-[63px] score-glow-shadow absolute top-1/2 left-1/2 font-bold -translate-y-1/2 -translate-x-1/2 blink-animation blink-delay-${item.blinkDelay} z-10`}
                  >
                    {item.score}
                  </span>
                  <div className="relative infinite-rotate w-full h-full flex justify-center items-center">
                    <Image
                      alt="ellipse"
                      src="/assets/ellipse.svg"
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 212px"
                      className={`object-cover scale-[1.6] blink-animation blink-delay-${item.blinkDelay} ${index === 2 ? "opacity-30" : "opacity-100"} spin-animation spin-${item.spinDirection} spin-duration-${item.spinDuration}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gradient max-w-[756px] font-[400] pt-6 sm:pt-8 md:pt-10 lg:pt-[70px] mx-auto px-8 sm:px-8 lg:px-0  pb-[60px] sm:pb-[100px] lg:pb-0 tracking-[0.015em] text-sm sm:text-base md:text-lg lg:text-[25px] flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 leading-[42.12px]">
            <span className="leading-relaxed block  text-[#C7C7C7] relative z-[100]">
              Search engines, business stakeholders, and end-users gauge a website&apos;s value using metric tools like
              Google Lighthouse, which measures site performance, SEO, and accessibility.
            </span>
            <span className="leading-relaxed block   text-[#C7C7C7] relative z-[100]">
              Performance is one of the most difficult scores to get to 100. This is especially true in a time when
              users demand JavaScript-heavy, highly-interactive web experiences.
            </span>
            <span className="leading-relaxed block  text-[#C7C7C7]  relative z-[100]">
              A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher
              search-engine ranking and a more positive, responsive end-user experience.
            </span>
          </p>
        </div>
        <div className="gradientBackground absolute backdrop-blur-xl z-[-1] inset-0 rounded-[68px]" />
      </div>
      <div className="flex select-none h-full absolute z-[0] top-0 max-w-[1500px] w-full left-[50%] -translate-x-1/2 lg:px-[100px] md:px-[60px] px-[16px]">
        <div className={`${defaultBorderClassname} md:block hidden border-x border-1`} />
        <div className={`${defaultBorderClassname} border-r `} />
        <div className={`${defaultBorderClassname} `} />
        <div className={`${defaultBorderClassname} md:border-x border-1 border-l border-1`} />
      </div>
      <div className="flex translate-y-[-50px] py-6 sm:py-12 md:py-16 lg:mt-[150px] lg:pb-0 relative z-[1] transition-all flex-col items-center gap-2 sm:gap-4 md:gap-6 lg:gap-[30px] text-white">
        <p className="text-xs sm:text-sm md:text-base lg:text-xl text-center">
          This is a design test by &#123;&#123;Dhruv&#125;&#125; for Monogram.
        </p>
        <svg
          width="49"
          height="42"
          viewBox="0 0 49 42"
          className="hover:animate-bounce"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>heart</title>
          <path
            d="M24.6136 41.6136L4.90057 21.9006C3.32813 20.3281 2.27983 18.5 1.75568 16.4162C1.24432 14.3324 1.25071 12.2614 1.77486 10.2031C2.29901 8.1321 3.34091 6.32954 4.90057 4.79545C6.49858 3.22301 8.32031 2.18111 10.3658 1.66974C12.424 1.1456 14.4759 1.1456 16.5213 1.66974C18.5795 2.19389 20.4077 3.23579 22.0057 4.79545L24.6136 7.3267L27.2216 4.79545C28.8324 3.23579 30.6605 2.19389 32.706 1.66974C34.7514 1.1456 36.7969 1.1456 38.8423 1.66974C40.9006 2.18111 42.7287 3.22301 44.3267 4.79545C45.8864 6.32954 46.9283 8.1321 47.4524 10.2031C47.9766 12.2614 47.9766 14.3324 47.4524 16.4162C46.9411 18.5 45.8991 20.3281 44.3267 21.9006L24.6136 41.6136Z"
            fill="#FF069C"
          />
        </svg>
      </div>
    </section>
  );
};

export default ScoreSection;
