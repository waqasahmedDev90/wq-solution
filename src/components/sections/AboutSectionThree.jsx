import aboutImg1 from "@/assets/img/about/about3-01.jpg";
import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";

export default function AboutSectionThree() {
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
        <section ref={counterRef} className="about-section-3 section-padding">
            <div className="container">
                <div className="about-wrapper-3">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-items-3">
                                <div className="about-img">
                                    <img src={aboutImg1} alt="img"
                                         className="wow img-custom-anim-left"/>
                                    <div className="counter-box float-bob-x">
                                        <h2>
                                            <span className="count">
                                                <CountUp end={10} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                            </span>K+
                                        </h2>
                                        <p>Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title style-2 mb-0">
                                    <h6 className="wow fadeInUp">About Us</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        IT Excellence Every of Step of the Way
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology to solve complex problems
                                </p>
                                <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon">
                                        <i className="icon-11"></i>
                                    </div>
                                    <div className="content">
                                        <h5>IT Infrastructure Innovations</h5>
                                        <span>
                                            Information Technology is a rapidly evolving field that encompasses the study and application
                                        </span>
                                    </div>
                                </div>
                                <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon">
                                        <i className="icon-12"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Mobile Tech Mastery</h5>
                                        <span>
                                            Information Technology is a rapidly evolving field that encompasses the study and application
                                        </span>
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