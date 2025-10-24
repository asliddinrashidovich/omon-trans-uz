import { useTranslation } from "react-i18next";
import FooterShowcase from "../../components/footer-showcase";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Difference from "../../components/services/difference";
import Services from "../../components/services/services";

function ServicesPage() {
  const {t} = useTranslation()
  return (
    <>
      <Navbar />
      <Hero header={t("servicesHeader")} text={t("servicesText")} img={"/images/services/services-bg.png"} />
      <Services />
      <Difference />
      <FooterShowcase />
    </>
  );
}

export default ServicesPage;
