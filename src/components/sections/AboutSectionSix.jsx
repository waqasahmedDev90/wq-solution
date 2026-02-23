import about13 from "@/assets/img/about/about-13.jpg";
import icon4 from "@/assets/img/about/icon-4.svg";
import icon5 from "@/assets/img/about/icon-5.svg";
import clientImg from "@/assets/img/about/client-img.png";
import aboutImage from "@/assets/img/about/about-image-4.png";
import { Link } from 'react-router-dom';

export default function AboutSectionSix() {
    return (
        <section className="about-section section-padding fix pt-0">
            <div className="container">
                <div className="about-wrapper-11 style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s"
                                     style={{backgroundImage: `url(${aboutImage})`}}>
                                    <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                        <img src={about13} alt="about-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We Are Increasing Business Success With <span>Technology</span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    It is a long established fact that a reader will be distracted the
                                    readable <br/> content of a page when looking at layout the point.
                                </p>
                                <div className="about-icon-items">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon">
                                            <img src={icon4} alt="icon-img"/>
                                        </div>
                                        <div className="content">
                                            <h4>Problem Solving</h4>
                                            <p>
                                                Aliquam erat volutpat Nullam imperdiet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon">
                                            <img src={icon5} alt="icon-img"/>
                                        </div>
                                        <div className="content">
                                            <h4>Mission & Vision</h4>
                                            <p>
                                                Ut vehiculadictumst. Maecenas ante.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow fadeInUp" data-wow-delay=".5s">

                                        <div className="main-button bg-2 wow fadeInUp" data-wow-delay=".7s">
                                            <Link to="/about"> <span className="theme-btn"> Explore More </span><span
                                                className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                    <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                        <img src={clientImg} alt="author-img"/>
                                        <div className="content">
                                            <h6>Ronald Richards</h6>
                                            <p>Co, Founder</p>
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