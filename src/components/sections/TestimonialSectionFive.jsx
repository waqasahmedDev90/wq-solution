import quoteIcon2 from "@/assets/img/testimonial/quote-icon-2.png";
import testimonial1 from "@/assets/img/testimonial/01.png";
import testimonial2 from "@/assets/img/testimonial/02.png";
import testimonial3 from "@/assets/img/testimonial/03.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSectionFive() {
    const swiperConfig = {
        modules: [Autoplay, Pagination],
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
        <section className="testimonial-section-3 section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Clients’ Experiences?
                    </h2>
                </div>
                <div className="swiper testimonial-slider-2">
                    <Swiper
                        {...swiperConfig}
                        className="swiper-wrapper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src={testimonial1} alt="img"/>
                                    </div>
                                    <div className="client-content">
                                        <h3>
                                            Cody Fisher
                                        </h3>
                                        <span>Senior Lawyer</span>
                                    </div>
                                </div>
                                <p>
                                    They kept me informed, were always
                                    available to answer questions
                                    and worked tirelessly.
                                </p>
                                <div className="icon">
                                    <img src={quoteIcon2} alt="img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src={testimonial2} alt="img"/>
                                    </div>
                                    <div className="client-content">
                                        <h3>
                                            Jenny Wilson
                                        </h3>
                                        <span>Senior Lawyer</span>
                                    </div>
                                </div>
                                <p>
                                    They kept me informed, were always
                                    available to answer questions
                                    and worked tirelessly.
                                </p>
                                <div className="icon">
                                    <img src={quoteIcon2} alt="img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src={testimonial3} alt="img"/>
                                    </div>
                                    <div className="client-content">
                                        <h3>
                                            Esther Howard
                                        </h3>
                                        <span>Senior Lawyer</span>
                                    </div>
                                </div>
                                <p>
                                    They kept me informed, were always
                                    available to answer questions
                                    and worked tirelessly.
                                </p>
                                <div className="icon">
                                    <img src={quoteIcon2} alt="img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src={testimonial3} alt="img"/>
                                    </div>
                                    <div className="client-content">
                                        <h3>
                                            Esther Howard
                                        </h3>
                                        <span>Senior Lawyer</span>
                                    </div>
                                </div>
                                <p>
                                    They kept me informed, were always
                                    available to answer questions
                                    and worked tirelessly.
                                </p>
                                <div className="icon">
                                    <img src={quoteIcon2} alt="img"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-dot  text-center">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}