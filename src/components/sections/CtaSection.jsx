import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const containerRef = useRef(null);
  const blobRef = useRef(null);

  // Smooth Scroll Logic
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Subtle Mouse Parallax Effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 60;
    const yPos = (clientY / window.innerHeight - 0.5) * 60;

    gsap.to(blobRef.current, {
      x: xPos,
      y: yPos,
      duration: 1.5,
      ease: "power2.out"
    });
  };

  useGSAP(() => {
    gsap.fromTo(".cta-content > *",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-24 bg-[#020617] overflow-hidden border-t border-slate-800/50"
    >
      
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] pointer-events-none"></div>

      {/* Mouse Follow Glow */}
      <div 
        ref={blobRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none will-change-transform"
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Content Container (Max width limited to prevent stretching) */}
        <div className="cta-content max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Normal Sized Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-[11px] tracking-widest mb-6">
            <Sparkles size={14} /> READY TO SCALE?
          </div>

          {/* Normal Sized Headline (Changed from 8xl to 4xl/5xl) */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight !text-white">
            Let’s Map Out <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Your Growth.
            </span>
          </h2>

          {/* Normal Sized Subheading */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
            Partner with a centralized team that provides future-proof web, app, and marketing solutions designed to supercharge growth.
          </p>

          {/* Standard Professional Button */}
          <button
            onClick={handleScrollToContact}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 !text-white font-semibold text-sm transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Start Your Project Today
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
        </div>
      </div>
    </section>
  );
}