import { useTranslation } from "react-i18next";
import AvtoParkSection from "../../components/avtopark/avtopark";
import FooterShowcase from "../../components/footer-showcase";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";

function AvtoParkPage() {
  const {t} = useTranslation()
  return (
    <>
      <Navbar />
      <Hero header={t("avtoparkHeader")} text={t("avtoparkText")} img={"/images/avtopark/avtoPark-bg.png"} />
      <AvtoParkSection />
      <FooterShowcase />
    </>
  );
}

export default AvtoParkPage;
