import { useTranslation } from "react-i18next";

function BlogInfo() {
  const { t } = useTranslation();
  return (
    <div className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto pt-[100px] min-[550px]:pt-[50px]">
        <h2 className="header3 mb-8 text-primary">{t("blogTitle")}</h2>
        <div className="flex gap-2 items-center mb-8">
          <img src="/images/blog/calendar.svg" alt="calendar" />
          <p className="text-primary paragraph-lg">2023-2025</p>
        </div>
        <div className="w-full mb-8">
          <img src="/images/blog/big-card.png" alt="big-card" />
        </div>
        <p>
          {t("blogText1")}
          <br />
          <br />
          {t("blogText2")}
          <br />
          <br />
          {t("blogText3")}
          <br />
          <br />
          {t("blogText4")}
          <br />
          <br />
          {t("blogText5")}
        </p>
      </div>
    </div>
  );
}

export default BlogInfo;
