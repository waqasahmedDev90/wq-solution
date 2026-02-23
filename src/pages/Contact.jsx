import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/sections/ContactSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Contact() {
    const menus = [
        {
            label: 'Contact',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Contact" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Contact Section Start*/}
            <ContactSection />
            {/*Contact Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}