import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X, Command, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Us", href: "#about" },
  { name: "Blog", href: "#blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  // 1. Smart Scroll Detection (Header ko transparent se dark karne ke liye)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Lock Body Scroll Jab Mobile Menu Open Ho
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // 3. GSAP Mobile Menu Animation ("Alag hi level" effect)
  useGSAP(() => {
    if (isMobileMenuOpen) {
      // Menu Overlay Animation
      gsap.to(mobileMenuRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.inOut",
      });
      // Links Stagger Animation
      gsap.fromTo(menuItemsRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out", delay: 0.3 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        autoAlpha: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP & MOBILE HEADER ================= */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="relative z-50 inline-flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300">
              <Command size={20} />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              WQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Tech</span>
            </span>
          </a>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 group"
              >
                {link.name}
                {/* Glowing Underline on Hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Desktop CTA */}
            <a 
              href="#contact-form" 
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold text-sm hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group"
            >
              Get a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>


      {/* ================= MOBILE MENU OVERLAY (The Next Level Part) ================= */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-2xl invisible -translate-y-full flex flex-col justify-center px-6"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col gap-6 relative z-10 mt-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={() => setIsMobileMenuOpen(false)} // Menu band karega click par
              className="text-4xl sm:text-5xl font-black text-slate-400 hover:text-white transition-colors tracking-tight flex items-center gap-4 group"
            >
              <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                <ArrowRight size={32} />
              </span>
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA Button */}
          <div ref={(el) => (menuItemsRef.current[navLinks.length] = el)} className="mt-8 pt-8 border-t border-slate-800">
            <a 
              href="#contact-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow"
            >
              Get a Quote Today
              <ArrowRight size={20} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}