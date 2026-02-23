import { Link } from 'react-router-dom';
import blackLogo from "@/assets/img/logo/black-logo.svg";
import footerColor from "@/assets/img/footer-color.png";
import footerColor2 from "@/assets/img/footer-color-2.png";

export default function FooterTwo() {
    return (
        <footer className="footer-section section-bg">
            <div className="color-shape">
                <img src={footerColor} alt="img"/>
            </div>
            <div className="color-shape-2">
                <img src={footerColor2} alt="img"/>
            </div>
            <div className="container">
                <div className="footer-logo-area">
                    <Link to="/" className="footer-logo wow fadeInUp" data-wow-delay=".3s">
                        <img src={blackLogo} alt="img"/>
                    </Link>
                    <div className="social-icon d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-widget-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="footer-contact">
                                        <li>
                                            Email
                                            <span>
                                                <a href="mailto:info@example.com">info@example.com</a>
                                            </span>
                                        </li>
                                        <li>
                                            Phone
                                            <span>
                                                <a href="tel:+17189044450">+1718-904-4450</a>
                                            </span>
                                        </li>
                                        <li>
                                            Location
                                            <span>
                                                2118 Thornridge Cir. Syracuse
                                            </span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Service</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link to="/services/details">
                                            Tech Savvy Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/details">
                                            Data Driven Dynamics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/details">
                                            Network Ninja Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/details">
                                            Cloud Craft Creations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/details">
                                            Cyber Security Sentinel
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Information Technology is a rapidly evolving field that a encompasses latest the
                                        study</p>
                                    <div className="footer-input">
                                        <input type="email" placeholder="Your email..."/>
                                        <button className="newsletter-button" type="submit">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2025 by <Link to="/">TechEdge</Link>
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <Link to="/contact">
                                    Terms & Condition
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}