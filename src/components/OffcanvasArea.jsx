import { Link } from 'react-router-dom';
import blackLogo from "@/assets/img/logo/black-logo.svg";
import {useAppContext} from "@/context";
import MobileMenu from "@/components/MobileMenu";

export default function OffcanvasArea() {
    const {isInfoOpen, isOverlayOpen, closeSidebar} = useAppContext();

    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/">
                                        <img src={blackLogo} alt="logo-img"/>
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={closeSidebar}>
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-xl-block">
                                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat,
                                a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>
                            <div className="mobile-menu fix mb-3 mean-container">
                                <div className="mean-bar">
                                    <nav className="mean-nav">
                                        <MobileMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com"><span
                                                className="mailto:info@example.com">info@example.com</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">

                                </div>
                                <div className="main-button">
                                    <Link to="/contact"> <span className="theme-btn">Contact Us </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOverlayOpen && (
                <div className="offcanvas__overlay overlay-open" onClick={closeSidebar}></div>
            )}
        </>
    )
}