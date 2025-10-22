import AboutSection from "../../components/about/about";
import FooterShowcase from "../../components/footer-showcase";
import Hero from "../../components/about/hero";
import Navbar from "../../components/navbar";
import TeamSection from "../../components/about/team";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <TeamSection />
      <FooterShowcase />
    </>
  );
}

export default AboutPage;
