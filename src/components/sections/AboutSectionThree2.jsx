import hero22Img from "@/assets/img/hero/hero-22.jpg";
import iconDot from "@/assets/img/hero/icon-dots-8.png";
import { Link } from 'react-router-dom';

export default function AboutSectionThree2() {
    return (
        <section className="hero-section hero-22 fix">
            <div className="hero-image">
                <img src={hero22Img} alt="img" className="h-auto"/>
            </div>
            <div className="dot-shape">
                <img src={iconDot} alt="shape-img" className="h-auto"/>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Tech Solutions for <span>You Digital</span> Excellence
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Transmds is the world’s driving worldwide coordinations supplier we uphold
                                industry and exchange the worldwide trade of merchandi
                            </p>
                            <div className="main-button bg-2 mt-5 wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/contact"> <span className="theme-btn"> Get Started </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}