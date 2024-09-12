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
    <div draggable={false} className={`${className} relative w-full overflow-hidden`}>
      <div ref={firstRow} className="w-full md:pt-[200px] pb-[0px] flex flex-col md:gap-[200px] gap-[0px] items-center">
        {children}
        {children}
      </div>
      <div
        ref={secondRow}
        className="w-full md:pt-[200px] pb-[0px] absolute flex flex-col md:gap-[200px] gap-[0px] items-center"
      >
        {children}
        {children}
      </div>
      {/* Fading effect using gradient */}
      <div className="bg-gradient-to-b from-transparent via-[#151515] to-[#151515] absolute h-[300px] bottom-[300px] lg:bottom-[400px] md:h-[400px] xl:bottom-[600px]  lg:h-[400px] xl:h-[600px] w-full z-10 pointer-events-none" />
      <div className="absolute bottom-[0] bg-[#151515]  h-[300px] md:h-[400px] lg:h-[400px] xl:h-[600px] w-full z-10 pointer-events-none" />
    </div>
  );
};

export default InfiniteColumnEffect;
