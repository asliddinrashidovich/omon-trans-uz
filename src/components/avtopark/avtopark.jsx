import Button from "../ui/button";

function AvtoParkSection() {
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col min-[700px]:flex-row justify-between min-[700px]:gap-6 mb-10">
        <div className="flex items-start">
          <div className="flex items-center gap-2 max-[600px]:mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">Avtopark</h6>
          </div>
        </div>
        <div className="max-w-[495px] min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary header2 mb-6">
            Har bir yetkazuv uchun tayyorlangan mukammal transport vositalari
          </h2>
          <p className="paragraph-lg text-secondary">
            Bizning avtoparkimiz — yuk hajmi va turi uchun optimal yechim taklif
            qiluvchi zamonaviy texnika
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2 gap-6">
        <div className="min-[420px]:p-6 rounded-[12px] bg-white">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">Labo</h3>
          <p className="font-[500] text-[18px] leading-[150%] text-secondary mb-6">
            2 metr / 0.5 tonna
          </p>
          <div className="flex flex-col min-[600px]:flex-row justify-between items-center mb-8">
            <img src="/images/labo.png" alt="labo" />
            <div className="py-[6px] min-[600px]:max-w-[240px] w-full">
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Длина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Ширина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Высота
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Объем
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 м <sup>3</sup>
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Грузоподъемность
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  0.5 т
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className={"max-[600px]:w-full max-[550px]:py-2 max-[550px]:text-[14px]"} icon={false}>          
              Buyurtma beris        
            </Button>
            <button
              className={
                "bg-transparent max-[600px]:w-full max-[550px]:p-5 max-[550px]:text-[14px] max-[550px]:py-3  py-4 px-8 rounded-[60px] bg-secondary cursor-pointer text-third font-[600] text-[16px]"
              }
            >
              Batafsil ma’lumot
            </button>
          </div>
        </div>
        <div className="min-[420px]:p-6 rounded-[12px] bg-white">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">
            Hyundai Porland
          </h3>
          <p className="font-[500] text-[18px] leading-[150%] text-secondary mb-6">
            2 metr / 0.5 tonna
          </p>
          <div className="flex flex-col min-[600px]:flex-row justify-between items-center mb-8">
            <img src="/images/hyunday.png" alt="hyunday" />
            <div className="py-[6px] min-[600px]:max-w-[240px] w-full">
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Длина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Ширина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Высота
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Объем
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 м <sup>3</sup>
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Грузоподъемность
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  0.5 т
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className={"max-[600px]:w-full max-[550px]:py-2 max-[550px]:text-[14px]"} icon={false}>Buyurtma berish</Button>
            <button
              className={
                "bg-transparent max-[600px]:w-full max-[550px]:p-5 max-[550px]:text-[14px] max-[550px]:py-3  py-4 px-8 rounded-[60px] bg-secondary cursor-pointer text-third font-[600] text-[16px]"
              }
            >
              Batafsil ma’lumot
            </button>
          </div>
        </div>
        <div className="min-[420px]:p-6 rounded-[12px] bg-white">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">
            Gazel Tent
          </h3>
          <p className="font-[500] text-[18px] leading-[150%] text-secondary mb-6">
            2 metr / 0.5 tonna
          </p>
          <div className="flex flex-col min-[600px]:flex-row justify-between items-center mb-8">
            <img src="/images/gazel.png" alt="gazel" />
            <div className="py-[6px] min-[600px]:max-w-[240px] w-full">
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Длина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Ширина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Высота
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Объем
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 м <sup>3</sup>
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Грузоподъемность
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  0.5 т
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className={"max-[600px]:w-full max-[550px]:py-2 max-[550px]:text-[14px]"} icon={false}>Buyurtma berish</Button>
            <button
              className={
                "bg-transparent max-[600px]:w-full max-[550px]:p-5 max-[550px]:text-[14px] max-[550px]:py-3  py-4 px-8 rounded-[60px] bg-secondary cursor-pointer text-third font-[600] text-[16px]"
              }
            >
              Batafsil ma’lumot
            </button>
          </div>
        </div>
        <div className="min-[420px]:p-6 rounded-[12px] bg-white">
          <h3 className="font-[600] text-[28px] leading-[130%] mb-2">
            Isuzi Furgon
          </h3>
          <p className="font-[500] text-[18px] leading-[150%] text-secondary mb-6">
            2 metr / 0.5 tonna
          </p>
          <div className="flex flex-col min-[600px]:flex-row justify-between items-center mb-8">
            <img src="/images/isuzi.png" alt="gazel" />
            <div className="py-[6px] min-[600px]:max-w-[240px] w-full">
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Длина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Ширина
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Высота
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  1 M
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Объем
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  2 м <sup>3</sup>
                </p>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <p className="font-[400] leading-[150%] text-[16px] text-primary">
                  Грузоподъемность
                </p>
                <div className="pb-[5px]  border-b-[1px] border-[#D3D8DF] w-full"></div>
                <p className="font-[400] leading-[150%] text-[16px] text-primary text-nowrap">
                  0.5 т
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className={"max-[600px]:w-full max-[550px]:py-2 max-[550px]:text-[14px]"} icon={false}>Buyurtma berish</Button>
            <button
              className={
                "bg-transparent max-[600px]:w-full max-[550px]:p-5 max-[550px]:text-[14px] max-[550px]:py-3  py-4 px-8 rounded-[60px] bg-secondary cursor-pointer text-third font-[600] text-[16px]"
              }
            >
              Batafsil ma’lumot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvtoParkSection;
