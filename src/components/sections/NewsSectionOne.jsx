import newsImg1 from "@/assets/img/news/01.jpg";
import newsImg2 from "@/assets/img/news/02.jpg";
import newsImg3 from "@/assets/img/news/03.jpg";
import { Link } from 'react-router-dom';

export default function NewsSectionOne() {
    return (
        <section className="news-section section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Blog And News</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                        Information Technology is a rapidly evolving field that encompasses the study
                        and <br/> application of computing technology to solve complex problems
                    </p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items">
                            <div className="news-img">
                                <img src={newsImg1} alt="img"/>
                            </div>
                            <div className="news-content">
                                <ul className="date-list">
                                    <li>
                                        <i className="fa-solid fa-user"></i>
                                        By admin
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        20, june 2025
                                    </li>
                                </ul>
                                <h3><Link to="/blog/details">Driving Success Through the Technological Expertise</Link>
                                </h3>
                                <Link to="/blog/details" className="link-btn">Read More <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items">
                            <div className="news-img">
                                <img src={newsImg2} alt="img"/>
                            </div>
                            <div className="news-content">
                                <ul className="date-list">
                                    <li>
                                        <i className="fa-solid fa-user"></i>
                                        By admin
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        20, june 2025
                                    </li>
                                </ul>
                                <h3><Link to="/blog/details">Pioneering Technology for IT That Transforms</Link></h3>
                                <Link to="/blog/details" className="link-btn">Read More <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items">
                            <div className="news-img">
                                <img src={newsImg3} alt="img"/>
                            </div>
                            <div className="news-content">
                                <ul className="date-list">
                                    <li>
                                        <i className="fa-solid fa-user"></i>
                                        By admin
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        20, june 2025
                                    </li>
                                </ul>
                                <h3><Link to="/blog/details">Through the Technological Not Just Informs</Link></h3>
                                <Link to="/blog/details" className="link-btn">Read More <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}