import { useTranslation } from "react-i18next";
import Button from "../ui/button";
import { cars } from "../../data/data";
import { useNavigate } from "react-router-dom";

function AvtoParkSection() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex justify-between gap-[185px] mb-10">
        <div className="flex max-[600px]:flex-col flex-row items-start  justify-between">
          <div className="flex items-center gap-2 max-[600px]:mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">{t("avtopark")}</h6>
          </div>
          <h2 className="text-primary min-[600px]:hidden text-primary header2 mb-6">
            {t("avtopark")}
          </h2>
          <p className="max-w-[425px] min-[600px]:hidden text-secondary paragraph-lg">
            {t("avtoParkSectionHeader")}
          </p>
        </div>
        <div className="max-w-[792px] max-[600px]:hidden w-full">
          <h2 className="text-primary text-[48px] font-[500] leading-[120%] mb-6">
            {t("avtopark")}
          </h2>
          <p className="max-w-[425px] font-[500] text-[18px] text-secondary leading-[150%]">
            {t("avtoParkSectionHeader")}
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2 gap-6">
        {cars.map(car => (
          <div key={car.img} className="min-[420px]:p-6 rounded-[12px] bg-white">
            <h3 className="font-[600] text-[28px] leading-[130%] mb-2">{car.title}</h3>
            <p className="font-[500] text-[18px] leading-[150%] text-secondary mb-6">
              {t("carTitle")}
            </p>
            <div className="flex flex-col min-[600px]:flex-row justify-between items-center mb-8">
              <img src={car.img} alt="labo" />
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
                {t("book")}       
              </Button>
              <button
                onClick={() => navigate("/avtopark")}
                className={
                  "bg-transparent max-[600px]:w-full max-[550px]:p-5 max-[550px]:text-[14px] max-[550px]:py-3  py-4 px-8 rounded-[60px] bg-secondary cursor-pointer text-third font-[600] text-[16px]"
                }
              >
                {t("readMoreInfo")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvtoParkSection;
