import projectImg6 from "@/assets/img/project/06.jpg";
import projectImg7 from "@/assets/img/project/07.jpg";
import projectImg8 from "@/assets/img/project/08.jpg";
import projectImg9 from "@/assets/img/project/09.jpg";
import { Link } from 'react-router-dom';

export default function ProjectSectionTwo() {
    return (
        <section className="project-section-2 fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                        <h2>Our Latest Project</h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        Information Technology is a rapidly evolving field that encompasses the study
                        and <br/> application of computing technology to solve complex problems
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="project-image-2">
                            <img src={projectImg6} alt="img"/>
                            <div className=" project-content">
                                <span>TechS avvy Solutions</span>
                                <h3>
                                    <Link to="/project/details">
                                        Success Technological Expertise
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                        <div className="project-image-2">
                            <img src={projectImg7} alt="img"/>
                            <div className=" project-content">
                                <span>TechS avvy Solutions</span>
                                <h3>
                                    <Link to="/project/details">
                                        Success Technological Expertise
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="project-image-2">
                            <img src={projectImg8} alt="img"/>
                            <div className=" project-content">
                                <span>Tech Savvy Solutions</span>
                                <h3>
                                    <Link to="/project/details">
                                        Success Technological Expertise
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                        <div className="project-image-2">
                            <img src={projectImg9} alt="img"/>
                            <div className=" project-content">
                                <span>TechS avvy Solutions</span>
                                <h3>
                                    <Link to="/project/details">
                                        Success Technological Expertise
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-button justify-content-center mt-5 bg-2 wow fadeInUp" data-wow-delay=".3s">
                    <Link to="/team"> <span className="theme-btn"> View More </span><span className="arrow-btn"><i
                        className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
    )
}