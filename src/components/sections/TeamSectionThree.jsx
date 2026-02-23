import teamImg01 from "@/assets/img/team/01.png";
import teamImg02 from "@/assets/img/team/02.png";
import teamImg03 from "@/assets/img/team/03.png";
import { Link } from 'react-router-dom';

export default function TeamSectionThree() {
    return (
        <section className="team-section section-padding fix pt-0">
            <div className="container">
                <div className="section-title text-center style-2">
                    <h6 className="wow fadeInUp">Our Team</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Team Member</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-box-items-3">
                            <div className="team-img">
                                <img src={teamImg01} alt="img"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Courtney Henry</Link></h3>
                                <p>SEO Wxpert</p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="team-box-items-3 style-2">
                            <div className="team-img">
                                <img src={teamImg02} alt="img"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Cameron Williamson</Link></h3>
                                <p>Nursing Assistant</p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="team-box-items-3">
                            <div className="team-img">
                                <img src={teamImg03} alt="img"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Marvin McKinney</Link></h3>
                                <p>Marketing Coordinator</p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}