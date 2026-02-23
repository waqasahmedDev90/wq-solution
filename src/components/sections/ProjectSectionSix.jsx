import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import imgBg from "@/assets/img/testimonial/bg.jpg";
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import projectImg8 from "@/assets/img/project/08.jpg";
import projectImg9 from "@/assets/img/project/09.jpg";
import projectImg10 from "@/assets/img/project/10.jpg";
import projectImg11 from "@/assets/img/project/11.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectSectionSix() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox5]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    const swiperConfig = {
        modules:[Autoplay, Pagination],
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot1",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 2,
            },
        }
    };

    return (
        <section className="project-section-33 section-padding pb-0 fix bg-cover"
                 style={{backgroundImage: `url(${imgBg})`}}
        >
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="text-white">
                            Our Latest Incredible <br/> Client's Projects
                        </h2>
                    </div>
                    <div className="video-box">
                        <a data-fancybox5 href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>
                <div className="project-wrapper style-2">
                    <div className="swiper project-slider-3">
                        <Swiper {...swiperConfig}
                                className="swiper-wrapper"
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg8} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link to="/project/details">Software Development</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg9} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Solutions</p>
                                            <h4>
                                                <Link to="/project/details">Analytic Solutions</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg10} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link to="/project/details">Design Solutions</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg11} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link to="/project/details">Software Development</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg10} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link to="/project/details">Design Solutions</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project-items style-2">
                                    <div className="project-image">
                                        <img src={projectImg11} alt="project-img"/>
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link to="/project/details">Software Development</Link>
                                            </h4>
                                            <Link to="/project/details" className="arrow-icon-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}