import AvtoParkSection from "../../components/avtopark/avtopark";
import FooterShowcase from "../../components/footer-showcase";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";

function AvtoParkPage() {
  return (
    <>
      <Navbar />
      <Hero header={"Bizning avtopark – ishonchli yetkazuv garantiyasi"} text={"Zamonaviy va ishonchli avtoparkimiz yuklaringizni xavfsiz va o‘z vaqtida yetkazishni ta’minlaydi. Har bir transport vositasi muntazam texnik ko‘rikdan o‘tadi."} img={"/images/avtopark/avtoPark-bg.png"} />
      <AvtoParkSection />
      <FooterShowcase />
    </>
  );
}

export default AvtoParkPage;
