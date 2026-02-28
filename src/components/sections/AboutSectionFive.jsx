import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrimaryButton, SecondaryButton } from "../Button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Text Animations
      tl.fromTo(
        ".about-fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      )
        // Image Animation (Right se aayegi)
        .fromTo(
          ".about-image",
          { x: 50, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.6", // Text ke sath hi start ho jaye
        )
        // Cards Animation
        .fromTo(
          ".grid-card",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        )
        // CTA Animation
        .fromTo(
          ".cta-box",
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 bg-slate-950 overflow-hidden !text-white"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ================= HEADER, INTRO & IMAGE ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <h6 className="about-fade-up inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6">
              About WQ Tech Solutions
            </h6>
            <h2 className="about-fade-up text-4xl lg:text-5xl font-extrabold leading-tight mb-8 !text-white">
              All-in-one Agency Capable of Handling Your{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                Entire Brand Ecosystem
              </span>
            </h2>
            <p className="about-fade-up !text-slate-300 text-lg leading-relaxed mb-6">
              Most tech projects fail because agencies build what is
              superficial, not what is necessary. At WQ Tech Solutions, we close
              that gap. We are a specialized collective of developers,
              designers, and strategists who evaluate your daily operations
              first.
            </p>
            <p className="about-fade-up !text-slate-300 text-lg leading-relaxed">
              Whether we are engineering custom software and mobile apps,
              designing intuitive UI/UX and premium brand identities, or driving
              revenue through targeted marketing, we build the exact systems to
              resolve your constraints.{" "}
              <span className="!text-white font-semibold">
                No extraneous complexity. Just clean, functional technology.
              </span>
            </p>
          </div>

          {/* Right Side: Professional Image with Glassmorphism Badge */}
          <div className="lg:w-1/2 about-image relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 group shadow-[0_0_40px_rgba(37,99,235,0.15)]">
              {/* Blue Tint Overlay that fades on hover */}
              <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

              {/* Unsplash Tech Team Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Tech Team"
                className="w-full h-[400px] lg:h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />

              {/* Floating Glass Badge */}
              <div
                className="absolute bottom-6 lg:bottom-10 -left-6 lg:-left-10 z-20 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-2xl animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <i className="fa-duotone fa-code text-2xl !text-white"></i>
                </div>
                <div>
                  <h4 className="!text-white font-extrabold text-xl m-0">
                    10+ Years
                  </h4>
                  <p className="!text-blue-300 text-sm m-0">
                    Of Digital Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= "HOW WE BUILD" GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="grid-card p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
              <i className="fa-duotone fa-compass-drafting text-2xl !text-blue-400 group-hover:!text-white transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 !text-white group-hover:!text-blue-400 transition-colors">
              Architecture Before Aesthetics
            </h4>
            <p className="!text-slate-400 leading-relaxed text-sm">
              We architect databases and user flows before touching a design.
              When you need to add advanced capabilities years from now, you
              won’t have to rebuild from scratch.
            </p>
          </div>

          <div className="grid-card p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-500 group">
            <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-500">
              <i className="fa-duotone fa-compass text-2xl !text-indigo-400 group-hover:!text-white transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 !text-white group-hover:!text-indigo-400 transition-colors">
              Behavior-Driven Design
            </h4>
            <p className="!text-slate-400 leading-relaxed text-sm">
              A beautiful app is useless if users cannot find the checkout. We
              prototype the exact steps your customers take to remove friction
              and drive action.
            </p>
          </div>

          <div className="grid-card p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 group">
            <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-500">
              <i className="fa-duotone fa-diagram-project text-2xl !text-purple-400 group-hover:!text-white transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 !text-white group-hover:!text-purple-400 transition-colors">
              One Cohesive Ecosystem
            </h4>
            <p className="!text-slate-400 leading-relaxed text-sm">
              Your website, inventory, and marketing should not exist in silos.
              We connect your backend systems so they interact natively,
              eradicating manual data entry.
            </p>
          </div>
        </div>

        {/* ================= PHILOSOPHY MODAL BUTTON ================= */}
        <div className="about-fade-up flex justify-center mb-20">
          <button className="group flex items-center gap-3 !text-white font-semibold text-lg hover:!text-blue-400 transition-colors"></button>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            Read Our Engineering Philosophy
          </PrimaryButton>
        </div>

        {/* ================= CALL TO ACTION (CTA) ================= */}
        <div className="cta-box p-10 lg:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#1A0B2E] via-[#2A1152] to-[#140628] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl border border-[#9700FC]/30">
          {/* Subtle Dotted Background Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #9700FC 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>

          {/* Soft Glow behind the text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#6D00F1] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Let’s evaluate your current setup.
            </h3>
            <p className="text-[#D4B3FF] text-lg font-medium leading-relaxed">
              Bring us your inefficient workflows, an outdated website, or a
              brand-new app idea. We will architect the solution and transparent
              roadmap to build it.
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 whitespace-nowrap">
            {/* <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-[#6D00F1] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(151,0,252,0.4)] transition-all duration-300"
            >
              Free Technical Consultation
              <div className="w-8 h-8 rounded-full bg-[#6D00F1]/10 flex items-center justify-center group-hover:bg-[#6D00F1] group-hover:text-white transition-colors duration-300">
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </div>
            </a> */}

            <SecondaryButton> Free Technical Consultation</SecondaryButton>
          </div>
        </div>
      </div>

      {/* ================= MODAL / POP-UP ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/80 transition-opacity">
          <div className="bg-slate-900 border border-white/10 w-full max-w-3xl rounded-[2rem] p-8 sm:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center !text-slate-400 hover:!text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="mb-10 text-center sm:text-left">
              <h6 className="!text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">
                Expanded View
              </h6>
              <h3 className="text-3xl sm:text-4xl font-extrabold !text-white mb-4">
                Our Engineering Philosophy
              </h3>
              <p className="!text-slate-300 text-lg border-b border-white/10 pb-8">
                Technology should simplify your workflow, not give you another
                platform to manage. Here is exactly how we approach your
                project:
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-12 h-12 shrink-0 bg-blue-600/20 !text-blue-400 rounded-full flex items-center justify-center font-bold text-xl">
                  01
                </div>
                <div>
                  <h5 className="font-bold !text-white text-xl mb-2">
                    Radical Transparency
                  </h5>
                  <p className="!text-slate-400 leading-relaxed">
                    You are never left in the dark. We give you direct access to
                    our staging environments so you can test and interact with
                    your software as it is being built.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-12 h-12 shrink-0 bg-indigo-600/20 !text-indigo-400 rounded-full flex items-center justify-center font-bold text-xl">
                  02
                </div>
                <div>
                  <h5 className="font-bold !text-white text-xl mb-2">
                    Future-Proof Tech Stacks
                  </h5>
                  <p className="!text-slate-400 leading-relaxed">
                    We never compromise on foundational architecture. We build
                    using modern, lightweight frameworks so your platform
                    remains perfectly resilient.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-12 h-12 shrink-0 bg-purple-600/20 !text-purple-400 rounded-full flex items-center justify-center font-bold text-xl">
                  03
                </div>
                <div>
                  <h5 className="font-bold !text-white text-xl mb-2">
                    Beyond Launch Day
                  </h5>
                  <p className="!text-slate-400 leading-relaxed">
                    Launching isn't the finish line; it’s the beginning. We stay
                    on board as your dedicated tech partner to monitor server
                    health, deploy updates, and keep your data secure while you
                    run your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
