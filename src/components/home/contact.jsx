import { useTranslation } from "react-i18next";
import Button from "../ui/button";

function ContactSection() {
  const {t} = useTranslation()
  return (
    <section id="contact" className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[950px]:grid-cols-2 gap-6">
        <div className="flex w-full rounded-[12px] max-[650px]:h-[360px] max-[950px]:h-[500px] overflow-hidden">
          <img src="/images/img.png" className="object-cover max-[950px]:object-bottom-left w-full" alt="truck" />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">{t("contact")}</h6>
          </div>
          <h2 className="header2 text-primary mb-6">
            {t("contactHeader")}
          </h2>
          <p className="paragraph-lg text-secondary mb-6">
            {t("haveQuestion")}
          </p>

          <form className=" w-full">
            <label htmlFor="name">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                {t("name")}
              </span>
              <input
                type="text"
                placeholder={t("placeholderName")}
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              />
            </label>
            <label htmlFor="phone">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                {t("phone")}
              </span>
              <input
                type="text"
                placeholder="+998-94-609-24-01"
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              />
            </label>
            <label htmlFor="message">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                {t("comment")}
              </span>
              <textarea
                type="text"
                placeholder={t("commentPlaceholder")}
                rows={6}
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              ></textarea>
            </label>
            <Button className={"max-[950px]:w-full"}>
              {t("send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
