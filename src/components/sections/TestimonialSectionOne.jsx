import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";
import logo from "@/assets/img/testimonial/logo.svg";
import icon29 from "@/assets/img/icon/29.svg";
import testimonial5 from "@/assets/img/testimonial/05.png";
import testimonial6 from "@/assets/img/testimonial/06.jpg";
import testimonial7 from "@/assets/img/testimonial/07.png";

export default function TestimonialSectionOne() {
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
        <section ref={counterRef} className="testimonial-section section-padding fix">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-4">
                            <div className="testimonial-logo wow fadeInUp" data-wow-delay=".3s">
                                <div className="logo-image">
                                    <img src={logo} alt="img"/>
                                </div>
                            </div>
                            <div className="testimonial-box wow fadeInUp" data-wow-delay=".5s">
                                <div className="testimonial-content">
                                    <div className="icon">
                                        <img src={icon29} alt="img"/>
                                    </div>
                                    <h3>Tomorrow Just Informs</h3>
                                </div>
                                <p>
                                    Information Technology is a evolving field that encompasses the study application of
                                    computing technology
                                </p>
                                <div className="fly-image">
                                    <img src={testimonial5} alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="testimonial-items">
                                <div className="testimonial-image wow fadeInUp" data-wow-delay=".3s">
                                    <img src={testimonial6} alt="img"/>
                                </div>
                                <div className="testimonial-card wow fadeInUp" data-wow-delay=".5s">
                                    <div className="client-info-item">
                                        <div className="content">
                                            <h3>Jenny Wilson</h3>
                                            <span>Designer</span>
                                        </div>
                                        <div className="star style-2">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <p>
                                        Information Technology is rapidly evolving field that encompasses the study and
                                        application
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122"
                                         viewBox="0 0 122 122" fill="none">
                                        <g clipPath="url(#clip0_8721_831)">
                                            <path opacity="0.2"
                                                  d="M95.8572 53.139L121 53.139L121 102.996L70.7143 102.996L70.7143 52.3768L87.7588 18.5678L111.662 18.5677L94.9642 51.6888L94.2331 53.139L95.8572 53.139ZM26.1428 53.139L51.2857 53.139L51.2857 102.996L1.00002 102.996L1.00001 52.3768L18.0444 18.5678L41.9475 18.5678L25.2499 51.6888L24.5188 53.139L26.1428 53.139Z"
                                                  stroke="#05091D" strokeWidth="2"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8721_831">
                                                <rect width="122" height="121" fill="white"
                                                      transform="translate(122 121.285) rotate(180)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="testimonial-box-wrapper wow fadeInUp" data-wow-delay=".7s">
                                <div className="right-image">
                                    <img src={testimonial7} alt="img"/>
                                </div>
                                <div className="testimonial-content">
                                    <h3>Software Solutions Pro</h3>
                                    <p>
                                        Information Technology is a evolving field that encompasses the <br/> study
                                        application of computing technology
                                    </p>
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-count">
                                            <h2>
                                                <span className="count">
                                                    <CountUp end={465} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                                </span>
                                            </h2>
                                            <p>Team member</p>
                                        </div>
                                        <div className="testimonial-count">
                                            <h2>
                                                <span className="count">
                                                    <CountUp end={65} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                                </span>
                                            </h2>
                                            <p>Winning award</p>
                                        </div>
                                        <div className="testimonial-count">
                                            <h2>
                                                <span className="count">
                                                    <CountUp end={20} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                                </span>+</h2>
                                            <p>Complete project</p>
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