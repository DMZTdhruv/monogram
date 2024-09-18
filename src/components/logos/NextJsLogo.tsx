import Image from "next/image";

interface ITypeOfImage {
  svg: boolean;
}

const NextJsLogo = ({ svg }: ITypeOfImage) => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image
        priority
        src={`/assets/logos/nextjs.${svg ? "svg" : "webp"}`}
        className="object-contain"
        fill
        alt="Next js logo"
      />
    </div>
  );
};

export default NextJsLogo;
