import "./Home.css";
import Hero from "../../components/Hero/Hero.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import GrowSection from "../../components/GrowSection/GrowSection.jsx";
import QualityAssurance from "../../components/QualityAssurance/QualityAssurance.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import SustainabilityShowcase from "../../components/SustainabilityShowcase/SustainabilityShowcase.jsx";
import ReachSection from "../../components/ReachSection/ReachSection.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <AboutSection />
      <GrowSection/>
      <QualityAssurance/>
      <SustainabilityShowcase/>
      
      <CTA/>
      
      <ReachSection/>

      <Testimonials/>




    
    </div>
  );
}
