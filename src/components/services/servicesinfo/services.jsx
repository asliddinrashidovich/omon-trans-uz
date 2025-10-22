import Button from "../../ui/button";

function ServicesSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-between mb-10 gap-6">
        <div className="flex flex-col justify-between">
          <div className="flex flex-nowrap items-center gap-2  max-[550px]:mb-5">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px] text-nowrap">
              Boshqa xizmatlar
            </h3>
          </div>
        </div>
        <div className="max-w-[492px]  max-[550px]:hidden min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary text-[48px] font-[500] leading-[120%] mb-6">
            Bizning xizmatlar – har bir yuk xavfsiz va o‘z vaqtida manzilga
            yetadi.
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">Maxsus yuk tashish</h3>
          <Button className={"text-nowrap"} type={"secondary"}>
            To’liq ma’lumot
          </Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">Xalqaro yuk xizmati</h3>
          <Button className={"text-nowrap"} type={"secondary"}>
            To’liq ma’lumot
          </Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">
            Tezkor yetkazish berish xizmati
          </h3>
          <Button className={"text-nowrap"} type={"secondary"}>
            To’liq ma’lumot
          </Button>
        </div>
        <hr className="my-5 border-main" />
      </div>
    </div>
  );
}

export default ServicesSection;
