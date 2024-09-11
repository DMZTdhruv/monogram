import Image from "next/image";

const NextJsLogo = () => {
  return (
    <div className="w-full relative h-[360px]">
      <Image src={"/assets/NextJsLogo.png"} className="object-contain" fill alt="NextJs logo" unoptimized />
    </div>
  );
};

export default NextJsLogo;
