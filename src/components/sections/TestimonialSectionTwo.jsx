import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testiIcon01 from "@/assets/img/icon/testi-01.png";
import testimonialImg01 from "@/assets/img/testimonial/01.png";
import testimonialImg02 from "@/assets/img/testimonial/02.png";
import testimonialImg03 from "@/assets/img/testimonial/03.png";

export default function TestimonialSectionTwo() {
    return (
        <section className="tesimonial-section-2 fix section-padding section-bg-2">
            <div className="section-title text-center">
                <h2 className="text-white wow fadeInUp">Whats Clients Say</h2>
            </div>
            <div className="testimonial-slider-2">
                <Swiper
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    breakpoints={{
                        1199: { slidesPerView: 3 },
                        991: { slidesPerView: 2 },
                        767: { slidesPerView: 2 },
                        575: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items-2">
                            <div className="testi-top">
                                <div className="icon">
                                    <img src={testiIcon01} alt="icon"/>
                                </div>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <p>
                                Information Technology is Information a Technology is rapidly evolving field that
                                encompasses the study
                            </p>
                            <div className="client-info">
                                <img src={testimonialImg01} alt="img"/>
                                <div className="content">
                                    <h3>Jenny Wilson</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items-2">
                            <div className="testi-top">
                                <div className="icon">
                                    <img src={testiIcon01} alt="icon"/>
                                </div>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <p>
                                Information Technology is Information a Technology is rapidly evolving field that
                                encompasses the study
                            </p>
                            <div className="client-info">
                                <img src={testimonialImg02} alt="img"/>
                                <div className="content">
                                    <h3>Jenny Wilson</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items-2">
                            <div className="testi-top">
                                <div className="icon">
                                    <img src={testiIcon01} alt="icon"/>
                                </div>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <p>
                                Information Technology is Information a Technology is rapidly evolving field that
                                encompasses the study
                            </p>
                            <div className="client-info">
                                <img src={testimonialImg03} alt="img"/>
                                <div className="content">
                                    <h3>Jenny Wilson</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items-2">
                            <div className="testi-top">
                                <div className="icon">
                                    <img src={testiIcon01} alt="icon"/>
                                </div>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <p>
                                Information Technology is Information a Technology is rapidly evolving field that
                                encompasses the study
                            </p>
                            <div className="client-info">
                                <img src={testimonialImg02} alt="img"/>
                                <div className="content">
                                    <h3>Jenny Wilson</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-dot text-center">
                    <div className="dot"></div>
                </div>
            </div>

        </section>
    )
}