import { Link } from 'react-router-dom';
import project10Img from "@/assets/img/project/10.jpg";
import project11Img from "@/assets/img/project/11.jpg";
import project12Img from "@/assets/img/project/12.jpg";
import project13Img from "@/assets/img/project/13.jpg";
import project14Img from "@/assets/img/project/14.jpg";
import project15Img from "@/assets/img/project/15.jpg";

export default function ProjectDetailsSection() {
    return (
        <section className="project-section-5 fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project10Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Success Technological Expertise</Link></h3>
                                <h4>2022</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project11Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Mobile Tech Mastery</Link></h3>
                                <h4>2025</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project12Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Cyber Security Sentinel</Link></h3>
                                <h4>2022</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project13Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Web Wise Wizards</Link></h3>
                                <h4>2023</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project14Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Precision Pixels</Link></h3>
                                <h4>2024</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6">
                        <div className="project-items-5">
                            <div className="thumb">
                                <img src={project15Img} alt="img"/>
                            </div>
                            <div className="content">
                                <h3><Link to="/project/details">Tech Wave Solutions</Link></h3>
                                <h4>2023</h4>
                                <Link to="/project/details" className="icon">
                                    <i className="icon-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}