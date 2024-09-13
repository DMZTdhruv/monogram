import Image from "next/image";

const VueLogo = () => {
  return (
    <div className="w-full h-[351px] relative">
      <Image src={"/assets/VueLogo.webp"} className="object-contain" fill alt="vue logo" priority />
    </div>
  );
};

export default VueLogo;
