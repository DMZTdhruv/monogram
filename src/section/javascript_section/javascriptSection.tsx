import Image from "next/image";
import "./javascriptSection.css";
import { codeString } from "@/constant";

const JavascriptSection = () => {
  return (
    <section
      id="javascript_Section"
      className="relative z-[1]  lg:h-[893px] md:h-[550px] h-[400px] mt-[41.58px] w-full"
    >
      {/* Intro of the section */}
      <div className="z-[1] md:space-y-[33px] mx-auto  text-white relative h-full max-w-7xl md:pt-[92px] pt-[42px] text-center">
        <h2 className="font-black md:text-[100px] text-[50px] lg:text-[133px]">javascript</h2>
        <p className="md:leading-[35px] px-6 font-[300] leading-relaxed md:text-[18px] text-[13px]">
          Statically generated pages are brought to life with client-side
          <br className="hidden sm:block " />
          JavaScript libraries and frameworks, such as Algolia and Next.js.
        </p>
        <Image
          height={466}
          width={246}
          alt="squiggly_arrowJS"
          src="/assets/squiggly_arrowJS.svg"
          className="absolute lg:block hidden right-[5%] top-[30%]"
          sizes="(max-width: 768px) 150px, (max-width: 1280px) 200px, 246px"
        />
      </div>

      {/* The javascript section or the orange card illustration */}
      <div className="absolute top-0 z-[-1] w-full ">
        <div className=" lg:h-[893px] mx-auto md:h-[550px] h-[400px] relative max-w-[1397px] xl:w-[90vw] lg:w-[80vw] md:w-full  ">
          <Image
            fill
            alt="hello world"
            className="sm:object-contain object-cover"
            src={"/assets/orange_square.webp"}
            quality={90}
            sizes="(max-width: 768px) 400px, (max-width: 1280px) 550px, 100vw"
          />
        </div>
      </div>

      {/* Retro computer illustration with code snippet */}
      <div className="absolute left-1/2 lg:scale-100 -translate-y-1/2 scale-[0.4] -translate-x-1/2 top-[98%]">
        <div className="w-[803px] h-[808px] relative">
          <Image fill unoptimized alt="retro computer" loading="lazy" src="/assets/retro_computer.webp" />
          {/* fake screen */}
          <div className="screen top-[52px] left-[81px] absolute z-10 px-[47px] pt-[47px] overflow-hidden text-[#44DBFF] w-[642px] h-[430px] bg-[#1A1A1A] text-[8px] leading-[15px] rounded-[30px]">
            <div className="relative">
              {/* code snippet display */}
              <pre className="absolute z-[10] top-0 left-0">{codeString}</pre>
              {/* since text-shadows were making this section laggy I decided to duplicate it make it blur which turns to give better performance with same effect haha */}
              <pre className="absolute z-[0] brightness-200 blink_animation top-0 left-0 blur-xl">{codeString}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavascriptSection;
