import { Link } from 'react-router-dom';

export default function PricingSectionThree() {
    return (
        <section className="pricing-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title style-2 text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Pricing Plan
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-items style-22">
                            <div className="pricing-header">
                                <h2>$26.9 <sub>/Monthly</sub></h2>
                                <div className="offer-text-area">
                                    <h4> Medium Plan</h4>
                                    <h6 className="offer">offer -30%</h6>
                                </div>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Single website
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    One-click WordPress installs
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free WordPress website transfer
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Unmetered bandwidth
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free SSL certificate
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free domain included
                                </li>
                            </ul>
                            <div className="main-button">
                                <Link to="/contact"> <span className="theme-btn">Get Started Now </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="pricing-items style-22 active">
                            <div className="pricing-header">
                                <h2>$36.9 <sub>/Monthly</sub></h2>
                                <div className="offer-text-area">
                                    <h4> Medium Plan</h4>
                                    <h6 className="offer">offer -30%</h6>
                                </div>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Single website
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    One-click WordPress installs
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free WordPress website transfer
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Unmetered bandwidth
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free SSL certificate
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free domain included
                                </li>
                            </ul>
                            <div className="main-button">
                                <Link to="/contact"> <span className="theme-btn">Get Started Now </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="pricing-items style-22">
                            <div className="pricing-header">
                                <h2>$46.9 <sub>/Monthly</sub></h2>
                                <div className="offer-text-area">
                                    <h4> Medium Plan</h4>
                                    <h6 className="offer">offer -30%</h6>
                                </div>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Single website
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    One-click WordPress installs
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free WordPress website transfer
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Unmetered bandwidth
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free SSL certificate
                                </li>
                                <li>
                                    <i className="fas fa-check-circle me-3"></i>
                                    Free domain included
                                </li>
                            </ul>
                            <div className="main-button">
                                <Link to="/contact"> <span className="theme-btn">Get Started Now </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}