"use client";

import { useGSAP } from "@gsap/react";
import { useCallback, useRef } from "react";
import gsap from "gsap";

interface IInfiniteColumnEffect {
  children: React.ReactNode;
  speed?: number;
  className: string;
}

const InfiniteColumnEffect = ({ children, speed = 0.1, className }: IInfiniteColumnEffect) => {
  // two row refs to target two html elements
  const firstRow = useRef<HTMLDivElement | null>(null);
  const secondRow = useRef<HTMLDivElement | null>(null);

  // yPercent to measure the offset and direction if we want to change the direction of the icons falling
  let yPercent = -100;
  const direction = 1;

  // useGSAP hook as it is recommended by the official GSAP, we don't need to use context or cleanup here, it is automatically handled by this hook :D
  useGSAP(
    () => {
      if (firstRow.current && secondRow.current) {
        requestAnimationFrame(animateColumn);
      }
    },
    { dependencies: [speed] },
  );

  // this is the engine of the infinite moving effect animation, we are using request animation frame to make sure it moves with the respect to the device FPS!
  const animateColumn = useCallback(() => {
    if (firstRow.current && secondRow.current) {
      // so by default y will be 0 so it will be now because of the if condition-100px, meaning it's now translateY of -100px, and this will go from
      // -100px ----> 0px with the help of speed whose value is based on prop, basically moving it down, and when it reaches 0px, we make it again -100px
      // and this is so perfect, that our eyes can't even notice crazy! and gives us the illusion of infinite falling of icon animation
      if (yPercent >= 0) {
        yPercent = -100;
      }

      // gsap.set because it is more performant than gsap.to or gsap.fromTo
      gsap.set(firstRow.current, { yPercent: yPercent });
      gsap.set(secondRow.current, { yPercent: yPercent });

      // incrementing the yPercent with the speed
      // Note direction to -1 will change the falling of icons downwards to going up icons :D
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
      {/* Fading effect using gradient so that our icons disappears, just a trick to do it, as we don't want to use opacity for icon row which can lead to performance issues */}
      <div className="bg-gradient-to-b from-transparent via-[#151515] to-[#151515] absolute h-[300px] bottom-[300px] lg:bottom-[400px] md:h-[400px] xl:bottom-[600px]  lg:h-[400px] xl:h-[600px] w-full z-10 pointer-events-none" />
      <div className="absolute bottom-[0] bg-[#151515]  h-[300px] md:h-[400px] lg:h-[400px] xl:h-[600px] w-full z-10 pointer-events-none" />
    </div>
  );
};

export default InfiniteColumnEffect;
