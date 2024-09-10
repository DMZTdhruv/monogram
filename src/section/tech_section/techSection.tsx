const TechSection = () => {
  return (
    <div className="h-[150vh] w-full mt-[-150px] relative z-[-1] bg-[#151515]">
      <div className="flex h-full lg:px-[116px] md:px-[60px] px-[16px]">
        <div className="flex-1 flex items-center border-dashed border-x-2 border-[#E8E8E8]/20">section-1</div>
        <div className="flex-1 items-center border-dashed border-r-2 md:flex hidden border-[#E8E8E8]/20">section-2</div>
        <div className="flex-1 items-center border-dashed border-r-2 flex border-[#E8E8E8]/20">section-3</div>
        <div className="flex-1 flex items-center border-dashed border-r-2 border-[#E8E8E8]/20">section-4</div>
      </div>
      <div className="bg-gradient-to-b absolute bottom-0 h-[50vh] w-full from-slate-50/0 to-neutral-900" />
    </div>
  );
};

export default TechSection;
