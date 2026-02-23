import { Link } from 'react-router-dom';
import teamImg1 from "@/assets/img/team/01.jpg";
import teamImg2 from "@/assets/img/team/02.jpg";
import teamImg3 from "@/assets/img/team/03.jpg";
import teamImg4 from "@/assets/img/team/04.jpg";

export default function TeamSectionSix() {
    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Dedicated Team <br/> Members
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src={teamImg1} alt="img"/>
                                <ul className="social-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Marvin McKinney</Link></h3>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="team-box-items">
                            <div className="team-image">
                                <img src={teamImg2} alt="img"/>
                                <ul className="social-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Bessie Cooper</Link></h3>
                                <p>President of Sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src={teamImg3} alt="img"/>
                                <ul className="social-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Dianne Russell</Link></h3>
                                <p>Marketing manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <div className="team-box-items">
                            <div className="team-image">
                                <img src={teamImg4} alt="img"/>
                                <ul className="social-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Leslie Alexander</Link></h3>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}