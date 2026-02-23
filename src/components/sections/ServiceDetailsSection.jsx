import { Link } from 'react-router-dom';
import detailsImg1 from "@/assets/img/service/details1.jpg";
import detailsImg2 from "@/assets/img/service/details2.jpg";
import icon30 from "@/assets/img/icon/30.svg";
import icon31 from "@/assets/img/icon/31.svg";
import icon32 from "@/assets/img/icon/32.svg";

export default function ServiceDetailsSection() {
    return (
        <section className="Service-details-section section-padding fix">
            <div className="container">
                <div className="sertvice-details-wrapper">
                    <div className="details-image">
                        <img src={detailsImg1} alt="img"/>
                    </div>
                    <div className="service-details-content">
                        <h2>Tech Savvy Future Ready</h2>
                        <p>
                            Technology is constantly evolving, shaping our future and transforming how we live and work.
                            It encompasses innovations in software, hardware, communication, and automation. From
                            artificial intelligence to cybersecurity, technology touches every aspect of modern life.
                            The rapid pace of technological advancements drives progress and brings new possibilities
                            Technology is constantly evolving, shaping our future and transforming how we live and work.
                        </p>
                        <h3>
                            Tech Savvy Future Ready
                        </h3>
                        <p>
                            Technology is constantly evolving, shaping our future and transforming how we live and work.
                            It encompasses innovations in software, hardware, communication, and automation. From
                            artificial intelligence to cybersecurity, technology touches every aspect of modern life
                        </p>
                        <div className="row g-4 pt-4 pb-5 align-items-center">
                            <div className="col-md-6">
                                <div className="thumb">
                                    <img src={detailsImg2} alt="img"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="list-wrapper">
                                    <ul className="list-items">
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Transforming Tomorrow Today
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Innovate with Technology
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Savvy Future Ready Today
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Unleash Your Digital Potential
                                        </li>
                                    </ul>
                                    <ul className="list-items">
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Transforming Tomorrow Today
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Innovate with Technology
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Savvy Future Ready Today
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-angles-right"></i>
                                            Unleash Your Digital Potential
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 mb-5">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="service-details-box-items">
                                    <div className="icon">
                                        <img src={icon30} alt="img"/>
                                    </div>
                                    <div className="content">
                                        <h3><Link to="/services/details">Precision Pixels</Link></h3>
                                        <p>Information Technology is a rapidly evolving field that is a encompasses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="service-details-box-items">
                                    <div className="icon">

                                        <img src={icon31} alt="img"/>
                                    </div>
                                    <div className="content">
                                        <h3><Link to="/services/details">Tech Wave Solutions</Link></h3>
                                        <p>Information Technology is a rapidly evolving field that is a encompasses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="service-details-box-items">
                                    <div className="icon">

                                        <img src={icon32} alt="img"/>
                                    </div>
                                    <div className="content">
                                        <h3><Link to="/services/details">Tech Enthusiasts</Link></h3>
                                        <p>Information Technology is a rapidly evolving field that is a encompasses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>
                            From artificial intelligence to cybersecurity
                        </h3>
                        <p>
                            Technology is constantly evolving, shaping our future and transforming how we live and work.
                            It encompasses innovations in software, hardware, communication, and automation. From
                            artificial intelligence to cybersecurity, technology touches every aspect of modern life
                        </p>
                        <div className="slider-button d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                <button className="cmn-prev cmn-border d-center">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                previous
                            </span>
                            </div>
                            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                            <span className="fw-bold white-clr previus-text text-capitalize">
                                Next
                            </span>
                                <button className="cmn-next cmn-border d-center">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}