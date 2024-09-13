import Image from "next/image";

const ReactLogo = () => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image src={"/assets/ReactLogo.webp"} className="object-contain" fill alt="React logo" priority />
    </div>
  );
};

export default ReactLogo;
