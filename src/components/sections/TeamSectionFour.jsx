import teamImg1 from "@/assets/img/team/01.png";
import teamImg2 from "@/assets/img/team/02.png";
import teamImg3 from "@/assets/img/team/03.png";
import teamImg5 from "@/assets/img/team/05.png";
import teamImg6 from "@/assets/img/team/06.png";
import teamImg7 from "@/assets/img/team/07.png";
import { Link } from 'react-router-dom';

export default function TeamSectionFour() {
    // Team members data array
    const teamMembers = [
        {
            id: 1,
            name: "Courtney Henry",
            role: "SEO Expert",
            image: teamImg1,
            delay: ".3s",
        },
        {
            id: 2,
            name: "Cameron Williamson",
            role: "Nursing Assistant",
            image: teamImg2,
            delay: ".5s",
        },
        {
            id: 3,
            name: "Marvin McKinney",
            role: "Marketing Coordinator",
            image: teamImg3,
            delay: ".7s",
        },
        {
            id: 4,
            name: "Savannah Nguyen",
            role: "SEO Expert",
            image: teamImg5,
            delay: ".3s",
        },
        {
            id: 5,
            name: "Leslie Alexander",
            role: "CEO",
            image: teamImg6,
            delay: ".5s",
        },
        {
            id: 6,
            name: "Darlene Robertson",
            role: "Marketing Coordinator",
            image: teamImg7,
            delay: ".7s",
        }
    ];

    return (
        <section className="team-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={member.delay}>
                            <div className="team-box-items-3 mt-0">
                                <div className="team-img">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-content">
                                    <h3><Link to="/team/details">{member.name}</Link></h3>
                                    <p>{member.role}</p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
