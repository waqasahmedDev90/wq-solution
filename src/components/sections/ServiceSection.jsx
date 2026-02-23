import { Link } from 'react-router-dom';
import serviceImg from "@/assets/img/service/service-img.jpg";

export default function ServiceSection() {
    return (
        <section className="service-section section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                                <i className="icon-01"></i>
                            </div>
                            <div className="content">
                                <h3><Link to="/services/details">Tech Fortress Solutions</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application</p>
                                <Link to="/services/details" className="link-btn">Read More <span><i
                                    className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                                <i className="icon-02"></i>
                            </div>
                            <div className="content">
                                <h3><Link to="/services/details">Data Sphere Innovations</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application</p>
                                <Link to="/services/details" className="link-btn">Read More <span><i
                                    className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                                <i className="icon-03"></i>
                            </div>
                            <div className="content">
                                <h3><Link to="/services/details">Cyber Pulse Security</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application</p>
                                <Link to="/services/details" className="link-btn">Read More <span><i
                                    className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                                <i className="icon-04"></i>
                            </div>
                            <div className="content">
                                <h3><Link to="/services/details">Net Vantage Systems</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application</p>
                                <Link to="/services/details" className="link-btn">Read More <span><i
                                    className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                                <i className="icon-05"></i>
                            </div>
                            <div className="content">
                                <h3><Link to="/services/details">Code Nova Technologies</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application</p>
                                <Link to="/services/details" className="link-btn">Read More <span><i
                                    className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-img bg-cover mt-0"
                             style={{ backgroundImage: `url(${serviceImg})` }}>
                            <div className="service-content">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <h3>Need Help?</h3>
                                <p className="mb-0">For fast service</p>
                                <h4><a href="tel:+888123456765" className="text-white">(+888) 123 456 765</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}