import AboutSection from "../../components/about/about";
import FooterShowcase from "../../components/footer-showcase";
import Navbar from "../../components/navbar";
import TeamSection from "../../components/about/team";
import Hero from "../../components/hero";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero header={"Har bir yetkazuvda tezlik va ishonch"} text={"Biz mijozlarimizga xavfsiz, tezkor va ishonchli logistika yechimlarini taklif etamiz. Tajribali jamoamiz bilan yuk tashishni soddalashtirib, sizning biznesingizga vaqt va ishonch qo‘shamiz."} img={"/images/about/about-bg.svg"} />
      <AboutSection />
      <TeamSection />
      <FooterShowcase />
    </>
  );
}

export default AboutPage;
