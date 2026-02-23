import { Link } from 'react-router-dom';

import blackLogo from "@/assets/img/logo/black-logo-3.svg";

export default function FooterOne() {
    return (
        <footer className="footer-section-3 section-bg">
            <div className="container">
                <div className="footer-widget-wrapper-3">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="footer-widget-single">
                                <div className="footer-head">
                                    <Link to="/" className="footer-logo">
                                        <img src={blackLogo} alt="img"/>
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Information Technology is a rapidly evolving field that a encompasses latest the
                                        study
                                    </p>
                                    <div className="footer-input">
                                        <input type="email" placeholder="Your email..."/>
                                        <button className="plane-icon" type="submit">
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
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="footer-widget-single">
                                <div className="footer-head">
                                    <h3>Contact</h3>
                                </div>
                                <ul className="footer-contact">
                                    <li>
                                        <a href="mailto:jessica.hanson@example.com">
                                            jessica.hanson@example.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:207555-0119">207555-0119</a>
                                    </li>
                                    <li>
                                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="footer-widget-single">
                                <div className="footer-head">
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
                                    Terms &amp; Condition
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