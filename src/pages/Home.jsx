import HeroSectionThree from "@/components/sections/HeroSectionThree";
import BrandSection from "@/components/sections/BrandSection";
import MarqueeSectionThree from "@/components/sections/MarqueeSectionThree";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import TeamSectionThree from "@/components/sections/TeamSectionThree";
import CtaSectionTwo from "@/components/sections/CtaSectionTwo";
import ProjectSectionThree from "@/components/sections/ProjectSectionThree";
import FaqSectionOne from "@/components/sections/FaqSectionOne";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import NewsSectionThree from "@/components/sections/NewsSectionThree";
import AboutSectionFive from "@/components/sections/AboutSectionFive";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import ExpectationSection from "../components/sections/ExpectationSection";
import TechStackSection from "../components/sections/TechStackSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TestimonialSection from "../components/sections/TestimonialSection";
import CtaSection from "../components/sections/CtaSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/*Hero Section Start*/}
      <div className="relative z-0 bg-[#020617] min-h-screen">
        <HeroSectionThree />
      </div>

      {/* About Section - Upar charhay ga */}
      <div className="relative z-10 bg-[#020617]">
        <AboutSectionFive />
      </div>

      {/* Service Section - Iski sticky images Hero ke upar na jayen */}
      <div className="relative z-20 bg-[#020617]">
        <ServiceSectionThree />
      </div>

      {/* Portfolio Section - Sab se upar aur clear */}
      <div className="relative z-30 bg-[#020617]">
        <PortfolioSection />
      </div>
      

      
         <ProcessSection /> 
         <ExpectationSection />
         <TechStackSection />
         <WhyChooseUs />
         <TestimonialSection />
         <CtaSection />
         <ContactSection />
      
      
    </>
  );
}
