import { useTranslation } from "react-i18next";

function Hero() {
  const {t} = useTranslation()
  return (
    <div className="flex px-5 min-[550px]:px-10 py-[10px] items-center hero-blog h-[100vh]">
      <div className="max-w-[1200px] pt-[150px] pb-[100px] mx-auto flex max-[1100px]:flex-col-reverse min-[1100px]:grid min-[1100px]:grid-cols-2 gap-6">
        <div>
          <h4 className="header4 text-white mb-6">
            {t("serviceInfoText")}
          </h4>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <img src="/images/Polygon.svg" alt="polygon" />
              <h3 className="text-[20px] font-[600] leading-[130%] text-white">{t("serviceInfoHero1")}</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/Polygon.svg" alt="polygon" />
              <h3 className="text-[20px] font-[600] leading-[130%] text-white">{t("serviceInfoHero2")}</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/Polygon.svg" alt="polygon" />
              <h3 className="text-[20px] font-[600] leading-[130%] text-white">{t("serviceInfoHero3")}</h3>
            </div>
          </div>
        </div>
        <h1 className=" text-[50px] min-[700px]:text-[65px] font-[700] leading-[100%] text-[#fff]  min-[1100px]:text-center">
          {t("serviceInfoHeader")}
        </h1>
      </div>
    </div>
  );
}

export default Hero;
