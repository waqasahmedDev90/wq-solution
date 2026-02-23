import { Link } from 'react-router-dom';
import projectImg01 from "@/assets/img/project/01.jpg";
import projectImg02 from "@/assets/img/project/02.jpg";
import projectImg03 from "@/assets/img/project/03.jpg";
import projectImg04 from "@/assets/img/project/04.jpg";

export default function ProjectSectionFive() {
    return (
        <section className="project-section pt-0 fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Our Latest Incredible <br/> Client's Projects</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-box-items">
                            <div className="project-content">
                                <h3>
                                    <Link to="/project/details">Software Development</Link>
                                </h3>
                                <p>Retail management aims at helping the customers get the<br/> necessary item or
                                    products from the retail stores without any difficulty.</p>
                                <div className="app-button">
                                    <Link to="/project/details">UI/UX</Link>
                                    <Link to="/project/details">Mobile app</Link>
                                </div>
                            </div>
                            <div className="project-thumb">
                                <img src={projectImg01} alt="img" className="h-auto"/>
                                <Link to="/project/details" className="btns">
                                    View <br/>
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-box-items">
                            <div className="project-content">
                                <h3>
                                    <Link to="/project/details">Analytic Solutions</Link>
                                </h3>
                                <p>Retail management aims at helping the customers get the<br/> necessary item or
                                    products from the retail stores without any difficulty.</p>
                                <div className="app-button">
                                    <Link to="/project/details">UI/UX</Link>
                                    <Link to="/project/details">Mobile app</Link>
                                </div>
                            </div>
                            <div className="project-thumb">
                                <img src={projectImg02} alt="img" className="h-auto"/>
                                <Link to="/project/details" className="btns">
                                    View <br/>
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-box-items">
                            <div className="project-content">
                                <h3>
                                    <Link to="/project/details">Web Development</Link>
                                </h3>
                                <p>Retail management aims at helping the customers get the<br/> necessary item or
                                    products from the retail stores without any difficulty.</p>
                                <div className="app-button">
                                    <Link to="/project/details">Web design</Link>
                                    <Link to="/project/details">Technology</Link>
                                </div>
                            </div>
                            <div className="project-thumb">
                                <img src={projectImg03} alt="img" className="h-auto"/>
                                <Link to="/project/details" className="btns">
                                    View <br/>
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-box-items">
                            <div className="project-content">
                                <h3>
                                    <Link to="/project/details">Design Solutions</Link>
                                </h3>
                                <p>Retail management aims at helping the customers get the<br/> necessary item or
                                    products from the retail stores without any difficulty.</p>
                                <div className="app-button">
                                    <Link to="/project/details">Marketing</Link>
                                </div>
                            </div>
                            <div className="project-thumb">
                                <img src={projectImg04} alt="img" className="h-auto"/>
                                <Link to="/project/details" className="btns">
                                    View <br/>
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}