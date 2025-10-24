import { useTranslation } from "react-i18next";
import Button from "../ui/button";
import { services } from "../../data/data";

function Services() {
  const {t} = useTranslation()
  const serviceItems = services(t)
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex justify-between flex-col min-[700px]:flex-row min-[700px]:gap-[185px] mb-10">
        <div className="flex  items-start  ">
          <div className="flex items-center gap-2 max-[700px]:mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">{t("services")}</h6>
          </div>
        </div>
        <div className="max-w-[792px]  w-full">
          <h2 className="text-primary header2 mb-6">
            {t("servicesPageSectionHeader")}
          </h2>
          <p className="paragraph-lg text-secondary ">
            {t("servicesSectionText")}
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
        {serviceItems.map(item => (
          <div key={item.img} className="p-6 min-[700px]:p-10 rounded-[12px] bg-white grid grid-cols-1 min-[700px]:grid-cols-2 items-center gap-6">
            {item.isImgPositionReverse && <img
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
            />}
            <div>
              <h3 className="header3 text-primary mb-6">
                {item.title}
              </h3>
              <p className="paragraph-lg text-secondary mb-8">
                {item.text}
              </p>
              <Button url={`/services/${item.id}`}>{t("allInfo")}</Button>
            </div>
            {!item.isImgPositionReverse && <img
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] min-[700px]:h-full object-cover rounded-[12px]"
            />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
