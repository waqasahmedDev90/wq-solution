import HeroSectionFive from "@/components/sections/HeroSectionFive";
import AboutSectionSeven from "@/components/sections/AboutSectionSeven";
import ServiceSection from "@/components/sections/ServiceSection";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ProjectSectionSix from "@/components/sections/ProjectSectionSix";
import PricingSectionFour from "@/components/sections/PricingSectionFour";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ContactSectionThree from "@/components/sections/ContactSectionThree";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import FaqSectionFive from "@/components/sections/FaqSectionFive";
import TeamSectionSix from "@/components/sections/TeamSectionSix";
import TestimonialSectionFive from "@/components/sections/TestimonialSectionFive";
import NewsSectionOne from "@/components/sections/NewsSectionOne";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function HomeFive() {
    return(
        <>
            {/*--<< Hero Section Start >>--*/}
            <HeroSectionFive />
            {/*--<< Hero Section End >>--*/}

            {/*-- About Section Start --*/}
            <AboutSectionSeven />
            {/*-- About Section End --*/}

            {/*-- Service Section Start --*/}
            <ServiceSection />
            {/*-- Service Section End --*/}

            {/*--About Section Start --*/}
            <AboutSectionOne />
            {/*--About Section End --*/}

            {/*-- Project Section Start --*/}
            <ProjectSectionSix />
            {/*-- Project Section End --*/}

            {/*--<< Pricing Section Start >>--*/}
            <PricingSectionFour />
            {/*--<< Pricing Section End >>--*/}

            {/*-- Marquee Section Start --*/}
            <MarqueeSection />
            {/*-- Marquee Section End --*/}

            {/*-- Marquee Section Start --*/}
            <ContactSectionThree />
            {/*-- Marquee Section End --*/}

            {/*-- Work Process Section Start --*/}
            <WorkProcessSection />
            {/*-- Work Process Section End --*/}

            {/*-- Work Process Section Start --*/}
            <FaqSectionFive />
            {/*-- Work Process Section End --*/}

            {/*--<< Team Section Start >>--*/}
            <TeamSectionSix />
            {/*--<< Team Section End >>--*/}

            {/*-- Testimonial Section Start --*/}
            <TestimonialSectionFive />
            {/*-- Testimonial Section End --*/}

            {/*-- Testimonial Section Start --*/}
            <NewsSectionOne />
            {/*-- Testimonial Section End --*/}

            {/*--  CTA Section Start --*/}
            <CtaSectionOne />
            {/*--  CTA Section End --*/}
        </>
    )
}