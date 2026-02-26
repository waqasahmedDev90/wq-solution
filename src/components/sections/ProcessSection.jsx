import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    icon: Search,
    desc: "We dive deep into your business goals, target audience, and technical requirements. No guesswork—just a clear alignment on your vision from the start.",
    gradient: "from-blue-600/20 to-indigo-600/5",
    accent: "bg-blue-500"
  },
  {
    id: "02",
    title: "Strategy & Design",
    icon: PenTool,
    desc: "We map out the user journey and craft intuitive, visually stunning prototypes. You get to see and feel the design before a single line of code is written.",
    gradient: "from-indigo-600/20 to-purple-600/5",
    accent: "bg-indigo-500"
  },
  {
    id: "03",
    title: "Development & Testing",
    icon: Code2,
    desc: "Our engineers build your project using modern technologies. We then run rigorous quality assurance tests to guarantee flawless, bug-free performance.",
    gradient: "from-purple-600/20 to-pink-600/5",
    accent: "bg-purple-500"
  },
  {
    id: "04",
    title: "Launch & Scale",
    icon: Rocket,
    desc: "We handle the deployment for a smooth launch. Once live, we provide ongoing support and data-driven marketing to ramp up your growth.",
    gradient: "from-pink-600/20 to-rose-600/5",
    accent: "bg-pink-500"
  }
];

export default function ProcessSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal Cards with a "Lift" effect
    gsap.from(".process-item", {
      opacity: 0,
      y: 100,
      scale: 0.9,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate the vertical progress line
    gsap.fromTo(".progress-bar-inner", 
      { height: "0%" },
      { 
        height: "100%", 
        ease: "none",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 40%",
          end: "bottom 60%",
          scrub: 1
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="relative py-32 bg-[#020617] !text-white z-40">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
            Our Roadmap
          </div>
          <h2 className="text-5xl lg:text-7xl font-black !text-white tracking-tighter mb-6">
            A Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Methodology.</span>
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            From initial spark to global scale, we follow a rigorous path to ensure your digital product stands out.
          </p>
        </div>

        {/* PROCESS LIST */}
        <div className="relative process-list">
          
          {/* VERTICAL PROGRESS LINE */}
          <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800/50">
            <div className="progress-bar-inner w-full bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>

          <div className="space-y-24 lg:space-y-40">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 !== 0;

              return (
                <div key={step.id} className={`process-item relative flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* CARD CONTAINER */}
                  <div className={`w-full lg:w-[45%] group`}>
                    <div className={`relative p-10 rounded-[3rem] bg-slate-900/60 border border-slate-800 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-slate-600 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]`}>
                      
                      {/* Background Gradient Glow */}
                      <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${step.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                      
                      {/* Big Background ID */}
                      <span className="absolute top-4 right-8 text-8xl font-black text-white/[0.03] pointer-events-none group-hover:text-white/[0.07] transition-colors">
                        {step.id}
                      </span>

                      <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl ${step.accent} bg-opacity-20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7 !text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-extrabold !text-white mb-4 tracking-tight">{step.title}</h3>
                        <p className="!text-slate-400 leading-relaxed text-lg font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CENTER DOT (Intersection) */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full bg-[#020617] border-4 border-slate-800 group-hover:border-blue-500 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,1)]`}></div>
                  </div>

                  {/* SPACER FOR GRID */}
                  <div className="hidden lg:block lg:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}