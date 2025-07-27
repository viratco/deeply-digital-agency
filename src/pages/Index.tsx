import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CustomDesign from "@/components/CustomDesign";
import Members from "@/components/Members";
import MaskSection from "@/components/MaskSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <CustomDesign />
      <Portfolio />
      <MaskSection />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
