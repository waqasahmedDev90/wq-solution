import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimonialImg1 from "@/assets/img/testimonial/01.png";
import testimonialImg2 from "@/assets/img/testimonial/02.png";
import testimonialImg3 from "@/assets/img/testimonial/03.png";
import testimonialImg4 from "@/assets/img/testimonial/04.png";

export default function TestimonialSectionFour() {
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
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };

    return (
        <section className="tesimonial-section-2 fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp">Whats Clients Say</h2>
                </div>
                <div className="swiper testimonial-slider-22">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        {...swiperConfig}
                        className="swiper-wrapper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items121">
                                <div className="testimonial-items-top">
                                    <div className="icon">
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p>
                                        I was very impresed by the remons service lorem ipsum is simply free text used
                                        by copy typing refreshing. Neque porro est qui dolorem ipsum quia.
                                    </p>
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="client-info-items d-flex align-items-center gap-3">
                                    <div className="client-img bg-cover"
                                         style={{backgroundImage: `url(${testimonialImg1})`}}></div>
                                    <div className="content">
                                        <h5>
                                            Jessica Brown
                                        </h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items121">
                                <div className="testimonial-items-top">
                                    <div className="icon">
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p>
                                        I was very impresed by the remons service lorem ipsum is simply free text used
                                        by copy typing refreshing. Neque porro est qui dolorem ipsum quia.
                                    </p>
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="client-info-items d-flex align-items-center gap-3">
                                    <div className="client-img bg-cover"
                                         style={{backgroundImage: `url(${testimonialImg2})`}}></div>
                                    <div className="content">
                                        <h5>
                                            Jessica Miller
                                        </h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items121">
                                <div className="testimonial-items-top">
                                    <div className="icon">
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p>
                                        I was very impresed by the remons service lorem ipsum is simply free text used
                                        by copy typing refreshing. Neque porro est qui dolorem ipsum quia.
                                    </p>
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="client-info-items d-flex align-items-center gap-3">
                                    <div className="client-img bg-cover"
                                         style={{backgroundImage: `url(${testimonialImg3})`}}></div>
                                    <div className="content">
                                        <h5>
                                            Devid Calson
                                        </h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items121">
                                <div className="testimonial-items-top">
                                    <div className="icon">
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p>
                                        I was very impresed by the remons service lorem ipsum is simply free text used
                                        by copy typing refreshing. Neque porro est qui dolorem ipsum quia.
                                    </p>
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="client-info-items d-flex align-items-center gap-3">
                                    <div className="client-img bg-cover"
                                         style={{backgroundImage: `url(${testimonialImg4})`}}></div>
                                    <div className="content">
                                        <h5>
                                            Jessica Brown
                                        </h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-dot text-center">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}