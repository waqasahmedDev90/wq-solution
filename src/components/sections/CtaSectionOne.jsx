import { Link } from 'react-router-dom';

export default function CtaSectionOne() {
    return (
        <section className="cta-banner-section">
            <div className="container">
                <div className="cta-banner-wrapper">
                    <div className="row g-4 align-items-end">
                        <div className="col-lg-6">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Technology is rapidly evolving to the field
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-list-items wow fadeInUp" data-wow-delay=".5s">
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-chevrons-right"></i>
                                        TechSavvy Solutions
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-chevrons-right"></i>
                                        NetworkNinja Services
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-chevrons-right"></i>
                                        TechSavvy Solutions
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-chevrons-right"></i>
                                        NetworkNinja Services
                                    </li>
                                </ul>
                            </div>
                            <div className="main-button wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/contact"> <span className="theme-btn"> Contact Us </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}