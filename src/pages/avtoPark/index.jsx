import AvtoParkSection from "../../components/avtopark/avtopark";
import Hero from "../../components/avtopark/hero";
import FooterShowcase from "../../components/footer-showcase";
import Navbar from "../../components/navbar";

function AvtoParkPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvtoParkSection />
      <FooterShowcase />
    </>
  );
}

export default AvtoParkPage;
