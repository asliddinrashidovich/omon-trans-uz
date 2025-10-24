import { useTranslation } from "react-i18next";
import Button from "../ui/button";

function ServicesSection() {
  const {t} = useTranslation()
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex max-[800px]:flex-col flex-row justify-between mb-10 gap-[10px]">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2  max-[800px]:mb-5">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="font-[500] leading-[130%] text-[20px]">{t("services")}</h3>
          </div>
          <h2 className="text-primary  min-[800px]:hidden header2 mb-4 min-[550px]:mb-6">
            {t("servicesSectionHeader")}
          </h2>
          <Button url="/services" className={"w-auto min-[800px]:w-full"}>{t("allServices")}</Button>
        </div>
        <div className="max-w-[492px]  max-[800px]:hidden min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary text-[48px] font-[500] leading-[120%] mb-6">
            {t("servicesSectionHeader")}
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-10">
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            {t("servicesSection1")}
          </h3>
          <Button url={`/services/${1}-${t("servicesSection1")}`} className={"text-nowrap"} type={"secondary"}>{t("allInfo")}</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            {t("servicesSection2")}
          </h3>
          <Button url={`/services/${2}-${t("servicesSection2")}`} className={"text-nowrap"} type={"secondary"}>{t("allInfo")}</Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="text-[28px] min-[550px]:text-[36px] leading-[120%] font-[600]">
            {t("servicesSection3")}
          </h3>
          <Button url={`/services/${3}-${t("servicesSection3")}`} className={"text-nowrap"} type={"secondary"}>{t("allInfo")}</Button>
        </div>
        <hr className="my-5 border-main" />
      </div>
      <div className="max-w-[1200px] mx-auto mb-10 grid grid-cols-2 min-[850px]:grid-cols-4 gap-6 justify-between">
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">10k+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">{t("result1")}</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">15+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">{t("result2")}</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">10+</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">{t("result3")}</p>
        </div>
        <div className="w-full text-start">
            <h2 className="leading-[120%] text-[80px] font-[600]">99%</h2>
            <p className="font-[400] leading-[150%] text-[16px] text-secondary ">{t("result4")}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
