import faqImg from '@/assets/img/faq/faq-img.png';

export default function FaqSectionFive() {
    return (
        <section className="faq-section-3 fix section-padding section-bg">
            <div className="container">
                <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s">
                    <h2>Keep Your Business Safe & <br/> Ensure High Availability.</h2>
                </div>
                <div className="faq-wrapper-3">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-image">
                                <img src={faqImg} alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-items">
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
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem
                                                    beatae tempora nemo consequuntur harum quis veritatis quos laborum
                                                    praesentium magni et distinctio molestias aut amet dolore ipsa,
                                                    tempore recusandae!
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
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem
                                                    beatae tempora nemo consequuntur harum quis veritatis quos laborum
                                                    praesentium magni et distinctio molestias aut amet dolore ipsa,
                                                    tempore recusandae!
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
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem
                                                    beatae tempora nemo consequuntur harum quis veritatis quos laborum
                                                    praesentium magni et distinctio molestias aut amet dolore ipsa,
                                                    tempore recusandae!
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
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem
                                                    beatae tempora nemo consequuntur harum quis veritatis quos laborum
                                                    praesentium magni et distinctio molestias aut amet dolore ipsa,
                                                    tempore recusandae!
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
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem
                                                    beatae tempora nemo consequuntur harum quis veritatis quos laborum
                                                    praesentium magni et distinctio molestias aut amet dolore ipsa,
                                                    tempore recusandae!
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