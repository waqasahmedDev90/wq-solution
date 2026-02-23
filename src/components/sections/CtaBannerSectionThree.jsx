import { Link } from 'react-router-dom';
import ctaBgImg from "@/assets/img/cta/cta-bg.jpg";

export default function CtaBannerSectionThree() {
    return (
        <section className="cta-banner-section121 section-padding">
            <div className="container">
                <div className="cta-banner-wrapper style-2 bg-cover"
                     style={{ backgroundImage: `url(${ctaBgImg})`}}>
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h2>
                                Driving Success Through Expertise Solutions
                            </h2>
                        </div>
                        <div className="col-lg-3">

                            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to="/about"> <span className="theme-btn"> Contact Us </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}