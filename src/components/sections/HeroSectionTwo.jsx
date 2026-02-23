import gradientBg from "@/assets/img/hero/gradient-bg.png";
import gradientBg2 from "@/assets/img/hero/gradient-bg-2.png";
import clientImg from "@/assets/img/hero/client-img.png";
import hero2Img from "@/assets/img/hero/hero-2-img.png";
import boxShape from "@/assets/img/hero/box-shape.png";
import { Link } from 'react-router-dom';

export default function HeroSectionTwo() {
    return (
        <section className="hero-section hero-2">
            <div className="bg-shape-1">
                <img src={gradientBg} alt="img"/>
            </div>
            <div className="gradient-color">
                <img src={gradientBg2} alt="img"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Tech Solutions
                                for <span>You Digital</span> Excellence</h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">Technology is constantly evolving, shaping
                                the way we <br/>liveencompasses innovation, automation,</p>
                            <div className="main-button bg-2 wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/contact"> <span className="theme-btn"> Get Started </span><span
                                    className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                            </div>
                            <h4 className="wow fadeInUp" data-wow-delay=".8s">Team Of Passionate Designers And
                                Developer</h4>
                            <div className="client-img wow fadeInUp" data-wow-delay=".9s">
                                <img src={clientImg} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image wow img-custom-anim-left">
                            <img src={hero2Img} alt="img"/>
                            <div className="box-shape float-bob-y">
                                <img src={boxShape} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}