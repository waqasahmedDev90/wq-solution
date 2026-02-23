import { useRef } from "react";
import teamHoverImg from "@/assets/img/team/team-hover.png";
import { Link } from 'react-router-dom';

export default function TeamSectionTwo() {
    const teamBoxesRef = useRef([]);

    const followImageCursor = (event, index) => {
        const teamBox = teamBoxesRef.current[index];
        if (!teamBox) return;

        const contentBox = teamBox.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;

        const hoverImage = teamBox.querySelector(".team-hover");
        if (hoverImage) {
            hoverImage.style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }
    };

    return (
        <div className="team-section-2 section-padding section-bg fix">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Team Member</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {[
                            { name: "Floyd Miles", role: "SEO Expert" },
                            { name: "Floyd Miles", role: "SEO Expert" },
                            { name: "Marvin McKinney", role: "Nursing Assistant" },
                            { name: "Cameron Williamson", role: "Marketing Coordinator" },
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="team-line-box bor-bottom wow fadeInUp"
                                data-wow-delay=".3s"
                                ref={(el) => (teamBoxesRef.current[index] = el)}
                                onMouseMove={(e) => followImageCursor(e, index)}
                            >
                                <div className="content">
                                    <h3><Link to="/team/details">{member.name}</Link></h3>
                                    <span>{member.role}</span>
                                </div>
                                <p>
                                    Information Technology is a rapidly evolving field that encompasses the study and
                                    application of computing technology.
                                </p>
                                <div
                                    className="team-hover d-none d-md-block bg-cover"
                                    style={{ backgroundImage: `url(${teamHoverImg})` }}
                                ></div>
                                <div className="social-profile">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <span className="plus-btn">
                                        <i className="fa-sharp fa-regular fa-share-nodes"></i>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
