import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ShopCartSection from "@/components/sections/ShopCartSection";

export default function ShopCart() {
    const menus = [
        {
            label: 'Shop Cart',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Shop Cart" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Shop Cart Section Start*/}
            <ShopCartSection />
            {/*Shop Cart Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}