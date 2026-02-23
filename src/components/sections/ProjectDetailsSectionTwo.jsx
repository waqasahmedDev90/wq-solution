import { Link } from 'react-router-dom';
import detailImg1 from "@/assets/img/project/details-1.jpg";
import detailImg2 from "@/assets/img/project/details-2.jpg";

export default function ProjectDetailsSectionTwo() {
    return (
        <section className="project-details-section fix section-padding">
            <div className="container">
                <div className="project-details-wrapper">
                    <div className="project-details-items">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="details-top-items">
                                    <div className="details-left">
                                        <h2>Building digital products end to end</h2>
                                        <ul className="post-cat">
                                            <li>
                                                <Link to="/project/details">creative</Link>
                                            </li>
                                            <li>
                                                <Link to="/project/details">Branding</Link>
                                            </li>
                                            <li>
                                                <Link to="/project/details">Analytics</Link>
                                            </li>
                                            <li>
                                                <Link to="/project/details">Audience</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="details-right">
                                        <ul className="client-details">
                                            <li>
                                                Client: <span>David Martin</span>
                                            </li>
                                            <li>
                                                Year: <span>2024</span>
                                            </li>
                                            <li>
                                                Author: <span>Robart Mory</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-details-content">
                        <h3>Overview</h3>
                        <div className="row g-4">
                            <div className="col-lg-7">
                                <p>
                                    Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum
                                    vehicula facilisis In pulvinar imperdiet venenatis Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem.
                                    Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum
                                    Nulla aliquam elit eu diam pharetra.
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <p>
                                    Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar imperdiet venenatis.
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                    himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat,
                                    consectetur placerat augue vestibulum.
                                </p>
                            </div>
                        </div>
                        <h3 className="mt-5">Finial Results Of the Project</h3>
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="list-items">
                                    <ul>
                                        <li><span>consectetur placerat augue vestibulum</span></li>
                                        <li><span>Mauris tincidunt a eget facilisis  Quisque</span></li>
                                        <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                                    </ul>
                                    <ul>
                                        <li><span>adipiscing elit Etiam aliquam, enim vitae</span></li>
                                        <li><span>Donec at augue ante Nam posuere mauris</span></li>
                                        <li><span>quis pretium elit placerat id Fusce egestas</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="progress-area">
                                    <div className="progress-wrap">
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Branding Design
                                                </h6>
                                                <span className="point">
                                                    86%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value"></div>
                                            </div>
                                        </div>
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Business
                                                </h6>
                                                <span className="point">
                                                    96%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-two"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 mt-4">
                            <div className="col-md-6">
                                <div className="details-image">
                                    <img src={detailImg1} alt="img"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="details-image">
                                    <img src={detailImg2} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-button d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                            <button className="cmn-prev cmn-border d-center">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <span className="fw-bold white-clr previus-text text-capitalize">
                                previous
                            </span>
                        </div>
                        <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                            <span className="fw-bold white-clr previus-text text-capitalize">
                                Next
                            </span>
                            <button className="cmn-next cmn-border d-center">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}