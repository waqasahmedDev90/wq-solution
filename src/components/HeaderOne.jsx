import { Link } from 'react-router-dom';
import whiteLogo from "@/assets/img/logo/white-logo-2.svg";
import blackLogo from "@/assets/img/logo/black-logo-3.svg";
import NavMenu from "@/components/NavMenu";
import {useAppContext} from "@/context";
import {useEffect, useState} from "react";

export default function HeaderOne() {
    const [isSticky, setIsSticky] = useState(false);
    const {toggleSearch, openSidebar} = useAppContext();

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

    return (
        <header id="header-sticky" className={`header-section header-1 header-3 ${isSticky ? "sticky" : ""}`}>
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
                            <a href="#0" className="search-trigger search-icon" onClick={toggleSearch}>
                                <i className="fa-regular fa-magnifying-glass"></i>
                            </a>
                            <div className="header__hamburger d-xl-block my-auto">
                                <div className="sidebar__toggle" onClick={openSidebar}>
                                    <div className="header-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
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