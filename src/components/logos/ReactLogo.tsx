import "./logo.css";
import Image from "next/image";

const ReactLogo = () => {
  return (
    <div className="w-full h-[341px] relative">
      <Image src={"/assets/ReactLogo.png"} className="object-contain" fill alt="React logo" unoptimized />
    </div>
  );
};

export default ReactLogo;
