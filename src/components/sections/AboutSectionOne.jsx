import aboutShape from "@/assets/img/about/about-shape.png";
import aboutImg01 from "@/assets/img/about/01.jpg";
import aboutIcon01 from "@/assets/img/icon/about-01.svg";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";

export default function AboutSectionOne() {
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
        <section ref={counterRef} className="about-section section-padding pt-0">
            <div className="container">
                <div className="about-title wow fadeInUp" data-wow-delay=".3s">
                    <h2>Digitally Driven Diligently <br/> IT Excellence a Step</h2>
                </div>
                <div className="about-wrapper">
                    <div className="about-shape">
                        <img src={aboutShape} alt="img"/>
                    </div>
                    <div className="about-items">
                        <div className="about-img wow fadeInUp" data-wow-delay=".3s">
                            <img src={aboutImg01} alt="img"/>
                        </div>
                        <div className="about-content wow fadeInUp" data-wow-delay=".5s">
                            <p>Information Technology is a rapidly evolving field that encompasses the study and
                                application of computing technology to solve complex problems</p>
                            <Link to="/services" className="circle-box">
                                <span>
                                    <span className="icon">
                                        <i className="icon-arrow-right"></i>
                                    </span>
                                    All Services
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="counter-box wow fadeInUp" data-wow-delay=".7s">
                        <div className="icon">
                            <img src={aboutIcon01} alt="img"/>
                        </div>
                        <h2>
                            <span className="count">
                                <CountUp end={2000} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>+
                        </h2>
                        <p>Employees Working</p>
                    </div>
                </div>
            </div>
        </section>
    )
}