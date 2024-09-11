import Image from "next/image";

const SvelteLogo = () => {
  return (
    <div className="w-full h-[100px] relative">
      <Image src={"/assets/SvelteLogo.png"} className="object-contain" fill alt="vue logo" unoptimized />
    </div>
  );
};

export default SvelteLogo;
