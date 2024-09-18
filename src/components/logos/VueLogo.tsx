import Image from "next/image";

interface ITypeOfImage {
  svg: boolean;
}

const VueLogo = ({ svg }: ITypeOfImage) => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image priority src={`/assets/logos/vue.${svg ? "svg" : "webp"}`} className="object-contain" fill alt="vue js logo" />
    </div>
  );
};

export default VueLogo;
