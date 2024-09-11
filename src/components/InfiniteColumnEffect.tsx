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

  let yPercent = 0;
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
      if (yPercent >= 100) {
        yPercent = 0;
      }
      gsap.set(firstRow.current, { yPercent: yPercent });
      gsap.set(secondRow.current, { yPercent: yPercent });
      yPercent += speed * direction;
      requestAnimationFrame(animateColumn);
    }
  }, [speed]);

  return (
    <div className={`${className}`}>
      <div
        ref={firstRow}
        className="w-full md:pb-[200px] pb-[0px]  flex flex-col md:gap-[200px] gap-[0px] items-center"
      >
        {children}
        {children}
        {children}
      </div>
      <div
        ref={secondRow}
        className="w-full  md:pb-[200px]  pb-[0px]  absolute flex flex-col md:gap-[200px] gap-[0px]  items-center"
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteColumnEffect;
