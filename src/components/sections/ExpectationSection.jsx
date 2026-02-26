import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Layers, Clock, HeartHandshake, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const expectationData = [
  {
    id: 1,
    title: "Absolute Transparency",
    icon: Eye,
    desc: "Clear communication, no confusing tech jargon, and zero hidden fees. You stay informed at every milestone.",
    color: "group-hover:text-blue-400",
    glow: "bg-blue-500/10"
  },
  {
    id: 2,
    title: "Future-Proof Scalability",
    icon: Layers,
    desc: "Modern architecture built for growth, saving you from expensive future rebuilds as your business expands.",
    color: "group-hover:text-purple-400",
    glow: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "On-Time Delivery",
    icon: Clock,
    desc: "Agile project management ensures your product launches on schedule, every time, without compromising quality.",
    color: "group-hover:text-emerald-400",
    glow: "bg-emerald-500/10"
  },
  {
    id: 4,
    title: "Long-Term Partnership",
    icon: HeartHandshake,
    desc: "Beyond the launch, we provide ongoing support and strategy to raise your business to new heights.",
    color: "group-hover:text-rose-400",
    glow: "bg-rose-500/10"
  }
];

export default function ExpectationSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".expect-card", {
      opacity: 1,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="expectations" ref={containerRef} className="relative py-24 bg-[#020617] !text-white overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-6xl font-black !text-white leading-tight mb-6 tracking-tight">
            We go beyond writing code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Here is the value we bring.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            From project inception to long-term scaling, we ensure your digital journey is smooth, transparent, and built for success.
          </p>
        </div>

        {/* EXPECTATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectationData.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="expect-card group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-slate-600 transition-all duration-500"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-[2rem] ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-700 ${item.color}`}>
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold !text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="!text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}