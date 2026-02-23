import serviceImg from "@/assets/img/service/service-img.jpg";
import { Link } from 'react-router-dom';

export default function ServiceSectionOne() {
    return (
        <section className="service-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Best Services</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                        Information Technology is a rapidly evolving field that encompasses the study
                        and <br/> application of computing technology to solve complex problems
                    </p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-box-items">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="service-box-items">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-box-items">
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
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="service-img bg-cover"
                             style={{backgroundImage: `url(${serviceImg})`}}>
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