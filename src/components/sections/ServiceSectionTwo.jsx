import { Link } from 'react-router-dom';

export default function ServiceSectionTwo() {
    return (
        <section className="service-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Best Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-items">
                            <div className="service-icon">
                                <i className="icon-01"></i>
                            </div>
                            <div className="service-content">
                                <h3><Link to="/services/details">Tech Fortress Solutions</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study </p>
                                <div className="main-button bg-2">
                                    <Link to="/services/details"> <span className="theme-btn">Read More </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-items">
                            <div className="service-icon">
                                <i className="icon-02"></i>
                            </div>
                            <div className="service-content">
                                <h3><Link to="/services/details">Cyber Pulse Security</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study </p>
                                <div className="main-button bg-2">
                                    <Link to="/about"> <span className="theme-btn">Read More </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="service-items">
                            <div className="service-icon">
                                <i className="icon-03"></i>
                            </div>
                            <div className="service-content">
                                <h3><Link to="/services/details">Data Sphere Innovations</Link></h3>
                                <p>Information Technology is a rapidly evolving field that encompasses the study </p>
                                <div className="main-button bg-2">
                                    <Link to="/about"> <span className="theme-btn"> Read More </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}