import Button from "../ui/button";

function ServicesSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-between mb-10 gap-[10px]">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2  max-[550px]:mb-5">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px]">Xizmatlar</h3>
          </div>
          <h2 className="text-primary text-[32px]  min-[550px]:hidden font-[500] leading-[120%] mb-4 min-[550px]:mb-6">
            Bizning xizmatlar – har bir yuk xavfsiz va o‘z vaqtida manzilga
            yetadi.
          </h2>
          <Button className={"w-auto min-[550px]:w-full"}>Barcha xizmatlar</Button>
        </div>
        <div className="max-w-[492px]  max-[550px]:hidden min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary text-[48px] font-[500] leading-[120%] mb-6">
            Bizning xizmatlar – har bir yuk xavfsiz va o‘z vaqtida manzilga
            yetadi.
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-10">
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            Shaharlararo yuk tashish
          </h3>
          <Button className={"text-nowrap"} type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            Xalqaro yuk xizmati
          </h3>
          <Button className={"text-nowrap"} type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            Tezkor yetkazish berish xizmati
          </h3>
          <Button className={"text-nowrap"} type={"secondary"}>To’liq ma’lumot</Button>
        </div>
        <hr className="my-5 border-main" />
      </div>
      <div className="max-w-[1200px] mx-auto mb-10 grid grid-cols-2 min-[850px]:grid-cols-4 gap-6 justify-between">
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
