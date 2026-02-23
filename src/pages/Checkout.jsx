import Breadcrumb from "@/components/Breadcrumb";
import CheckoutSection from "@/components/sections/CheckoutSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Checkout() {
    const menus = [
        {
            label: 'Checkout',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="Checkout" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Checkout Section Start*/}
            <CheckoutSection />
            {/*Checkout Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}