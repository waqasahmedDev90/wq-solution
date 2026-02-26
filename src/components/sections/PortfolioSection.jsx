import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    id: 1,
    name: "Nova Retail",
    category: "E-Commerce Solutions • UI/UX Design",
    impact: "A complete digital storefront revamp that streamlined the checkout process and boosted mobile sales by 120%.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    name: "FinFlow App",
    category: "App Development • Custom Software",
    impact: "A secure, intuitive cross-platform application built from scratch to simplify wealth management for over 50,000 active users.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=1200&q=80",
    color: "from-indigo-600 to-purple-500"
  },
  {
    id: 3,
    name: "Apex Tech Rebrand",
    category: "Graphic Design • Digital Marketing",
    impact: "A bold new brand identity paired with a targeted SEO and PPC campaign that tripled organic lead generation in six months.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    color: "from-purple-600 to-pink-500"
  }
];

export default function PortfolioSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".portfolio-reveal", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="portfolio" ref={containerRef} className="py-24 bg-[#020617] overflow-hidden !text-white">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 portfolio-reveal">
          <h6 className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-bold text-sm uppercase mb-6 tracking-widest">
            Our Portfolio
          </h6>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight !text-white">
            Explore How we Transform Complex Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Experiences.</span>
          </h2>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative portfolio-reveal">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="portfolio-swiper !pb-20"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-w-[350px] sm:max-w-[600px] lg:max-w-[850px]">
                {({ isActive }) => (
                  <div className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-700 border border-white/10 shadow-2xl ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-[2px]'}`}>
                    
                    {/* Image Layer */}
                    <div className="h-[400px] lg:h-[550px] w-full relative">
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
                    </div>

                    {/* Content Layer */}
                    <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
                       <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-xs font-bold uppercase mb-4`}>
                          {project.category}
                       </div>
                       <h3 className="text-3xl lg:text-5xl font-black !text-white mb-4 tracking-tight">{project.name}</h3>
                       <p className="!text-slate-300 text-base lg:text-lg max-w-2xl mb-8 leading-relaxed line-clamp-2">
                         {project.impact}
                       </p>
                       
                       <button className="group inline-flex items-center gap-3 bg-white !text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:!text-white transition-all duration-300">
                         View Case Study
                         <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM NAVIGATION BUTTONS */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-2 sm:px-10 pointer-events-none">
            <button className="swiper-button-prev-custom pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center !text-white hover:bg-blue-600 transition-all shadow-xl">
              <ArrowLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
            <button className="swiper-button-next-custom pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center !text-white hover:bg-blue-600 transition-all shadow-xl">
              <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.2) !important;
          width: 12px;
          height: 12px;
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 30px;
          border-radius: 10px;
        }
      `}} />
    </section>
  );
}