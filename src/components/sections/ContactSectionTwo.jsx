import contactImg01 from "@/assets/img/contact/01.png";
import radiusImage from "@/assets/img/contact/radius-image.png";
import shapeBox from "@/assets/img/choose-us/shape-box.png";

export default function ContactSectionTwo() {
    return (
        <section className="contact-section-2 section-padding pt-0 fix">
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={contactImg01} alt="img" className="wow img-custom-anim-left
                                "/>
                                <div className="radius-image">
                                    <img src={radiusImage} alt="img"/>
                                </div>
                                <div className="box-shape float-bob-y">
                                    <img src={shapeBox} alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-item">
                                <div className="section-title mb-0 wow fadeInUp" data-wow-delay=".3s">
                                    <h2>Contact Us</h2>
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
                    </div>
                </div>
            </div>
        </section>
    )
}