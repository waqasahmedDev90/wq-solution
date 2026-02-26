import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, Command, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    // Subtle reveal animation for footer columns
    gsap.fromTo(".footer-col",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative pt-20 pb-8 bg-[#020617] border-t border-slate-800/50 overflow-hidden z-20">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-t-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col space-y-6">
            {/* Logo area (Using text and icon for now, you can replace with img later) */}
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Command size={20} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                WQ <span className="text-blue-500">Tech</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs pr-4">
              Your Trusted Partner for Future Proof Software & Digital Solutions. We supercharge growth and skyrocket revenue.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col space-y-6 lg:pl-8">
            <h3 className="text-white font-bold text-lg tracking-wide">Company</h3>
            <ul className="space-y-3">
              {['Services', 'Portfolio', 'About Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@wqtechsolutions.com" className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300 group">
                  <Mail size={18} className="mt-0.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium break-all">info@wqtechsolutions.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+923434847819" className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300 group">
                  <Phone size={18} className="mt-0.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm font-medium">+92 343 4847819</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-0.5 text-slate-500" />
                <span className="text-sm font-medium">Global Offices <br/><span className="text-xs text-blue-500/80">(Coming Soon)</span></span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="footer-col space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Linkedin, link: "#" },
                { Icon: Facebook, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Twitter, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="footer-col border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            Copyright © {new Date().getFullYear()} <span className="text-slate-300">WQ Tech Solutions</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}