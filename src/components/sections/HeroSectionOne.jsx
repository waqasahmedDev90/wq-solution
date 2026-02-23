import heroBg from "@/assets/img/hero/hero-bg.jpg";
import heroShape from "@/assets/img/hero/hero-shape.png";
import heroImg from "@/assets/img/hero/hero-img.png";
import { Link } from 'react-router-dom';

export default function HeroSectionOne() {
    return (
        <section className="hero-section hero-12 bg-cover" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="hero-shape">
                <img src={heroShape} alt="img"/>
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h6 className="wow fadeInUp" data-wow-delay=".3s">It TechNOLOGY</h6>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Empowering
                                the <span>Technology is the <br/></span>evolving field</h1>
                            <p className="wow fadeInUp" data-wow-delay=".7s">Information Technology is a rapidly
                                evolving field that encompasses the study and application of computing technology to
                                solve complex </p>
                            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to="/about"> <span className="theme-btn"> Get Started </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <img src={heroImg} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}