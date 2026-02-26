import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSectionThree() {
  const containerRef = useRef(null);

  // Fancybox setup for Video
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
      Toolbar: true,
    });
    return () => Fancybox.destroy();
  }, []);

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      // 1. Pehle ensure karein ke elements visible hone ke liye ready hon
      gsap.set(".gsap-fade-up, .gsap-scale-in", { visibility: "visible" });

      // 2. Left side content (Heading, Para, Buttons)
      tl.fromTo(
        ".gsap-fade-up",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1.2,
          clearProps: "all", // Animation ke baad styles saaf taake CSS wapas control le le
        },
      )
        // 3. Right side (Video Box / Image)
        .fromTo(
          ".gsap-scale-in",
          {
            scale: 0.8,
            opacity: 0,
            rotation: 3,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.7)",
            clearProps: "transform,opacity",
          },
          "-=1", // Content ke khatam hone se pehle shuru hoga
        );

      // 4. Sab se zaroori: Neechay wale sections ke liye refresh
      gsap.registerPlugin(ScrollTrigger);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden  pt-32 pb-50 lg:pt-44 lg:pb-20"
    >
      {/* --- Background Glowing Effects (Images ki jagah modern look) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* ================= LEFT CONTENT (TEXT & BUTTONS) ================= */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
            {/* Subheading Label */}
            <div className="gsap-fade-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Top-Tier Digital Agency
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="gsap-fade-up text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
              Build a Powerful, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                Trustworthy Digital
              </span>{" "}
              Presence.
            </h1>

            {/* Description */}
            <p className="gsap-fade-up text-slate-300 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed">
              A full-service digital tech agency, partnering with growing
              businesses to deliver impactful web, software, and marketing
              solutions that drive profitable growth.
            </p>

            {/* Buttons Group (Tailwind Design) */}
            {/* Buttons Group (Tailwind Design) */}
            <div className="gsap-fade-up flex flex-wrap items-center gap-5 mb-14">
              {/* Primary Button */}
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-blue-600 !text-white px-8 py-4 rounded-full font-sans font-bold text-base transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 before:!hidden after:!hidden"
              >
                Let's Talk Strategy
                <span className="flex items-center justify-center bg-white !text-blue-600 rounded-full w-8 h-8 transition-transform duration-300 group-hover:translate-x-1 before:!hidden after:!hidden">
                  <i className="icon-arrow-right"></i>
                </span>
              </Link>

              {/* Secondary Button */}
              <Link
                to="/services"
                className="group flex items-center justify-center gap-3 bg-white/5 border border-white/20 !text-white px-8 py-4 rounded-full font-sans font-bold text-base backdrop-blur-sm transition-all duration-300 hover:!bg-white hover:!text-slate-900 hover:border-white hover:-translate-y-1 before:!hidden after:!hidden"
              >
                Explore Our Services
                <i className="icon-arrow-right transition-transform duration-300 group-hover:translate-x-1 before:!hidden after:!hidden"></i>
              </Link>
            </div>

            {/* Social Icons (Modern Row) */}
            <div className="gsap-fade-up flex items-center gap-6">
              <span className="text-slate-400 font-medium text-sm uppercase tracking-widest">
                Follow Us —
              </span>
              <div className="flex gap-4">
                {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                  (icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:border-blue-600"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT (VIDEO GLASS CARD) ================= */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="gsap-scale-in relative w-full max-w-sm p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-white/20 rounded-[2rem] -m-4 pointer-events-none hidden sm:block opacity-50"></div>

              <div className="relative aspect-video rounded-2xl bg-slate-800 overflow-hidden group flex items-center justify-center mb-6">
                {/* Video Placeholder Image/Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-50"></div>

                {/* Play Button */}
                <a
                  data-fancybox
                  data-src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  data-type="iframe"
                  className="relative z-10 w-20 h-20 flex items-center justify-center bg-white text-blue-600 rounded-full cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <i className="fa-duotone fa-play text-2xl ml-1"></i>
                  {/* Ping Animation behind play button */}
                  <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></span>
                </a>
              </div>

              <div className="text-center">
                <h5 className="text-xl font-bold text-white mb-2">
                  Watch Agency Reel
                </h5>
                <p className="text-sm text-slate-400 leading-relaxed">
                  See how we deliver impactful digital solutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
