import { useState } from "react";
import teamSm1 from "@/assets/img/team/sm-1.jpg";
import teamSm2 from "@/assets/img/team/sm-2.jpg";
import teamSm3 from "@/assets/img/team/sm-3.jpg";
import teamSm4 from "@/assets/img/team/sm-4.jpg";
import teamSm5 from "@/assets/img/team/sm-5.jpg";
import teamImg1 from "@/assets/img/team/01.png";
import teamImg2 from "@/assets/img/team/02.png";
import teamImg3 from "@/assets/img/team/03.png";
import teamImg4 from "@/assets/img/team/04.png";
import teamImg5 from "@/assets/img/team/05.png";

export default function TeamSectionOne() {
    // State to track the selected image and active thumbnail
    const [selectedImage, setSelectedImage] = useState(teamImg4);
    const [activeThumb, setActiveThumb] = useState(teamSm1); // Default active thumbnail

    // Mapping small images to corresponding large images
    const teamMembers = [
        { sm: teamSm1, lg: teamImg1 },
        { sm: teamSm2, lg: teamImg2 },
        { sm: teamSm3, lg: teamImg3 },
        { sm: teamSm4, lg: teamImg4 },
        { sm: teamSm5, lg: teamImg5 },
    ];

    return (
        <section className="team-section fix section-padding pt-0 pb-0">
            <div className="container">
                <div className="team-wrapper">
                    <div className="social-icon d-grid align-items-center">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="row g-4 justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="team-left-content">
                                <div className="section-title mb-0 wow fadeInUp" data-wow-delay=".3s">
                                    <h2>Arlene McCoy</h2>
                                </div>
                                <span className="wow fadeInUp" data-wow-delay=".5s">FOUNDER</span>
                                <p className="wow fadeInUp" data-wow-delay=".7s">
                                    Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology to solve various challenges.
                                </p>
                                <ul className="nav wow fadeInUp" data-wow-delay=".3s">
                                    {teamMembers.map((member, index) => (
                                        <li className="nav-item" key={index}>
                                            <button
                                                className={`nav-link ${activeThumb === member.sm ? "active" : ""}`}
                                                onClick={() => {
                                                    setSelectedImage(member.lg);
                                                    setActiveThumb(member.sm);
                                                }}
                                            >
                                                <img src={member.sm} alt="team thumbnail" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div className="team-image">
                                <img src={selectedImage} alt="Selected Team Member"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
