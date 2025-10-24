import { useTranslation } from "react-i18next";
import Button from "./ui/button";

function FooterShowcase() {
  const {t} = useTranslation()
  return (
    <div className="py-10 min-[600px]:py-20 px-5 footer-showcase h-[600px] min-[600px]:px-10 ">
      <div className="max-w-[1200px] mx-auto flex items-center h-full">
        <div className="max-w-[500px]">
          <h2 className="header2 text-white mb-6">
            {t("showcaseHeader")}
          </h2>
          <p className="paragraph-lg text-white/80 mb-8">
            {t("showcaseText")}
          </p>
          <Button url="/#contact">{t("startPartner")}</Button>
        </div>
      </div>
    </div>
  );
}

export default FooterShowcase;
