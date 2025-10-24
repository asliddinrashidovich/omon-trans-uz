import { useTranslation } from "react-i18next"
import Button from "../../ui/button"

function AboutBlog() {
  const {t} = useTranslation()
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto flex justify-between  max-[1100px]:flex-col flex-row items-start">
        <div>
            <h2 className="min-[1100px]:max-w-[676px] header2 text-primary mb-6">{t("serviceInfoSectionHeader")}</h2>
            <p className=" min-[1100px]:max-w-[676px] paragraph-lg text-secondary mb-10">{t("serviceInfoSectionText")}</p>
            <h5 className="py-[11px] px-5 border-l-[2px] border-main header5 text-primary mb-10">{t("serviceInfoSectionText2")}</h5>
            <h3 className="header3 text-primary mb-6">{t("serviceInfoSectionHeader2")}</h3>
            <ul className="mb-10">
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader2Item1")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader2Item2")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader2Item3")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader2Item4")}</span></li>
            </ul>
            <h3 className="header3 text-primary mb-6">{t("serviceInfoSectionHeader3")}</h3>
            <ul className="mb-10">
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader3Item1")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader3Item2")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader3Item3")}</span></li>
                <li className="mb-3 paragraph-lg text-secondary flex items-start gap-1"> <span className="px-2">-</span> <span>{t("serviceInfoSectionHeader3Item4")}</span></li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-[12px] max-w-[408px]  max-[1100px]:flex  max-[1100px]:flex-col items-center  max-[1100px]:mx-auto w-full">
            <h3 className="header3 text-primary mb-7">{t("serviceInfoQuestionHeader")}</h3>
            <div className="flex items-center gap-3 mb-6">
                <img src="/images/blog/loc.svg" alt="location" />
                <p className="paragraph-lg text-primary">Toshkent, O’zbekiston</p>
            </div>
            <div className="flex items-center gap-3 mb-6">
                <img src="/images/blog/mail.svg" alt="mail" />
                <p className="paragraph-lg text-primary">omontrans@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mb-7">
                <img src="/images/blog/phone.svg" alt="phone" />
                <a href="tel:+998996962112" className="paragraph-lg text-primary">+998 (90) 852-30-79</a>
            </div>
            <a href="tel:+998996962112">
              <Button>{t("serviceInfoQuestionTitle")}</Button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default AboutBlog
