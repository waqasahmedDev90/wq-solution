import linepng from "@/assets/img/process/linepng.png";
import processImg1 from "@/assets/img/process/01.svg";
import processImg2 from "@/assets/img/process/02.svg";
import processImg3 from "@/assets/img/process/03.svg";
import processImg4 from "@/assets/img/process/04.svg";

export default function WorkProcessSection() {
    return (
        <section className="work-process-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Standard Work <br/> Process</h2>
                </div>
                <div className="process-work-wrapper">
                    <div className="line-shape">
                        <img src={linepng} alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="work-process-items text-center">
                                <div className="icon">
                                    <img src={processImg1} alt="img"/>
                                    <h6 className="number">
                                        1
                                    </h6>
                                </div>
                                <div className="content">
                                    <h4>Choose A Service</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="work-process-items text-center">
                                <div className="content style-2">
                                    <h4>Define Requirements</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and
                                    </p>
                                </div>
                                <div className="icon">
                                    <img src={processImg2} alt="img"/>
                                    <h6 className="number">
                                        2
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="work-process-items text-center">
                                <div className="icon">
                                    <img src={processImg3} alt="img"/>
                                    <h6 className="number">
                                        3
                                    </h6>
                                </div>
                                <div className="content">
                                    <h4>Request A Meeting</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="work-process-items text-center">
                                <div className="content style-2">
                                    <h4>Finial Solutio3</h4>
                                    <p>
                                        In a free hour, when our power of choice is untrammeled and
                                    </p>
                                </div>
                                <div className="icon">
                                    <img src={processImg4} alt="img"/>
                                    <h6 className="number">
                                        4
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}