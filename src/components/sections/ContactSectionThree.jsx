import contactImg2 from "@/assets/img/contact/contact-2.png";

export default function ContactSectionThree() {
    return (
        <div className="contact-section-44 fix section-bg-2">
            <div className="contact-image">
                <img src={contactImg2} alt="img"/>
            </div>
            <div className="container">
                <div className="contact-wrapper-12 style-2">
                    <div className="row g-4">
                        <div className="col-xl-6">
                            <div className="contact-box">
                                <div className="section-title mb-0">
                                    <h2>Get In Touch</h2>
                                </div>
                                <form action="#" id="contact-form1" method="POST" className="contact-form-items">
                                    <div className="row g-4">
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <div className="form">
                                                    <select className="single-select nice-select w-100">
                                                        <option>Select Service</option>
                                                        <option>Service 01</option>
                                                        <option>Service 02</option>
                                                        <option>Service 03</option>
                                                        <option>Service 04</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name2" placeholder="mm/dd/yyy"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <input type="text" name="Time" id="Time" placeholder="Time"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                            <div className="form-clt">
                                                <textarea name="message" id="message1"
                                                          placeholder="Type Here"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                            <button type="submit" className="theme-btn">
                                                <span>Sent Now <i className="icon-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}