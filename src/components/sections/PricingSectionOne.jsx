import circleShape from "@/assets/img/circle-shape.png";
import { Link } from 'react-router-dom';

export default function PricingSectionOne() {
    return (
        <section className="pricing-section section-padding section-bg">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-box">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Pricing Plan</h2>
                            <p className="wow fadeInUp" data-wow-delay=".5s">Information Technology is a rapidly
                                evolving field that encompasses the study and application</p>
                            <div className="pricing-two__tab wow fadeInUp" data-wow-delay=".7s">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="pt-1-tab" data-bs-toggle="tab"
                                                data-bs-target="#pt-1" type="button" role="tab" aria-controls="pt-1"
                                                aria-selected="true">Monthly
                                        </button>
                                        <button className="nav-link" id="pt-2-tab" data-bs-toggle="tab"
                                                data-bs-target="#pt-2"
                                                type="button" role="tab" aria-controls="pt-2"
                                                aria-selected="false">Yearly
                                        </button>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="pt-1" role="tabpanel"
                                 aria-labelledby="pt-1-tab">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-box-items">
                                            <div className="circle-shape">
                                                <img src={circleShape} alt="img"/>
                                            </div>
                                            <div className="pricing-header">
                                                <h3>Basic</h3>
                                                <h2>$19<sub>/Month</sub></h2>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    Cyber Security Sentinel
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    Software Solutions Pro
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    IT Infrastructure Innovations
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                                <li>
                                                    Mobile Tech Mastery
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                            </ul>
                                            <div className="main-button">
                                                <Link to="/contact"> <span
                                                    className="theme-btn"> Get Started Now </span><span
                                                    className="arrow-btn"><i
                                                    className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-box-items">
                                            <div className="circle-shape">
                                                <img src={circleShape} alt="img"/>
                                            </div>
                                            <div className="pricing-header">
                                                <h3>Advanced</h3>
                                                <h2>$29<sub>/Month</sub></h2>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    Cyber Security Sentinel
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    Software Solutions Pro
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    IT Infrastructure Innovations
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                                <li>
                                                    Mobile Tech Mastery
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                            </ul>
                                            <div className="main-button">
                                                <Link to="/contact"> <span
                                                    className="theme-btn"> Get Started Now </span><span
                                                    className="arrow-btn"><i
                                                    className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pt-2" role="tabpanel" aria-labelledby="pt-2-tab">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-box-items">
                                            <div className="circle-shape">
                                                <img src={circleShape} alt="img"/>
                                            </div>
                                            <div className="pricing-header">
                                                <h3>Basic</h3>
                                                <h2>$19<sub>/Month</sub></h2>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    Cyber Security Sentinel
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    Software Solutions Pro
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    IT Infrastructure Innovations
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                                <li>
                                                    Mobile Tech Mastery
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                            </ul>
                                            <div className="main-button">
                                                <Link to="/contact"> <span
                                                    className="theme-btn"> Get Started Now </span><span
                                                    className="arrow-btn"><i
                                                    className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-box-items">
                                            <div className="circle-shape">
                                                <img src={circleShape} alt="img"/>
                                            </div>
                                            <div className="pricing-header">
                                                <h3>Advanced</h3>
                                                <h2>$29<sub>/Month</sub></h2>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    Cyber Security Sentinel
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    Software Solutions Pro
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </li>
                                                <li>
                                                    IT Infrastructure Innovations
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                                <li>
                                                    Mobile Tech Mastery
                                                    <i className="fa-solid fa-circle-check color-2"></i>
                                                </li>
                                            </ul>
                                            <div className="main-button">
                                                <Link to="/contact"> <span
                                                    className="theme-btn"> Get Started Now </span><span
                                                    className="arrow-btn"><i
                                                    className="icon-arrow-right"></i></span></Link>
                                            </div>
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