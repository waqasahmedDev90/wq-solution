import Breadcrumb from "@/components/Breadcrumb";
import TeamSectionFour from "@/components/sections/TeamSectionFour";
import ContactSectionTwo from "@/components/sections/ContactSectionTwo";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Team() {
    const menus = [
        {
            label: 'Our Team',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Our Team" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Team Section Start*/}
            <TeamSectionFour />
            {/*Team Section End*/}

            {/*Contact Section Start*/}
            <ContactSectionTwo />
            {/*Contact Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}