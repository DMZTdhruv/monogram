import Image from "next/image";

interface ITypeOfImage {
  svg: boolean;
}

const ReactLogo = ({ svg }: ITypeOfImage) => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image
        src={`/assets/logos/react.${svg ? "svg" : "webp"}`}
        className="object-contain"
        fill
        alt="React logo"
      />
    </div>
  );
};

export default ReactLogo;
