import newImg04 from "@/assets/img/news/04.jpg";
import newImg05 from "@/assets/img/news/05.jpg";
import newImg06 from "@/assets/img/news/06.jpg";
import { Link } from 'react-router-dom';

export default function NewsSectionTwo() {
    return (
        <section className="news-section section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Recent Blog</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-2">
                            <div className="news-img">
                                <img src={newImg04} alt="img"/>
                                <div className="date-box">
                                    <ul>
                                        <li>30</li>
                                        <li> May</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-content">
                                <h3><Link to="/blog/details">Empowering Innovation Through Digitally the
                                    Technology</Link></h3>
                                <Link to="/blog/details" className="btn-itms">
                                    Read Now <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-2">
                            <div className="news-img">
                                <img src={newImg05} alt="img"/>
                                <div className="date-box">
                                    <ul>
                                        <li>30</li>
                                        <li> May</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-content">
                                <h3><Link to="/blog/details">IT Excellence Every Step of the Elevate Your
                                    Business</Link></h3>
                                <Link to="/blog/details" className="btn-itms">
                                    Read Now <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-2">
                            <div className="news-img">
                                <img src={newImg06} alt="img"/>
                                <div className="date-box">
                                    <ul>
                                        <li>30</li>
                                        <li> May</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-content">
                                <h3><Link to="/blog/details">Unleashing the Power of Seamless Solutions the Power</Link>
                                </h3>
                                <Link to="/blog/details" className="btn-itms">
                                    Read Now <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}