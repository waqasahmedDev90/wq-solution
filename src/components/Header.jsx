import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X, Command, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./Button";

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

  // Scroll detection for making it slightly smaller/darker when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Mobile Menu GSAP Animation (Fixed!)
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power4.inOut",
      });
      gsap.fromTo(menuItemsRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= FLOATING DESKTOP HEADER ================= */}
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] lg:w-[85%] max-w-6xl rounded-full border ${
          isScrolled 
            ? "top-4 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : "top-6 py-4 bg-[#0A0A0A]/40 backdrop-blur-md border-white/5 shadow-2xl"
        }`}
      >
        <div className="px-6 lg:px-8 flex items-center justify-between w-full">
          
          {/* Logo */}
          <a href="#" className="relative z-50 inline-flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6D00F1] to-[#9700FC] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Command size={18} />
            </div>
            <span className="text-xl lg:text-2xl font-black tracking-tight text-white">
              WQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D00F1] to-[#9700FC]">Tech</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors py-1 group"
              >
                {link.name}
                {/* Minimal Hover Indicator */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#9700FC] opacity-0 group-hover:opacity-100 group-hover:-bottom-2 transition-all duration-300 shadow-[0_0_10px_#9700FC]"></span>
              </a>
            ))}
          </nav>

          {/* Buttons Area */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Desktop CTA uses your reusable component */}
            <div className="hidden lg:block">
              <PrimaryButton href="#contact">Get a Quote</PrimaryButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#1A1C28] border border-white/10 flex items-center justify-center text-white focus:outline-none hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>


      {/* ================= FULL SCREEN MOBILE MENU ================= */}
      {/* BUG FIX: 
        Yahan se Tailwind ki 'invisible' aur '-translate-y-full' classes hata di hain.
        Unki jagah inline 'style' laga diya hai taake GSAP directly handle kar sake 
        bina classes clash kiye.
      */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-8"
        style={{ opacity: 0, visibility: 'hidden', transform: 'translateY(-100%)' }}
      >
        {/* Decorative Glowing Orbs for Mobile Menu */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#6D00F1]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#9700FC]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col gap-6 relative z-10 mt-16">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-gray-400 hover:text-white transition-colors tracking-tight flex items-center gap-4 group"
            >
              <span className="text-[#9700FC] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                <ArrowRight size={28} />
              </span>
              {link.name}
            </a>
          ))}
          
          {/* Mobile CTA */}
          <div ref={(el) => (menuItemsRef.current[navLinks.length] = el)} className="mt-8 pt-8 border-t border-white/10">
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#6D00F1] to-[#9700FC] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(109,0,241,0.4)] transition-shadow"
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