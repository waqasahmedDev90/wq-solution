import Breadcrumb from "@/components/Breadcrumb";
import NewsStandardSection from "@/components/sections/NewsStandardSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Blog() {
    const menus = [
        {
            label: 'Blog',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Blog" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*News Standard Section Start*/}
            <NewsStandardSection />
            {/*News Standard Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}