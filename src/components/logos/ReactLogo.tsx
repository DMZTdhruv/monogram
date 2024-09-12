import Image from "next/image";

const ReactLogo = () => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image src={"/assets/ReactLogo.png"} className="object-contain" fill alt="React logo" unoptimized />
    </div>
  );
};

export default ReactLogo;
