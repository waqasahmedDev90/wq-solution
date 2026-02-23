import iocn1 from "@/assets/img/icon/01.svg";
import iocn2 from "@/assets/img/icon/02.svg";
import iocn3 from "@/assets/img/icon/03.svg";
import iocn4 from "@/assets/img/icon/04.svg";

export default function ServiceSectionFour() {
    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Our Best Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn1} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Contact management</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn2} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Sales automation</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn3} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Task Management</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn4} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Pipelines management</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn1} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Email automation</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="service-box-items-new-2">
                            <div className="icon">
                                <img src={iocn2} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><a href="service-details.html">Workflow Automation</a></h3>
                                <p>This title is versatile and can adapted to fit the specific tone and branding of your
                                    website quality.</p>
                            </div>
                            <a href="service-details.html" className="arrow-icon"><i
                                className="fa-sharp fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}