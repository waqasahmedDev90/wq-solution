import chooseUsImg from "@/assets/img/choose-us/01.png";
import lineShapeImg from "@/assets/img/choose-us/line-shape.png";
import dotShapeImg from "@/assets/img/choose-us/dot-shape.png";
import { Link } from 'react-router-dom';

export default function ChooseUsSectionOne() {
    return (
        <section className="choose-us-section-2 fix section-padding">
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title mb-0">
                                    <h2 className="wow fadeInUp">Why Chose Us</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">Information Technology is a rapidly
                                        evolving field that encompasses the study and application of computing
                                        technology</p>
                                </div>
                                <div className="list-items wow fadeInUp" data-wow-delay=".5s">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Your Business with IT Solutions
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Your Business with IT Solutions
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Your Business with IT Solutions
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Your Business with IT Solutions
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-button bg-2 wow fadeInUp" data-wow-delay=".5s">
                                    <Link to="/about"> <span className="theme-btn"> View More </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-us-img">
                                <img src={chooseUsImg} alt="img" className="wow img-custom-anim-right
                                "/>
                                <div className="line-shape">
                                    <img src={lineShapeImg} alt="img"/>
                                </div>
                                <div className="dot-shape">
                                    <img src={dotShapeImg} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}