import Image from "next/image";
import "./scoreSection.css";
import { animatedScores } from "@/constant";

export default function ScoreComponent() {
  const defaultBorderClassname = "flex-1 h-full relative overflow-hidden border-dashed border-[#E8E8E8]";

  return (
    <section className="relative z-1 bg-[#151515] h-auto sm:h-[1300px] md:h-[1500px] lg:h-[2000px]">
      {/* card */}
      <div className="w-[90vw] sm:w-[80vw] md:w-[90vw] lg:w-[950px] xl:w-[1230px] mx-auto z-10 gradient-border flex flex-col backdrop-blur-xl items-center text-[#EFFFE2] translate-y-[-100px]  overflow-hidden">
        <h2 className="text-4xl mix-blend-color-dodge tracking-[-0.03em]  pb-8 sm:pb-12 md:pb-16 lg:pb-[45px] sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] text-center mt-8 sm:mt-12 md:mt-16 lg:mt-[120px] font-black leading-[100%]">
          top audit scores
        </h2>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-[73px] my-8 sm:my-10 md:my-12 lg:my-16">
          {animatedScores.map((item, index) => (
            <div
              key={item.blinkDelay}
              className="w-[80px] sm:w-[140px] md:w-[180px] lg:w-[212px] relative aspect-square"
            >
              <span
                className={`text-2xl sm:text-4xl md:text-5xl lg:text-[63px] green_glow--shadow absolute top-1/2 left-1/2 font-bold -translate-y-1/2 -translate-x-1/2 blink-animation blink-delay-${item.blinkDelay} z-10`}
              >
                {item.score}
              </span>
              <div className="relative w-full h-full">
                <Image
                  alt="ellipse"
                  src="/assets/ellipse.svg"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 212px"
                  className={`object-contain scale-[1.65] blink-animation blink-delay-${item.blinkDelay} ${index === 2 ? "opacity-30" : "opacity-100"} spin-animation spin-${item.spinDirection} spin-duration-${item.spinDuration}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 relative sm:px-6 md:px-8 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-[220px] pt-8 sm:pt-12 md:pt-16 lg:pt-[75px]">
          <p className="max-w-[756px]  font-light tracking-[0.015em] text-[#C7C7C7] text-sm sm:text-base md:text-lg lg:text-[25px] flex flex-col gap-4 sm:gap-6 md:gap-[43px] leading-[42.12px]">
            <span className=" leading-relaxed block  mix-blend-color-dodge relative z-[100] ">
              Search engines, business stakeholders, and end-users gauge a website&apos;s value using metric tools like
              Google Lighthouse, which measures site performance, SEO, and accessibility.
            </span>
            <span className=" leading-relaxed block  mix-blend-color-dodge relative z-[100] ">
              Performance is one of the most difficult scores to get to 100. This is especially true in a time when
              users demand JavaScript-heavy, highly-interactive web experiences.
            </span>
            <span className=" leading-relaxed block  mix-blend-color-dodge relative z-[100] ">
              A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher
              search-engine ranking and a more positive, responsive end-user experience.
            </span>
          </p>
        </div>
      </div>

      {/* border */}
      <div className="flex select-none absolute left-[50%] opacity-20  -translate-x-1/2 top-0 w-full h-full max-w-[1900px] mx-auto lg:px-[100px] md:px-[20px] px-[16px]">
        <div className={`${defaultBorderClassname}  md:border-x border-r border-1 `} />
        <div className={`${defaultBorderClassname}  md:border-r  border-1 `} />
        <div className={`${defaultBorderClassname}  `} />
        <div className={`${defaultBorderClassname}  md:border-x border-1 border-l border-1`} />
      </div>

      <div className="flex pb-[50px] sm:pb-[0px] mt-12 relative z-[1] transition-all sm:mt-16 md:mt-20 lg:mt-[150px] flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[30px] text-white">
        <p className="text-sm text-center sm:text-xl md:text-2xl">
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
}
