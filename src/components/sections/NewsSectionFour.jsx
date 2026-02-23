import { Link } from 'react-router-dom';

import newImg04 from "@/assets/img/news/04.jpg";
import newImg05 from "@/assets/img/news/05.jpg";
import newImg06 from "@/assets/img/news/06.jpg";

export default function NewsSectionFour() {
    return (
        <section className="news-section pt-0 section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Recent Blog</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-22">
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="fa-regular fa-user"></i>Adam Smith</li>
                                    <li><i className="fa-light fa-calendar-days"></i>07 May,2024</li>
                                </ul>
                                <h3><Link to="/blog/details">How to Comprehensive at SaaS Developments.</Link></h3>
                                <Link to="/blog/details" className="link-btn">Learn more <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                            <div className="news-image">
                                <img src={newImg04} alt="img" className="h-auto"/>
                                <span>Development</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-22">
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="fa-regular fa-user"></i>Adam Smith</li>
                                    <li><i className="fa-light fa-calendar-days"></i>07 May,2024</li>
                                </ul>
                                <h3><Link to="/blog/details">6 Essential Tips for Big Commerce Stores</Link></h3>
                                <Link to="/blog/details" className="link-btn">Learn more <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                            <div className="news-image">
                                <img src={newImg05} alt="img" className="h-auto"/>
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-22">
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="fa-regular fa-user"></i>Adam Smith</li>
                                    <li><i className="fa-light fa-calendar-days"></i>07 May,2024</li>
                                </ul>
                                <h3><Link to="/blog/details">Empowering Startups & Small Businesses</Link></h3>
                                <Link to="/blog/details" className="link-btn">Learn more <i
                                    className="icon-arrow-right"></i></Link>
                            </div>
                            <div className="news-image">
                                <img src={newImg06} alt="img" className="h-auto"/>
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}