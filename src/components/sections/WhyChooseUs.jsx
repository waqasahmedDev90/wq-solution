import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, BadgeDollarSign, Infinity as InfinityIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    icon: Cpu,
    title: "Tailored Solutions & Modern Tech",
    desc: "We don't do cookie-cutter. By utilizing the latest AI, cloud technologies, and modern frameworks, we build enterprise custom software and digital solutions precisely engineered for your brand goals.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    icon: BadgeDollarSign,
    title: "Transparent Pricing & Maximum ROI",
    desc: "Premium quality shouldn't come with hidden fees. We offer crystal-clear pricing and cost-efficient digital strategies designed to deliver exceptional results without breaking the bank.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    icon: InfinityIcon,
    title: "Agile Delivery & Lifetime Support",
    desc: "We operate with zero friction and maximum efficiency. Our process secures rapid, smooth deployments and ongoing support to keep your business expanding without vulnerability.",
    color: "from-purple-500 to-pink-500"
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".feature-card");
    
    // Bulletproof Animation: 0 se 1 tak ka safar
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Refresh calculations for safety
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <section id="why-choose-us" ref={containerRef} className="relative py-28 bg-[#020617] !text-white overflow-hidden border-t border-slate-800">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 feature-card">
          <h6 className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
            Our Advantage
          </h6>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight !text-white tracking-tight">
            Why Brands Partner with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              WQ Tech Solutions.
            </span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="feature-card group relative p-10 rounded-[2.5rem] bg-slate-900/30 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
                
                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10`}>
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 !text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold !text-white mb-5 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="!text-slate-400 leading-relaxed text-base font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${item.color} group-hover:w-1/2 transition-all duration-500 rounded-full`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}