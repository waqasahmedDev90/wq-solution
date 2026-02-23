import { Link } from 'react-router-dom';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import aboutIconImg from "@/assets/img/about/about-icon.png";
import circleTextImg from "@/assets/img/about/circle-text.png";
import aboutIconImg12 from "@/assets/img/about/about-12.jpg";
import aboutIconImg11 from "@/assets/img/about/about-11.jpg";
import aboutIconImg2 from "@/assets/img/about/about-icon-2.png";
import aboutIconImg3 from "@/assets/img/about/about-icon-3.png";
import clientImg from "@/assets/img/about/client-img.png";
import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";

export default function AboutSectionSeven() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox3]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true); // Start counting when in viewport
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <section ref={counterRef} className="about-section section-padding pb-0 fix">
            <div className="container">
                <div className="about-wrapper-11">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="counter-shape float-bob-y">
                                    <div className="icon">
                                        <img src={aboutIconImg} alt="icon-img"/>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <span className="count">
                                                <CountUp end={6561} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                            </span>+
                                        </h3>
                                    </div>
                                </div>
                                <div className="video-box">
                                    <a data-fancybox3 href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                       className="video-buttton video-popup">
                                        <i className="fa-solid fa-play"></i>
                                        <img src={circleTextImg} alt="text-img"
                                             className="text-circle"/>
                                    </a>
                                </div>
                                <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s"
                                     style={{backgroundImage: `url(${aboutIconImg11})`}}>
                                    <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                        <img src={aboutIconImg12} alt="about-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We Are Increasing Business Success With Technology
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    It is a long established fact that a reader will be distracted the
                                    readable <br/> content of a page when looking at layout the point.
                                </p>
                                <div className="about-icon-items">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon">
                                            <img src={aboutIconImg2} alt="icon-img"/>
                                        </div>
                                        <div className="content">
                                            <h4>Problem Solving</h4>
                                            <p>
                                                Aliquam erat volutpat Nullam imperdiet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon">
                                            <img src={aboutIconImg3} alt="icon-img"/>
                                        </div>
                                        <div className="content">
                                            <h4>Mission & Vision</h4>
                                            <p>
                                                Aliquam erat volutpat Nullam imperdiet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="main-button  wow fadeInUp" data-wow-delay=".3s">
                                        <Link to="/contact"> <span className="theme-btn"> Explore More </span><span
                                            className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                    <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                        <img src={clientImg} alt="author-img"/>
                                        <div className="content">
                                            <h6>Ronald Richards</h6>
                                            <p>Co, Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}