import FooterShowcase from "../../components/footer-showcase";
import Navbar from "../../components/navbar";
import Difference from "../../components/services/difference";
import Hero from "../../components/services/hero";
import Services from "../../components/services/services";

function ServicesPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Difference />
      <FooterShowcase />
    </>
  );
}

export default ServicesPage;
