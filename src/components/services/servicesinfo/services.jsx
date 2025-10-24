import { useTranslation } from "react-i18next";
import Button from "../../ui/button";

function ServicesSection() {
  const {t} = useTranslation()
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col min-[700px]:flex-row justify-between mb-10 gap-6">
        <div className="flex flex-col justify-between">
          <div className="flex flex-nowrap items-center gap-2 max-[550px]:mb-5">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-nowrap">
              {t("serviceInfoOtherServices")}
            </h6>
          </div>
        </div>
        <div className="max-w-[492px] min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary header2 mb-6">
            {t("serviceInfoOtherServicesHeader")}
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex max-[550px]:flex-col items-start gap-10 min-[700px]:gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">{t("serviceInfoOtherServices1")}</h3>
          <Button url={`/services/${4}-${t("serviceInfoOtherServices1")}`} className={"text-nowrap"} type={"secondary"}>
            {t("allInfo")}
          </Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-10 min-[700px]:gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">{t("serviceInfoOtherServices2")}</h3>
          <Button url={`/services/${2}-${t("serviceInfoOtherServices2")}`} className={"text-nowrap"} type={"secondary"}>
            {t("allInfo")}
          </Button>
        </div>
        <hr className="my-5 border-main" />
        <div className="flex max-[550px]:flex-col items-start gap-10 min-[700px]:gap-5 min-[550px]:items-center w-full justify-between py-[10px]">
          <h3 className="header3 text-primary">
            {t("serviceInfoOtherServices3")}
          </h3>
          <Button url={`/services/${3}-${t("serviceInfoOtherServices3")}`} className={"text-nowrap"} type={"secondary"}>
            {t("allInfo")}
          </Button>
        </div>
        <hr className="my-5 border-main" />
      </div>
    </div>
  );
}

export default ServicesSection;
