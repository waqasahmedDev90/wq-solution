import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";

import projectImg01 from '@/assets/img/project/01.jpg';
import projectImg02 from '@/assets/img/project/02.jpg';
import projectImg03 from '@/assets/img/project/03.jpg';
import projectImg04 from '@/assets/img/project/04.jpg';
import projectImg05 from '@/assets/img/project/05.jpg';

const projects = [
    {
        id: 1,
        image: projectImg01,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 2,
        image: projectImg02,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 3,
        image: projectImg03,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 4,
        image: projectImg04,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 5,
        image: projectImg05,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 6,
        image: projectImg04,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
    {
        id: 7,
        image: projectImg02,
        title: 'Diligently IT Excellence',
        description: 'Lorem Ipsum is simply dummy',
        link: '/project/details'
    },
];

export default function ProjectSectionOne() {
    return (
        <section className="project-section section-padding pt-0 fix">
            <div className="swiper project-slider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    pagination={{ el: ".dot", clickable: true }}
                    breakpoints={{
                        1399: { slidesPerView: 5 },
                        1199: { slidesPerView: 4 },
                        991: { slidesPerView: 3 },
                        767: { slidesPerView: 2 },
                        575: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    className="swiper-wrapper"
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <div className="project-img-items">
                                <img src={project.image} alt="project" />
                                <div className="overlay-bg"></div>
                                <div className="project-content">
                                    <h3>
                                        <a href={project.link}>{project.title}</a>
                                    </h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-dot text-center">
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    )
}