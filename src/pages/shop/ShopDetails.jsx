import Breadcrumb from "@/components/Breadcrumb";
import ShopDetailsSection from "@/components/sections/ShopDetailsSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function ShopSlug() {
    const menus = [
        {
            label: 'Shop Details',
            link: ''
        }
    ];
    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Shop Details" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Shop Details Section Start*/}
            <ShopDetailsSection />
            {/*Shop Details Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}