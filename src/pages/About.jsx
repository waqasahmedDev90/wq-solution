import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionFour from "@/components/sections/AboutSectionFour";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import CtaBannerSectionThree from "@/components/sections/CtaBannerSectionThree";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";
import ContactSectionThree from "@/components/sections/ContactSectionThree";
import FaqSectionThree from "@/components/sections/FaqSectionThree";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function AboutPage() {
    const menus = [
        {
            label: 'About Us',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="About Us" menus={menus}/>

            <AboutSectionFour />

            <TeamSectionTwo />
            <CtaBannerSectionThree />
            <PricingSectionTwo />
            {/*Pricing Section End*/}

            {/*Contact Section Start*/}
            <ContactSectionThree />
            {/*Contact Section End*/}

            {/*Faq Section Start*/}
            <FaqSectionThree />
            {/*Faq Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}