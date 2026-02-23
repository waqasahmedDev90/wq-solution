import errorImg from "@/assets/img/404.png";
import { Link } from 'react-router-dom';

export default function Error404Section() {
    return (
        <section className="error-section fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-items">
                            <div className="error-image">
                                <img src={errorImg} alt="img"/>
                            </div>
                            <div className="error-content">
                                <h2>Sorry!This Page is not Available</h2>
                                <p>
                                    Oops! The page which you are looking for does not exist. Please return to the
                                    homepage.
                                </p>
                                <div className="main-button justify-content-center">
                                    <Link to="/"> <span className="theme-btn"> Go To Home </span><span
                                        className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}