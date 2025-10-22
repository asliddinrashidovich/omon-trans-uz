import AboutBlog from "../../components/blog/about";
import Hero from "../../components/blog/hero";
import Navbar from "../../components/blog/navbar";
import ServicesSection from "../../components/blog/services";
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
