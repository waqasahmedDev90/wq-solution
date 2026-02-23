import ProductItem from './ProductItem';

import productImg1 from "@/assets/img/product/01.jpg";
import productImg2 from "@/assets/img/product/02.jpg";
import productImg3 from "@/assets/img/product/03.jpg";
import productImg4 from "@/assets/img/product/04.jpg";
import productImg5 from "@/assets/img/product/05.jpg";
import productImg6 from "@/assets/img/product/06.jpg";
import productImg7 from "@/assets/img/product/07.jpg";
import productImg8 from "@/assets/img/product/08.jpg";
import productImg9 from "@/assets/img/product/09.jpg";
import productImg10 from "@/assets/img/product/10.jpg";
import productImg11 from "@/assets/img/product/11.jpg";
import productImg12 from "@/assets/img/product/12.jpg";
import productImg13 from "@/assets/img/product/13.jpg";


export default function ProductList() {
    const products = [
        {
            image: productImg1,
            name: "Calendar printing design",
            price: "112.00",
            delay: ".2s"
        },
        {
            image: productImg2,
            name: "Notebook design",
            price: "89.00",
            delay: ".4s"
        },
        {
            image: productImg3,
            name: "Sticker printing",
            price: "45.00",
            delay: ".6s"
        },
        {
            image: productImg4,
            name: "Custom T-shirt design",
            price: "75.00",
            delay: ".2s"
        },
        {
            image: productImg5,
            name: "Poster printing",
            price: "60.00",
            delay: ".4s"
        },
        {
            image: productImg6,
            name: "Business card design",
            price: "35.00",
            delay: ".6s"
        },
        {
            image: productImg7,
            name: "Brochure design",
            price: "120.00",
            delay: ".2s"
        },
        {
            image: productImg8,
            name: "Flyer printing",
            price: "50.00",
            delay: ".4s"
        },
        {
            image: productImg9,
            name: "Custom mug design",
            price: "25.00",
            delay: ".6s"
        },
        {
            image: productImg10,
            name: "Keychain printing",
            price: "15.00",
            delay: ".2s"
        },
        {
            image: productImg11,
            name: "Custom pen design",
            price: "10.00",
            delay: ".4s"
        },
        {
            image: productImg12,
            name: "Wall art printing",
            price: "200.00",
            delay: ".6s"
        },
        {
            image: productImg13,
            name: "Custom tote bag",
            price: "40.00",
            delay: ".2s"
        },
        {
            image: productImg3,
            name: "Custom hoodie design",
            price: "90.00",
            delay: ".4s"
        },
        {
            image: productImg2,
            name: "Custom cap design",
            price: "30.00",
            delay: ".6s"
        },
        {
            image: productImg1,
            name: "Custom pillow design",
            price: "55.00",
            delay: ".2s"
        },
    ];

    return (
        <div className="row">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
};
