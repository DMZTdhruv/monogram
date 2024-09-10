import Image from "next/image";
import "./javascriptSection.css";

const JavascriptSection = () => {
  const codeString = `
  import Document, { Html, Head, Main, NextScript } from 'next/document';

  class MyDocument extends Document {
   render() {
    return (
      <Html lang="en">
        <Head>
         {/* Fonts */}
         <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
         <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
         <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
         <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
         <noscript>
           <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
         </noscript>
        </Head>
        <body>
         <Main />
         <NextScript />
        </body>
      </Html>
      );
    }
  }

`;

  return (
    <section id="javascript_Section" className="relative z-[1] lg:h-[893px] md:h-[70vh] h-[50vh] mt-[41.58px] w-full">
      <div className="z-[1] md:space-y-[33px]  text-white relative h-full w-full md:pt-[92px] pt-[18px] text-center">
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
          className="absolute lg:block hidden right-[10%] top-[30%]"
        />
      </div>
      <div className="absolute top-0 z-[-1] w-full ">
        <div className=" lg:h-[893px] mx-auto md:h-[70vh] h-[50vh] relative xl:w-[1397px] lg:w-[90vw] md:w-full  ">
          <Image
            fill
            unoptimized
            alt="hello world"
            className=" sm:object-contain object-cover"
            src={"/assets/orange_square.png"}
          />
        </div>
      </div>
      <div className="absolute left-1/2 lg:scale-100 -translate-y-1/2 scale-[0.4] -translate-x-1/2 top-[98%] ">
        <div className="w-[803px] h-[808px] relative ">
          <Image fill unoptimized alt="retro computer" src="/assets/retro_computer.png" />
          <div className="screen top-[52px] left-[81px]  absolute z-10 px-[47px] pt-[47px] overflow-hidden text-[#44DBFF] w-[642px] h-[430px] bg-[#1A1A1A] text-[8px] leading-[15px] rounded-[30px]">
            <div className="relative">
              <pre className="absolute z-[10] top-0 left-0">{codeString}</pre>
              <pre className="absolute z-[0] brightness-200 blink_animation top-0 left-0 blur-xl">{codeString}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavascriptSection;
