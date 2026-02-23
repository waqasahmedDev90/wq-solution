import contactImg from "@/assets/img/contact-img.jpg";
import icon111 from "@/assets/img/icon/111.svg";
import icon222 from "@/assets/img/icon/222.svg";
import {useEffect} from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ContactSectionFour() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox2]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <section className="contact-section section-padding fix section-bg">
            <div className="container">
                <div className="contact-content-321">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <div className="section-title">
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        Leave a message
                                    </h2>
                                </div>
                                <form action="#" id="contact-form" method="POST">
                                    <div className="row g-4">
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <input type="text" name="email" id="email2"
                                                       placeholder="Email address"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Phone number"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="subject"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <textarea name="message" id="message"
                                                          placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <button type="submit" className="theme-btn ">
                                                Send a message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={contactImg} alt="img" className="wow img-custom-anim-left"/>
                                <a data-fancybox2 href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                    <i className="fa-duotone fa-play"></i>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="contact-box style-2">
                                        <div className="icon">
                                            <img src={icon111} alt="img" className="h-auto"/>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Epxerienced
                                                memebers
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="contact-box style-2">
                                        <div className="icon">
                                            <img src={icon222} alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Get free
                                                consultation
                                            </h3>
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