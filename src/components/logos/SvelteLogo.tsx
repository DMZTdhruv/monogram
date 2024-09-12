import Image from "next/image";

const SvelteLogo = () => {
  return (
    <div className="w-full h-[100px] relative">
      <Image
        src={"/assets/SvelteLogo.webp"}
        loading="lazy"
        className="object-contain"
        fill
        alt="Svelte logo"
        unoptimized
      />
    </div>
  );
};

export default SvelteLogo;
