export default function ContactSection() {
    return (
        <section className="contact-section-12 fix section-padding">
            <div className="container">
                <div className="contact-wrapper-12">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-left-items">
                                <div className="section-title mb-0">
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="contact-area">
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <h5>Address</h5>
                                        </div>
                                        <div className="content">
                                            <h6>
                                                2118 Thornridge Cir. Syracuse
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                            <h5>Number</h5>
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="tel:0123456789101">0123456789101</a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-item mb-0">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                            <h5>E-mail</h5>
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="mailto:jessica.hanson@example.com">
                                                    jessica.hanson@example.com
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                                        style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-box">
                                <div className="section-title mb-0">
                                    <h2>Get In Touch</h2>
                                </div>
                                <form action="#" id="contact-form1" method="POST"
                                      className="contact-form-items">
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
                    </div>
                </div>
            </div>
        </section>
    )
}