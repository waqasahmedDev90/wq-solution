import Breadcrumb from "@/components/Breadcrumb";
import Error404Section from "@/components/sections/Error404Section";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Page404() {
    const menus = [
        {
            label: '404',
            link: ''
        }
    ];

    return (
        <>
            {/*Breadcrumb Section Start*/}
            <Breadcrumb title="404" menus={menus}/>
            {/*Breadcrumb Section End*/}

            {/*Error 404 Section Start*/}
            <Error404Section />
            {/*Error 404 Section End*/}

            {/*CTA Section Start*/}
            <CtaSectionOne />
            {/*CTA Section End*/}
        </>
    )
}