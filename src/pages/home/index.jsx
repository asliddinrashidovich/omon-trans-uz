import AboutSection from "../../components/home/about";
import AvtoParkSection from "../../components/home/avtopark";
import ContactSection from "../../components/home/contact";
import Hero from "../../components/home/hero";
import Navbar from "../../components/home/navbar";
import PointsSection from "../../components/home/points";
import QuestionsSection from "../../components/home/questions";
import ServicesSection from "../../components/home/services";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <AvtoParkSection />
      <QuestionsSection />
      <PointsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
