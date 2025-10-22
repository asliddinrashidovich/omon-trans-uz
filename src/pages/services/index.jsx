import FooterShowcase from "../../components/footer-showcase";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Difference from "../../components/services/difference";
import Services from "../../components/services/services";

function ServicesPage() {
  return (
    <>
      <Navbar />
      <Hero header={"Harakatdagi ishonch — bizning xizmatlarimiz"} text={"Biz har bir mijoz uchun moslashtirilgan logistika yechimlarini taqdim etamiz. Mahalliydan xalqaro tashishgacha — yuklaringizni xavfsiz, tez va muammosiz yetkazamiz."} img={"/images/services/services-bg.png"} />
      <Services />
      <Difference />
      <FooterShowcase />
    </>
  );
}

export default ServicesPage;
