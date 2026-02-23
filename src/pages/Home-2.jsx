import HeroSectionOne from "@/components/sections/HeroSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import PricingSectionOne from "@/components/sections/PricingSectionOne";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ContactUsSectionOne from "@/components/sections/ContactUsSectionOne";
import HowWorkSectionOne from "@/components/sections/HowWorkSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import NewsSectionOne from "@/components/sections/NewsSectionOne";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function HomeTwo() {
    return (
        <>
            {/*Hero Section Start*/}
            <HeroSectionOne/>
            {/*Hero Section End*/}

            {/*Service Section Start*/}
            <ServiceSectionOne />
            {/*Service Section End*/}

            {/*About Section Start*/}
            <AboutSectionOne />
            {/*About Section End*/}

            {/*Project Section Start*/}
            <ProjectSectionOne />
            {/*Project Section End*/}

            {/*Pricing Section Start*/}
            <PricingSectionOne />
            {/*Pricing Section End*/}

            {/*Marquee Section Start*/}
            <MarqueeSection />
            {/*Marquee Section End*/}

            {/*Contact Us Section Start*/}
            <ContactUsSectionOne />
            {/*Contact Us Section End*/}

            {/*How Work Section Start*/}
            <HowWorkSectionOne />
            {/*How Work Section End*/}

            {/*Team Section Start*/}
            <TeamSectionOne />
            {/*Team Section End*/}

            {/*Testimonial Section Start*/}
            <TestimonialSectionOne />
            {/*Testimonial Section End*/}

            {/*News Section Start*/}
            <NewsSectionOne />
            {/*News Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    );
}
