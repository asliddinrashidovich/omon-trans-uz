import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Footer() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 max-[900px]:grid-cols-1 gap-6  mb-8 min-[550px]:mb-10">
        <div className="max-w-[624px] grid grid-cols-1 min-[500px]:grid-cols-2 gap-6">
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              {t("services")}
            </h5>
            <ul className="flex flex-col gap-2">
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("footerService1")}
              </li>
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("footerService2")}
              </li>
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("footerService3")}
              </li>
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("footerService4")}
              </li>
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("footerService5")}
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              {t("pages")}
            </h5>
            <ul className="flex flex-col gap-2">
              <li onClick={() => navigate("/")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("home")}
              </li>
              <li onClick={() => navigate("/about")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("about")}
              </li>
              <li onClick={() => navigate("/services")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("services")}
              </li>
              <li onClick={() => navigate("/blog")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("blog")}
              </li>
              <li onClick={() => navigate("/avtopark")} className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                {t("avtopark")}
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              {t("contact")}
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                <a href="tel:+998996962112">
                  +998 (99) 696-21-12
                </a>
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                omontrans@gmail.com
              </li>
              <li className="text-[#1a1a1a] cursor-pointer paragraph-lg hover:text-[#3E8EF4] transition-all duration-200">
                Toshkent, O’zbekiston
              </li>
            </ul>
          </div>
          <div className="text-start flex-col">
            <h5 className="text-secondary paragraph-md mb-4">
              {t("socialMedias")}
            </h5>
            <div className="flex gap-2">
              <a href="https://t.me/omon_212" target="_blank" className="p-[2px] cursor-pointer">
                <img src="/images/instagram.svg" alt="instagram" />
              </a>
              <a href="https://t.me/omon_212" target="_blank" className="p-[2px] cursor-pointer">
                <img src="/images/telegram.svg" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-[900px]:row-start-1">
          <a href="/" className="flex gap-[10px] items-center mb-6">
            <img src="/images/logo-mini.svg" alt="logo" />
            <p className="font-[700] text-primary text-[18px] leading-[120%]">
              OMON TRANS
            </p>
          </a>
          <h2 className="text-primary header2">
            {t("omonTrans")}
          </h2>
        </div>
      </div>
      <hr className="border-main max-w-[1200px] mx-auto mb-8 min-[550px]:mb-10" />
      <div className="max-w-[1200px] mx-auto flex min-[600px]:flex-row flex-col justify-between gap-4 min-[550px]:gap-6">
        <p className="paragraph-md text-secondary">
          {t("copyRight")}
        </p>
        <p className="paragraph-md text-secondary">
          {t("createdBy")}
        </p>
      </div>
    </div>
  );
}

export default Footer;
