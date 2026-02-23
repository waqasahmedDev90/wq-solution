import Breadcrumb from "@/components/Breadcrumb";
import NewsDetailsSection from "@/components/sections/NewsDetailsSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function BlogSlug() {
    const menus = [
        {
            label: 'Blog Details',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Blog Details" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*News Details Section Start*/}
            <NewsDetailsSection />
            {/*News Details Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}