import { useTranslation } from "react-i18next"

function TeamSection() {
  const {t} = useTranslation()
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col min-[700px]:flex-row justify-between mb-10 gap-[10px]">
        <div className="flex flex-col  justify-between">
          <div className="flex items-center gap-2  max-[550px]:mb-5">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h3 className="header6 text-primary">{t("team")}</h3>
          </div>
        </div>
        <div className="max-w-[495px] min-[1100px]:max-w-[792px] w-full">
          <h2 className="text-primary header2  ">
            {t("teamHeader")}
          </h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid-cols-1 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4 grid  gap-6">
        <div className="rounded-[12px] bg-secondary">
          <div className="max-h-[365px] min-[600px]:max-h-[300px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
            <img src="/images/about/person-1.svg" className="w-full h-full object-center object-cover" alt="person-1" />
          </div>
          <div className="p-4">
            <h5 className="header5 mb-2 text-primary">Marie Louise</h5>
            <h5 className="paragraph-lg mb-2 text-secondary">Buxgalter</h5>
          </div>
        </div>
        <div className="rounded-[12px] bg-secondary">
          <div className="max-h-[365px] min-[600px]:max-h-[300px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
            <img src="/images/about/person-2.svg" className="w-full h-full object-center object-cover" alt="person-2" />
          </div>
          <div className="p-4">
            <h5 className="header5 mb-2 text-primary">Miguel Ángel</h5>
            <h5 className="paragraph-lg mb-2 text-secondary">Direktor</h5>
          </div>
        </div>
        <div className="rounded-[12px] bg-secondary">
          <div className="max-h-[365px] min-[600px]:max-h-[300px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
            <img src="/images/about/person-3.svg" className="w-full h-full object-center object-cover" alt="person-3" />
          </div>
          <div className="p-4">
            <h5 className="header5 mb-2 text-primary">Francesco Paolo</h5>
            <h5 className="paragraph-lg mb-2 text-secondary">Dispetcher</h5>
          </div>
        </div>
        <div className="rounded-[12px] bg-secondary">
          <div className="max-h-[365px] min-[600px]:max-h-[300px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
            <img src="/images/about/person-4.svg" className="w-full h-full object-center object-cover" alt="person-4" />
          </div>
          <div className="p-4">
            <h5 className="header5 mb-2 text-primary">Sven Erik</h5>
            <h5 className="paragraph-lg mb-2 text-secondary">Kiberxavfsizlik bo'yicha tahlilchi</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
