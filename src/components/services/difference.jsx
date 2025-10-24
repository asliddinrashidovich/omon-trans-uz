import { useTranslation } from "react-i18next";
import { diffirence } from "../../data/data";

function Difference() {
  const {t} = useTranslation()
  const diffirences = diffirence(t)
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col min-[1000px]:flex-row gap-6 items-start mb-10">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="header6">{t("diffirence")}</h3>
          </div>
          <h2 className="header1 text-primary">
            {t("diffirenceHeader")}
          </h2>
        </div>
        <div className="min-[1000px]:max-w-[486px] grid grid-cols-1 min-[550px]:grid-cols-2 gap-6">
          {diffirences.map(item => (
            <div key={item.title} className="rounded-[12px] bg-secondary p-4">
              <h5 className="header5 text-primary mb-2">{item.title}</h5>
              <p className="paragraph-md text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Difference;
