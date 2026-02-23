import faqImg01 from "@/assets/img/faq/01.png";
import radiusShape from "@/assets/img/faq/radius-shape.png";

export default function FaqSectionOne() {
    return (
        <section className="faq-section fix">
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="faq-area">
                                <div className="faq-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Address</h5>
                                        <h6>
                                            2118 Thornridge Cir. Syracuse
                                        </h6>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Number</h5>
                                        <h6>
                                            <a href="tel:207555-0119">207555-0119</a>
                                        </h6>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <h5>E-mail</h5>
                                        <h6>
                                            <a href="mailto:jessica.hanson@example.com">
                                                jessica.hanson@example.com
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="faq-image">
                                <img src={faqImg01} alt="img" className="wow img-custom-anim-left"/>
                                <div className="radius-shape">
                                    <img src={radiusShape} alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="faq-items">
                                <div className="section-title mb-0 style-2">
                                    <h6 className="wow fadeInUp">faq</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Ask Question</h2>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                I implement for my business?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                             aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Information Technology is a rapidly evolving field that is a
                                                    encompasses the study and application
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                What latest trends in IT security?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                             aria-labelledby="headingTwo"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Information Technology is a rapidly evolving field that is a
                                                    encompasses the study and application
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                        <h2 className="accordion-header" id="headingthree">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                    aria-controls="collapsethree">
                                                I network from cyber threats?
                                            </button>
                                        </h2>
                                        <div id="collapsethree" className="accordion-collapse collapse"
                                             aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Information Technology is a rapidly evolving field that is a
                                                    encompasses the study and application
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                        <h2 className="accordion-header" id="headingfour">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="false"
                                                    aria-controls="collapsefour">
                                                The best backup and recovery?
                                            </button>
                                        </h2>
                                        <div id="collapsefour" className="accordion-collapse collapse"
                                             aria-labelledby="headingfour"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Information Technology is a rapidly evolving field that is a
                                                    encompasses the study and application
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".5s">
                                        <h2 className="accordion-header" id="headingfive">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefive" aria-expanded="false"
                                                    aria-controls="collapsefive">
                                                Cyber Security Sentinel
                                            </button>
                                        </h2>
                                        <div id="collapsefive" className="accordion-collapse collapse"
                                             aria-labelledby="headingfive"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Information Technology is a rapidly evolving field that is a
                                                    encompasses the study and application
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}