import { Link } from 'react-router-dom';
import circle1Img from "@/assets/img/hero/circle1.png";
import heroSlider1 from "@/assets/img/hero/hero-slider-1.jpg";
import heroSlider2 from "@/assets/img/hero/hero-slider-2.jpg";
import heroSlider3 from "@/assets/img/hero/hero-slider-3.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {useEffect, useRef} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function HeroSectionFive() {
    const swiperRef = useRef(null);

    const onSlideChange = () => {
        const currentSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
        const animatedEls = currentSlide.querySelectorAll("[data-animation]");

        animatedEls.forEach((el) => {
            const anim = el.dataset.animation;
            const delay = el.dataset.delay;
            const duration = el.dataset.duration;

            el.classList.remove("animated", anim);
            void el.offsetWidth; // trigger reflow
            el.style.animationDelay = delay;
            el.style.animationDuration = duration;
            el.classList.add("animated", anim);

            el.addEventListener("animationend", () => {
                el.classList.remove("animated", anim);
            }, { once: true });
        });
    };

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="hero-section hero-1">
            <div className="slider-button">
                <div className="array-prev"><i className="icon-arrow-right"></i></div>
                <div className="array-next"><i className="icon-arrow-right"></i></div>
            </div>
            <div className="circle-arrow">
                <a data-fancybox href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                    <img src={circle1Img} alt="" className="keyframe5 circle1"/>
                    <i className="arrow1 fas fa-play"></i>
                </a>
            </div>
            <div className="swiper hero-slider">
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, Navigation, Pagination, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    speed={3000}
                    effect="fade"
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".dot2",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".array-next",
                        prevEl: ".array-prev",
                    }}
                    onSlideChange={onSlideChange}
                    onSwiper={(swiper) => {
                        // Trigger animation for first slide
                        setTimeout(() => onSlideChange(swiper), 0);
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-image bg-cover"
                             style={{backgroundImage: `url(${heroSlider1})`}}></div>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h6 data-animation="slideInRight" data-duration="2s" data-delay=".3s">It
                                            TechNOLOGY</h6>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Empowering the Technology is the evolving field
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".7s">
                                            Transmds is the world’s driving worldwide coordinations supplier we
                                            uphold <br/> industry and exchange the worldwide trade of merchandi
                                        </p>
                                        <div className="main-button" data-animation="slideInRight" data-duration="2s"
                                             data-delay=".9s">
                                            <Link to="/contact"> <span
                                                className="theme-btn"> Get Started </span><span className="arrow-btn"><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-image bg-cover"
                             style={{backgroundImage: `url(${heroSlider2})`}}></div>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h6 data-animation="slideInRight" data-duration="2s" data-delay=".3s">It
                                            TechNOLOGY</h6>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Empowering the Technology is the evolving field
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".7s">
                                            Transmds is the world’s driving worldwide coordinations supplier we
                                            uphold <br/> industry and exchange the worldwide trade of merchandi
                                        </p>
                                        <div className="main-button" data-animation="slideInRight" data-duration="2s"
                                             data-delay=".9s">
                                            <Link to="/contact"> <span
                                                className="theme-btn"> Get Started </span><span className="arrow-btn"><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-image bg-cover"
                             style={{backgroundImage: `url(${heroSlider3})`}}></div>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h6 data-animation="slideInRight" data-duration="2s" data-delay=".3s">It
                                            TechNOLOGY</h6>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Empowering the Technology is the evolving field
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".7s">
                                            Transmds is the world’s driving worldwide coordinations supplier we
                                            uphold <br/> industry and exchange the worldwide trade of merchandi
                                        </p>
                                        <div className="main-button" data-animation="slideInRight" data-duration="2s"
                                             data-delay=".9s">
                                            <Link to="/contact"> <span
                                                className="theme-btn"> Get Started </span><span className="arrow-btn"><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}