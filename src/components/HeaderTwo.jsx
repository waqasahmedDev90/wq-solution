import { Link } from 'react-router-dom';
import blackLogo from "@/assets/img/logo/black-logo.svg";
import {useEffect, useState} from "react";
import NavMenu from "@/components/NavMenu";
import {useAppContext} from "@/context";
import whiteLogo from "@/assets/img/logo/white-logo.svg";

export default function HeaderTwo() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const {openSidebar} = useAppContext();

    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul>
                            <li>
                                <i className="far fa-envelope"></i>
                                <a href="mailto:info@example.com" className="link">info@example.com</a>
                            </li>
                            <li>
                                <i className="fal fa-map-marker-alt"></i>
                                Main Street, Melbourne, Australia
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className={`header-1 ${isSticky ? "sticky" : ""}`}>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo">
                                <Link to="/" className="header-logo">
                                    <img src={whiteLogo} alt="logo-img"/>
                                </Link>
                                <Link to="/" className="header-logo-2">
                                    <img src={blackLogo} alt="logo-img"/>
                                </Link>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="main-button">
                                    <Link to="/contact"> <span className="theme-btn">Contact Us </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle" onClick={openSidebar}>
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}