import AboutSectionThree2 from "@/components/sections/AboutSectionThree2";
import MarqueeSectionFour from "@/components/sections/MarqueeSectionFour";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import AboutSectionSix from "@/components/sections/AboutSectionSix";
import ProjectSectionFive from "@/components/sections/ProjectSectionFive";
import TeamSectionFive from "@/components/sections/TeamSectionFive";
import CtaVideoSectionOne from "@/components/sections/CtaVideoSectionOne";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PricingSectionThree from "@/components/sections/PricingSectionThree";
import ContactSectionFour from "@/components/sections/ContactSectionFour";
import TestimonialSectionFour from "@/components/sections/TestimonialSectionFour";
import NewsSectionFour from "@/components/sections/NewsSectionFour";

export default function HomeThree() {
    return (
        <>
            {/*--<< Hero Section Start >>--*/}
            <AboutSectionThree2 />
            {/*--<< Hero Section End >>--*/}

            {/*-- Marquee Section Start --*/}
            <MarqueeSectionFour />
            {/*-- Marquee Section Start --*/}

            {/*-- Service Section Start --*/}
            <ServiceSectionFour />
            {/*-- Service Section End --*/}

            {/*-- About Section Start --*/}
            <AboutSectionSix />
            {/*-- About Section End --*/}

            {/*-- Project Section Start --*/}
            <ProjectSectionFive />
            {/*-- Project Section End --*/}

            {/*-- Team Section Start --*/}
            <TeamSectionFive />
            {/*-- Team Section Start --*/}

            {/*-- Cta Video Section Start --*/}
            <CtaVideoSectionOne />
            {/*-- Cta Video Section End --*/}

            {/*-- Work Process Section Start --*/}
            <WorkProcessSection />
            {/*-- Work Process Section End --*/}

            {/*-- Pricing Section Start --*/}
            <PricingSectionThree />
            {/*-- Pricing Section End --*/}

            {/*-- Contact-section Start --*/}
            <ContactSectionFour />
            {/*-- Contact-section End --*/}

            {/*-- Testimonial Section Start --*/}
            <TestimonialSectionFour />
            {/*-- Testimonial Section End --*/}

            {/*-- News Section Start --*/}
            <NewsSectionFour />
            {/*-- News Section Start --*/}
        </>
    )
}