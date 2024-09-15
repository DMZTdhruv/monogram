import Image from "next/image";

// Interface for the component's props
interface IGraphicIllustration {
  alt1: string; // Alt text for the first image
  src1: string; // Source URL for the first image
  alt2: string; // Alt text for the second image
  src2: string; // Source URL for the second image
  unoptimized: boolean;
}

const GraphicIllustration = ({ alt1, src1, alt2, src2, unoptimized }: IGraphicIllustration) => {
  return (
    <>
      <div className="relative w-[280px] h-[629px] mt-[175px]">
        <Image
          alt={alt1}
          src={src1}
          fill
          sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 280px"
          quality={90}
          className="xl:opacity-100 opacity-40 object-cover"
          priority
          unoptimized={unoptimized}
        />
        <div className="absolute top-[314px] left-[164px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
      </div>
      <div className="relative w-[278px] h-[670px]">
        <Image
          alt={alt2}
          src={src2}
          fill
          sizes="(max-width: 768px) 111px, (max-width: 1280px) 208px, 278px"
          quality={90}
          className="xl:opacity-100 opacity-40 object-cover"
          priority
          unoptimized={unoptimized}
        />
        <div className="absolute top-[302px] left-[158px] w-full h-full z-10 rounded-[68px] bg-primary bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-3xl" />
      </div>
    </>
  );
};

export default GraphicIllustration;
