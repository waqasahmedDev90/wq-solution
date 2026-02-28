import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import { Quote, Star, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "WQ Tech upgraded our entire sales process. The platform is fast, pricing is transparent, and conversions are up 40%.",
    name: "Sarah Jenkins",
    title: "CEO, Nova Retail",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "Their custom software agility is rare. Secure, flawless app delivery with lifetime support. A true extension of our team.",
    name: "David Chen",
    title: "Founder, FinFlow Tech",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    text: "UI/UX redesign was unmatched. Delivered ahead of schedule without sacrificing quality. Highly recommended for speed.",
    name: "Marcus Thorne",
    title: "Director, Apex Solutions",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

export default function TestimonialSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".testi-card", 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <section id="testimonials" ref={containerRef} className="py-24 bg-[#020617] !text-white border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SIDE: STATIC CONTENT */}
          <div className="w-full lg:w-1/3">
            <h6 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-bold text-xs uppercase mb-6">
              <CheckCircle size={14} /> Trust Factor
            </h6>
            <h2 className="text-4xl lg:text-[45px] text-white mb-6 leading-tight">
              Global Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Trust Our Work.</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We don't just deliver code; we deliver results that help businesses scale globally with confidence.
            </p>
          </div>

          {/* RIGHT SIDE: COMPACT SLIDER */}
          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 }
              }}
              className="compact-testi-swiper !pb-14"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card h-full p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between group">
                    
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-blue-500 !text-blue-500" />
                        ))}
                      </div>
                      <p className="text-base !text-slate-200 leading-relaxed mb-8 italic">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6">
                      <img src={item.image} className="w-12 h-12 rounded-full border border-blue-500/20" alt="" />
                      <div>
                        <h4 className="text-sm font-bold !text-white">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.title}</p>
                      </div>
                    </div>

                    <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .compact-testi-swiper .swiper-pagination-bullet { background: #1e293b !important; opacity: 1; }
        .compact-testi-swiper .swiper-pagination-bullet-active { background: #3b82f6 !important; width: 20px; border-radius: 4px; }
      `}} />
    </section>
  );
}