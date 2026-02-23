import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Project() {
    const menus = [
        {
            label: 'Our project',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Our project" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Project Details Section Start*/}
            <ProjectDetailsSection />
            {/*Project Details Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}