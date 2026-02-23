import { Link } from 'react-router-dom';
import teamImg1 from "@/assets/img/team/01.jpg";
import teamImg2 from "@/assets/img/team/02.jpg";
import teamImg3 from "@/assets/img/team/03.jpg";
import teamImg4 from "@/assets/img/team/04.jpg";

export default function TeamSectionFive() {
    return (
        <section className="team-section-3 fix section-padding pt-0">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Meet Our Leadership
                        </h2>
                    </div>
                    <div className="main-button bg-2 wow fadeInUp" data-wow-delay=".5s">
                        <Link to="/team"> <span className="theme-btn"> All Team Member </span><span
                            className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team-card-items">
                            <div className="team-image">
                                <img src={teamImg1} alt="img" className="h-auto"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">John Smith</Link></h3>
                                <p>CO-Leader</p>
                                <div className="social-profile">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team-card-items">
                            <div className="team-image">
                                <img src={teamImg2} alt="img" className="h-auto"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">William John</Link></h3>
                                <p>Web Developer</p>
                                <div className="social-profile">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team-card-items">
                            <div className="team-image">
                                <img src={teamImg3} alt="img" className="h-auto"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Penelopa Miller</Link></h3>
                                <p>Web Development</p>
                                <div className="social-profile">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team-card-items">
                            <div className="team-image">
                                <img src={teamImg4} alt="img" className="h-auto"/>
                            </div>
                            <div className="team-content">
                                <h3><Link to="/team/details">Leslie Alexander</Link></h3>
                                <p>Nursing Assistant</p>
                                <div className="social-profile">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}