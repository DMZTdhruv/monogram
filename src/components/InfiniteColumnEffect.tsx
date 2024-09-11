"use client";

import { useGSAP } from "@gsap/react";
import type React from "react";
import { useCallback, useRef } from "react";
import gsap from "gsap";

interface IInfiniteColumnEffect {
  children: React.ReactNode;
  speed?: number;
  className: string;
}

const InfiniteColumnEffect = ({ children, speed = 0.1, className }: IInfiniteColumnEffect) => {
  const firstRow = useRef<HTMLDivElement | null>(null);
  const secondRow = useRef<HTMLDivElement | null>(null);

  let yPercent = -100;
  const direction = 1;

  useGSAP(
    () => {
      if (firstRow.current && secondRow.current) {
        requestAnimationFrame(animateColumn);
      }
    },
    { dependencies: [speed] },
  );

  const animateColumn = useCallback(() => {
    if (firstRow.current && secondRow.current) {
      if (yPercent >= 0) {
        yPercent = -100;
      }
      gsap.set(firstRow.current, { yPercent: yPercent });
      gsap.set(secondRow.current, { yPercent: yPercent });
      yPercent += speed * direction;
      requestAnimationFrame(animateColumn);
    }
  }, [speed]);

  return (
    <div className={`${className} relative  w-full`}>
      <div ref={firstRow} className="w-full md:pt-[200px] pb-[0px] flex flex-col md:gap-[200px] gap-[0px] items-center">
        {children}
      </div>
      <div
        ref={secondRow}
        className="w-full md:pt-[200px] pb-[0px] absolute flex flex-col md:gap-[200px] gap-[0px]  items-center"
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteColumnEffect;

// TODO
// [] -> Add dynamic height to the logos
// [] -> change the logos to png if more performant
// [] -> slow down the speed
// [] -> try the ticker method
