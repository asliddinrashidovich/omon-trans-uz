import Button from "../ui/button";

function ServicesSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-between gap-[185px] mb-10">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 ">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px]">Xizmatlar</h3>
          </div>
          <Button className={"block w-full"}>Barcha xizmatlar</Button>
        </div>
        <div className="max-w-[792px] w-full">
          <h2 className="text-primary text-[48px] font-[500] leading-[120%] mb-6">
            Bizning xizmatlar – har bir yuk xavfsiz va o‘z vaqtida manzilga
            yetadi.
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-10">
        <div className="flex items-center w-full justify-between py-[10px]">
          <h3 className="text-[36px] leading-[120%] font-[600]">
            Shaharlararo yuk tashish
          </h3>
          <Button type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex items-center w-full justify-between py-[10px]">
          <h3 className="text-[36px] leading-[120%] font-[600]">
            Xalqaro yuk xizmati
          </h3>
          <Button type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex items-center w-full justify-between py-[10px]">
          <h3 className="text-[36px] leading-[120%] font-[600]">
            Tezkor yetkazish berish xizmati
          </h3>
          <Button type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
      </div>
      <div className="max-w-[1200px] mx-auto mb-10 flex gap-[24px] justify-between">
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">10k+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">Yetkazilgan yuklar soni</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">15+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">Hamkor davlatlar</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">10+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">Bozorda tajriba</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">99%</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">Mijozlar qoniqish darajasi</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
