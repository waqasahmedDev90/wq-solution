import brandImg1 from "@/assets/img/brand/01.png";
import brandImg2 from "@/assets/img/brand/02.png";
import brandImg3 from "@/assets/img/brand/03.png";
import brandImg4 from "@/assets/img/brand/04.png";
import brandImg5 from "@/assets/img/brand/05.png";
import brandImg6 from "@/assets/img/brand/06.png";

export default function ContactUsSectionOne() {
    return (
        <section className="contact-section section-padding">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <div className="contact-content">
                                <div className="section-title mb-0">
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Contact Us</h2>
                                    <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".5s">
                                        Information Technology is a evolving field tencompasses the study application
                                        computing Information Technology is a evolving field that encompasses
                                    </p>
                                </div>
                                <ul className="contact-info wow fadeInUp" data-wow-delay=".7s">
                                    <li>
                                        <span>
                                            <i className="fa-solid fa-location-dot"></i>
                                            Address
                                        </span>
                                        2118 Thornridge Cir. Syracuse
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa-solid fa-envelope"></i>
                                            Email
                                        </span>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" id="contact-form1" method="POST" className="contact-form-items">
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="form-clt">
                                            <span>Name</span>
                                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="form-clt">
                                            <span>Email</span>
                                            <input type="text" name="name" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="form-clt">
                                            <span>Option</span>
                                            <div className="form">
                                                <select className="single-select nice-select w-100">
                                                    <option>Choose An Option</option>
                                                    <option>Choose Option 01</option>
                                                    <option>Choose Option 02</option>
                                                    <option>Choose Option 03</option>
                                                    <option>Choose Option 04</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="form-clt">
                                            <span>Message</span>
                                            <textarea name="message" id="message1" placeholder="Type Here"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className=""></div>
                                        <button type="submit" className="theme-btn">
                                            <span>Sent Now <i className="icon-arrow-right"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="brand-section section-padding pb-0">
                    <div className="brand-slider marquee-wrap">
                        <div className=" marquee">
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg1} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg2} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg3} alt="img"/>
                                </div>
                            </div>
                            <div className="slide marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg4} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg5} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg6} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg1} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg2} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg3} alt="img"/>
                                </div>
                            </div>
                            <div className="slide marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg4} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg5} alt="img"/>
                                </div>
                            </div>
                            <div className=" marquee-item">
                                <div className="brand-image">
                                    <img src={brandImg6} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}