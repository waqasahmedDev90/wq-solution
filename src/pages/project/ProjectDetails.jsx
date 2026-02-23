import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSectionTwo from "@/components/sections/ProjectDetailsSectionTwo";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function ProjectSlug() {
    const menus = [
        {
            label: 'Project Details',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Project Details" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Project Details Section Start*/}
            <ProjectDetailsSectionTwo />
            {/*Project Details Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}