import projectImg31 from "@/assets/img/project/project-3-1.jpg";
import projectImg32 from "@/assets/img/project/project-3-2.jpg";
import projectImg33 from "@/assets/img/project/project-3-3.jpg";
import projectImg34 from "@/assets/img/project/project-3-4.jpg";
import projectImg35 from "@/assets/img/project/project-3-5.jpg";
import { Link } from 'react-router-dom';

export default function ProjectSectionThree() {
    return (
        <section className="project-section-3 section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="project-left-items-3">
                            <div className="section-title style-2 mb-0">
                                <h6 className="wow fadeInUp">Latest Portfolio</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Our Newest Project
                                </h2>
                            </div>
                            <div className="main-button bg-3 mt-5 wow fadeInUp" data-wow-delay=".5s">
                                <Link to="/project"> <span className="theme-btn"> View All Project </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-img-items-3">
                            <img src={projectImg31} alt="img"/>
                            <Link to="/project/details" className="icon">
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-img-items-3">
                            <img src={projectImg32} alt="img"/>
                            <Link to="/project/details" className="icon">
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-img-items-3">
                            <img src={projectImg33} alt="img"/>
                            <Link to="/project/details" className="icon">
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-img-items-3">
                            <img src={projectImg34} alt="img"/>
                            <Link to="/project/details" className="icon">
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-img-items-3">
                            <img src={projectImg35} alt="img"/>
                            <Link to="/project/details" className="icon">
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}