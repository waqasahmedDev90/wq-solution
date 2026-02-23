import Breadcrumb from "@/components/Breadcrumb";
import TeamDetailsSection from "@/components/sections/TeamDetailsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function TeamSlug() {
    const menus = [
        {
            label: 'Team Details',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Team Details" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Team Details Section Start*/}
            <TeamDetailsSection />
            {/*Team Details Section End*/}

            {/*Personal Section Start*/}
            <PersonalSection />
            {/*Personal Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}