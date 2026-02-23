import { Link } from 'react-router-dom';

export default function PricingSectionTwo() {
    return (
        <section className="pricing-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center mb-0 wow fadeInUp" data-wow-delay=".3s">
                    <h2>Our Pricing Plan</h2>
                </div>
                <div className="pricing-two__tab wow fadeInUp" data-wow-delay=".7s">
                    <nav className="d-flex justify-content-center mb-3">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="pt-1-tab" data-bs-toggle="tab"
                                    data-bs-target="#pt-1" type="button" role="tab" aria-controls="pt-1"
                                    aria-selected="true">Monthly
                            </button>
                            <button className="nav-link" id="pt-2-tab" data-bs-toggle="tab" data-bs-target="#pt-2"
                                    type="button" role="tab" aria-controls="pt-2"
                                    aria-selected="false">Yearly
                            </button>

                        </div>
                    </nav>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="pt-1" role="tabpanel" aria-labelledby="pt-1-tab">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2>$19<span>/Month</span></h2>
                                        <h3>Basic</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2><b>$</b>29<span>/Month</span></h2>
                                        <h3>Advanced</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button style-2">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2>$39<span>/Month</span></h2>
                                        <h3>Basic</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pt-2" role="tabpanel" aria-labelledby="pt-2-tab">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2>$19<span>/Month</span></h2>
                                        <h3>Basic</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2><b>$</b>29<span>/Month</span></h2>
                                        <h3>Advanced</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button style-2">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-card-items">
                                    <div className="pricing-header">
                                        <h2>$39<span>/Month</span></h2>
                                        <h3>Basic</h3>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Cyber Security Sentinel
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Software Solutions Pro
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            IT Infrastructure Innovations
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Mobile Tech Mastery
                                        </li>
                                        <li className="style-2">
                                            <i className="fa-solid fa-circle-xmark"></i>
                                            EmergingTech Enthusiasts
                                        </li>
                                    </ul>
                                    <div className="main-button">
                                        <Link to="/contact"> <span
                                            className="theme-btn"> Get Started Now </span><span className="arrow-btn"><i
                                            className="icon-arrow-right"></i></span></Link>
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