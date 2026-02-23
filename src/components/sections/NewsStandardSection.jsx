import { Link } from 'react-router-dom';
import postImg1 from "@/assets/img/news/post-1.jpg";
import postImg2 from "@/assets/img/news/post-2.jpg";
import postImg3 from "@/assets/img/news/post-3.jpg";
import postPp3 from "@/assets/img/news/pp3.jpg";
import postPp4 from "@/assets/img/news/pp4.jpg";
import postPp5 from "@/assets/img/news/pp5.jpg";

export default function NewsStandardSection() {
    return (
        <section className="news-standard-section section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-8">
                        <div className="news-standard-wrapper">
                            <div className="news-standard-items">
                                <div className="thumb">
                                    <img src={postImg1} alt="img"/>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fa-regular fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comments"></i>
                                            0 Comments
                                        </li>
                                    </ul>
                                    <h3><Link to="/blog/details">Driving Success Through the Technological Expertise
                                        Tech for Tomorrow</Link></h3>
                                    <p>
                                        Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                        malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                        interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
                                        mollis ac quam et, venenatis.
                                    </p>
                                    <div className="main-button">
                                        <Link to="/blog/details"> <span className="theme-btn"> Read More </span><span
                                            className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news-standard-items">
                                <div className="thumb">
                                    <img src={postImg2} alt="img"/>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fa-regular fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comments"></i>
                                            0 Comments
                                        </li>
                                    </ul>
                                    <h3><Link to="/blog/details">Pioneering Technology for IT That Transforms
                                        Expertise Tech for Tomorrow</Link></h3>
                                    <p>
                                        Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                        malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                        interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
                                        mollis ac quam et, venenatis.
                                    </p>
                                    <div className="main-button">
                                        <Link to="/blog/details"> <span className="theme-btn"> Read More </span><span
                                            className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news-standard-items mb-0">
                                <div className="thumb">
                                    <img src={postImg3} alt="img"/>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fa-regular fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comments"></i>
                                            0 Comments
                                        </li>
                                    </ul>
                                    <h3><Link to="/blog/details">Through the Technological Not Just Informs Expertise
                                        Tech for Tomorrow</Link></h3>
                                    <p>
                                        Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                        malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                        interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
                                        mollis ac quam et, venenatis.
                                    </p>
                                    <div className="main-button">
                                        <Link to="/blog/details"> <span className="theme-btn"> Read More </span><span
                                            className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="page-nav-wrap pt-5 text-center">
                                <ul>
                                    <li><a className="page-numbers" href="#">01</a></li>
                                    <li><a className="page-numbers" href="#">02</a></li>
                                    <li><a className="page-numbers" href="#">03</a></li>
                                    <li><a className="page-numbers" href="#"><i
                                        className="fa-solid fa-arrow-right-long"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="main-sidebar sticky-style">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Search</h4>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here"/>
                                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>All Services</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><Link to="/blog/details">Digital Agency</Link> <span>(7)</span></li>
                                        <li><Link to="/blog/details">Business</Link> <span>(4)</span></li>
                                        <li className="active"><Link to="/blog/details">Digital Product</Link>
                                            <span>(5)</span></li>
                                        <li><Link to="/blog/details">Social Marketing</Link> <span>(3)</span></li>
                                        <li><Link to="/blog/details">System</Link> <span>(6)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h3>Recent Post</h3>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src={postPp3} alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    14 Feb, 2025
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/details">
                                                    Which Yoga Hybrid is Right <br/> for Your?
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src={postPp4} alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    12 Mar, 2025
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/details">
                                                    Keep Your Business Safe <br/> Ensure High Availability
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src={postPp5} alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    23 Feb, 2025
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/details">
                                                    Tackling the Changes of <br/> Retell Industry
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Tag</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <div className="tagcloud">
                                        <Link to="/blog/details">Security</Link>
                                        <Link to="/blog/details">Business</Link>
                                        <Link to="/blog/details">Digital</Link>
                                        <Link to="/blog/details">Technology</Link>
                                        <Link to="/blog/details">Change</Link>
                                        <Link to="/blog/details">Video</Link>
                                        <Link to="/blog/details">UI/UX Desing</Link>
                                        <Link to="/blog/details">Startup</Link>
                                        <Link to="/blog/details">Services</Link>
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