import AboutSection from "../../components/about/about";
import FooterShowcase from "../../components/footer-showcase";
import Navbar from "../../components/navbar";
import TeamSection from "../../components/about/team";
import Hero from "../../components/hero";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const {t} = useTranslation()
  return (
    <>
      <Navbar />
      <Hero header={t("aboutPageHeader")} text={t("aboutPageText")} img={"/images/about/about-bg.svg"} />
      <AboutSection />
      <TeamSection />
      <FooterShowcase />
    </>
  );
}

export default AboutPage;
