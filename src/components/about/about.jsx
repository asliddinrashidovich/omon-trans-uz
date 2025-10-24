import { useTranslation } from "react-i18next";
import { aboutItems } from "../../data/data";

function AboutSection() {
  const {t} = useTranslation()
  const aboutData = aboutItems(t)
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex flex-col min-[1100px]:flex-row gap-6 min-[1100px]:items-start mb-10">
        <div className="flex items-start flex-col min-[750px]:flex-row min-[1100px]:flex-col justify-between gap-5">
          <div className="flex items-center flex-nowrap gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="header6 text-primary text-nowrap">{t("about")}</h3>
          </div>
          <h2 className="header1 max-[1100px]:max-w-[495px]  text-primary">
            {t("aboutPageAboutHeader")}
          </h2>
        </div>
        <div className="max-w-[690px] w-full flex flex-col gap-6">
          <hr className="border-main" />
          {aboutData.map(item => (
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-primary header3 mb-4">{item.title}</h2>
                <p className="text-secondary paragraph-lg">
                  {item.text}
                </p>
              </div>
              <hr className="border-main" />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] max-[600px]:max-h-[1700px] max-[900px]:max-h-[1000px] mx-auto grid gap-6 grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 grid-rows-6 min-[600px]:grid-rows-4 min-[900px]:grid-rows-3">
        <div className="rounded-[12px] flex items-center row-span-1 max-[600px]:row-start-2 max-[900px]:row-start-1 border-main p-10 bg-white border-[1px]">
          <div>
            <p className="leading-[120%] text-[80px] font-[600] mb-1">10+</p>
            <p className="paragraph-lg text-secondary">{t("experienceInTrade")}</p>
          </div>
        </div>
        <div className="rounded-[12px] max-[600px]:col-span-1 max-[600px]:row-start-6 max-[900px]:row-start-4 max-[900px]:row-span-1 row-span-2 overflow-hidden">
          <img src="/images/about/column-1.svg" className="w-full h-full object-cover object-center" alt="column1" />
        </div>
        <div className="rounded-[12px] max-[600px]:row-start-3  max-[900px]:row-start-2 max-[600px]:col-span-1 max-[900px]:col-span-2 row-span-2 min-[900px]:row-span-3 overflow-hidden">
          <img src="/images/about/Column-2.svg" className="w-full h-full object-cover object-center" alt="column1" />
        </div>
        <div className="rounded-[12px] max-[600px]:col-span-1  max-[600px]:row-start-0 max-[900px]:row-start-1 row-span-1 min-[900px]:row-span-2 overflow-hidden">
          <img src="/images/about/column-3.svg" className="w-full h-full object-cover object-center" alt="column1" />
        </div>
        <div className="rounded-[12px] max-[600px]:col-span-1 max-[900px]:col-start-0 max-[900px]:row-start-4 max-[600px]:row-start-5 flex items-center row-span-1 border-main p-10 bg-white border-[1px]">
          <div>
            <p className="leading-[120%] text-[80px] font-[600] mb-1">10k+</p>
            <p className="paragraph-lg text-secondary">{t("numberOfItems")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
