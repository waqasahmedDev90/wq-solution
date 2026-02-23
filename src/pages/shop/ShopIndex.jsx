import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ShopPageSection from "@/components/sections/ShopPageSection";

export default function Shop() {
    const menus = [
        {
            label: 'Shop',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Shop" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Shop Page Section Start*/}
            <ShopPageSection />
            {/*Shop Page Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}