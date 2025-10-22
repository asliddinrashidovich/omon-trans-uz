import AboutBlog from "../../components/services/servicesinfo/about";
import Hero from "../../components/services/servicesinfo/hero";
import Navbar from "../../components/home/navbar";
import ServicesSection from "../../components/services/servicesinfo/services";
import FooterShowcase from "../../components/footer-showcase";

function ServiceOnePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutBlog />
      <ServicesSection />
      <FooterShowcase />
    </>
  );
}

export default ServiceOnePage;
