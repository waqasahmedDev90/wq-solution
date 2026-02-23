import { Link } from 'react-router-dom';
import blackLogo from "@/assets/img/logo/black-logo-2.svg";

export default function FooterThree() {
    return (
        <footer className="footer-section-22 section-bg">
            <div className="container">
                <div className="footer-widget-wrapper-22">
                    <div className="row justify-content-between">
                        <div className="col-xl-4">
                            <div className="footer-widget-items-2 wow fadeInUp" data-wow-delay=".3s">
                                <div className="widget-head">
                                    <Link to="/" className="footer-logo-2">
                                        <img src={blackLogo} alt="img"/>
                                    </Link>
                                </div>
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
                        <div className="col-lg-7">
                            <div className="footer-widget-items-2 wow fadeInUp" data-wow-delay=".5s">
                                <div className="widget-head">
                                    <h3>Lets Work Toghter</h3>
                                </div>
                                <div className="footer-list-area">
                                    <div className="contact-list-2">
                                        <h4>Location</h4>
                                        <ul>
                                            <li>
                                                2118 Thornridge Cir. Syracuse, <br/> Connecticut 35624
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-list-2">
                                        <h4>Contact</h4>
                                        <ul>
                                            <li>
                                                <a href="mailto:info@example.com">info@example.com</a>
                                            </li>
                                            <li>
                                                <a href="tel:+20866660112">+208-6666-0112</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2025 by TechEdge
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