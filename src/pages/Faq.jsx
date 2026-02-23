import Breadcrumb from "@/components/Breadcrumb";
import FaqSectionFour from "@/components/sections/FaqSectionFour";
import ContactSectionTwo from "@/components/sections/ContactSectionTwo";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Faq() {
    const menus = [
        {
            label: 'FAQ',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="FAQ" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*FAQ Section Start*/}
            <FaqSectionFour />
            {/*FAQ Section End*/}

            {/*Contact Section Start*/}
            <ContactSectionTwo />
            {/*Contact Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}