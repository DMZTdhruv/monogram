import Image from "next/image";

interface ITypeOfImage {
  svg: boolean;
}

const SvelteLogo = ({ svg }: ITypeOfImage) => {
  return (
    <div draggable={false} className="w-full select-none h-[341px] relative">
      <Image
        src={`/assets/logos/svelte.${svg ? "svg" : "webp"}`}
        className="object-contain"
        fill
        alt="svelte js logo"
      />
    </div>
  );
};

export default SvelteLogo;
