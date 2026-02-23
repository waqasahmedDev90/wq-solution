import aboutImg11 from "@/assets/img/about/11.jpg";
import shapeBox2 from "@/assets/img/about/shape-box-2.png";
import lineShape2 from "@/assets/img/about/line-shape-2.png";
import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";

export default function AboutSectionFour() {
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
        <section ref={counterRef} className="about-section section-padding">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <h2 className="wow fadeInUp">Unleashing the Power Technology</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">Information Technology is a rapidly
                                        evolving field that encompasses the study and application of computing
                                        technology to solve complex problems</p>
                                </div>
                                <div className="counter-items-area">
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                        <h3><span className="count">
                                            <CountUp end={1} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>M+</h3>
                                        <p>Clients</p>
                                    </div>
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                        <h3><span className="count">
                                            <CountUp end={20} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>K+</h3>
                                        <p>Clients Review</p>
                                    </div>
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                        <h3><span className="count">
                                            <CountUp end={14} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>K+</h3>
                                        <p>Complete Project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={aboutImg11} alt="img" className="wow img-custom-anim-left"/>
                                <div className="shape-box float-bob-y">
                                    <img src={shapeBox2} alt="img"/>
                                </div>
                                <div className="line-shape">
                                    <img src={lineShape2} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}