import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import brandImg07 from "@/assets/img/brand/07.png";
import brandImg08 from "@/assets/img/brand/08.png";
import brandImg09 from "@/assets/img/brand/09.png";
import brandImg10 from "@/assets/img/brand/10.png";
import brandImg11 from "@/assets/img/brand/11.png";

export default function BrandSection() {
    const swiperConfig = {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };

    return (
        <div className="brand-5">
            <div className="container">
                <div className="marquee-wrap brand-slider-2 section-padding pb-0">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        {...swiperConfig}
                        className="swiper-wrapperx marquee"
                    >
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg07} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg08} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg09} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg10} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg11} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg07} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg08} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg09} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg10} alt="img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="marquee-item">
                            <div className="brand-img text-center">
                                <img src={brandImg11} alt="img"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}