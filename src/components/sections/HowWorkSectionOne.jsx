import lineShape1 from "@/assets/img/choose-us/line-shape-1.png";
import lineShape2 from "@/assets/img/choose-us/line-shape-2.png";
import workImg1 from "@/assets/img/how-work/01.png";
import workImg2 from "@/assets/img/how-work/02.png";
import workImg3 from "@/assets/img/how-work/03.png";

export default function HowWorkSectionOne() {
    return (
        <section className="how-work-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">How We Work</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                        Information Technology is a rapidly evolving field that encompasses the study
                        and <br/> application of computing technology to solve complex problems
                    </p>
                </div>
                <div className="line-shape-1">
                    <img src={lineShape1} alt="img"/>
                </div>
                <div className="line-shape-2">
                    <img src={lineShape2} alt="img"/>
                </div>
                <div className="row">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="how-work-items">
                            <div className="how-work-img">
                                <img src={workImg1} alt="img"/>
                                <div className="number">
                                    01
                                </div>
                            </div>
                            <div className="how-work-content">
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology to solve </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                        <div className="how-work-items">
                            <div className="how-work-img">
                                <img src={workImg2} alt="img"/>
                                <div className="number">
                                    02
                                </div>
                            </div>
                            <div className="how-work-content">
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology to solve </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".7s">
                        <div className="how-work-items">
                            <div className="how-work-img">
                                <img src={workImg3} alt="img"/>
                                <div className="number">
                                    03
                                </div>
                            </div>
                            <div className="how-work-content">
                                <p>Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology to solve </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}