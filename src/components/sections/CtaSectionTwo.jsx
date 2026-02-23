import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect, useRef, useState} from "react";

import ctaBgImg from "@/assets/img/cta/01.jpg";
import CountUp from "react-countup";

export default function CtaSectionTwo() {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        Fancybox.bind("[data-fancybox-cta]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

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
        <section ref={counterRef} className=" cta-counter-section section-padding section-bg-2">
            <div className="container">
                <div className="cta-counter-wrapper-3">
                    <h2 className="title wow img-custom-anim-left">Information Technology is a rapidly evolving field
                        that encompasses <span>the study and application of computing</span></h2>
                    <div className="counter-box-items">
                        <div className="counter-box wow fadeInUp" data-wow-delay=".2s">
                            <h2>
                                <span className="count">
                                    <CountUp end={600} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>+
                            </h2>
                            <p>Team member</p>
                        </div>
                        <div className="counter-box wow fadeInUp" data-wow-delay=".4s">
                            <h2>
                                <span className="count">
                                <CountUp end={200} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>+
                            </h2>
                            <p>Work Complete</p>
                        </div>
                        <div className="counter-box wow fadeInUp" data-wow-delay=".6s">
                            <h2>
                                <span className="count">
                                    <CountUp end={40} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>+
                            </h2>
                            <p>Winning Award</p>
                        </div>
                        <div className="counter-box wow fadeInUp" data-wow-delay=".8s">
                            <h2>
                                <span className="count">
                                    <CountUp end={100} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </span>+
                            </h2>
                            <p>Client Review</p>
                        </div>
                    </div>
                    <div className="cta-video bg-cover wow fadeInUp img-custom-anim-left"
                         style={{ backgroundImage: `url(${ctaBgImg})`}}>
                        <a data-fancybox-cta data-src="https://www.youtube.com/watch?v=Mt6UwMKnaTw" data-type="iframe" className="video-btn ripple video-popup">
                            <i className="fa-duotone fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}