import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function ServiceSlug() {
    const menus = [
        {
            label: 'Service Details',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Service Details" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Service Details Section Start*/}
            <ServiceDetailsSection />
            {/*Service Details Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}