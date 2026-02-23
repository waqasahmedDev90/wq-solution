import Breadcrumb from "@/components/Breadcrumb";
import ServiceSection from "@/components/sections/ServiceSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Services() {
    const menus = [
        {
            label: 'our service',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="our service" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Service Section Start*/}
            <ServiceSection />
            {/*Service Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}