import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

gsap.registerPlugin(ScrollTrigger);

// Clean Dropdown Services List
const serviceCategories = {
  "Website Development (Custom & CMS)": [
    "Custom Website (PHP/MERN/Python)",
    "CMS (WordPress, Webflow)",
    "Landing Page Design",
    "Maintenance & Optimization",
    "API Integration",
  ],
  "UI/UX & Mobile App Design": [
    "Mobile App Design",
    "Website & Dashboard Design",
    "Wireframing & Prototyping",
    "User Research & Testing",
    "Design System Creation",
  ],
  "Graphic Design & Branding": [
    "Logo & Brand Identity",
    "Social Media Creatives",
    "Marketing Materials",
    "Vector Art & Illustrations",
    "Presentation Decks",
  ],
  "Digital Marketing & SEO": [
    "SEO",
    "Social Media Marketing (SMM)",
    "PPC & Google Ads",
    "Content & Copywriting",
    "Email Marketing",
  ],
  "E-Commerce Solutions": [
    "Shopify/WooCommerce Setup",
    "Custom E-Commerce Store",
    "Multi-Vendor Marketplace",
    "Payment Gateway Integration",
    "Inventory Systems",
  ],
  "Custom Software & SaaS": [
    "CRM & ERP Systems",
    "SaaS Development",
    "Cloud & DevOps",
    "Automation Tools",
    "Database Management",
  ],
  "Other / Consultation": [
    "General Inquiry",
    "Project Feasibility",
    "Partnership Opportunities",
    "Technical Support",
  ],
};

// Sirf primary services ki list nikalne ke liye
const primaryServices = Object.keys(serviceCategories);

export default function ContactSection() {
  const containerRef = useRef(null);

  // 1. Form Data State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subService: "", // Nayi field
    message: "",
  });
  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Agar primary service change ho, toh subService ko reset kar do taake ghalat data na jaye
    if (name === "service") {
      setFormData({ ...formData, service: value, subService: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 3. Handle Form Submit (Web3Forms Ke Sath)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Yahan apni access key dalein jab live karein
    console.log("Submitting:", formData);
    alert("Zabardast! Your quote request has been sent.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "+92",
      service: "",
      subService: "",
      message: "",
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Left Side Reveal
      tl.fromTo(
        ".contact-info > *",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
      );

      // Right Side (Form) Reveal
      tl.fromTo(
        ".contact-form-box",
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="contact-form"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#020617] !text-white overflow-hidden z-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ================= LEFT SIDE: INFO & VALUE PROP ================= */}
          <div className="contact-info space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 shadow-lg shadow-blue-500/5">
                Start Your Journey
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight !text-white">
                Let's Discuss Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                  Next Big Idea.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                Share your goals below. We’ll respond within 24 hours with a
                free, custom quote.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@wqtechsolutions.com"
                    className="text-lg font-bold !text-slate-200 group-hover:!text-white transition-colors"
                  >
                    info@wqtechsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                  <Phone className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+923434847819"
                    className="text-lg font-bold !text-slate-200 group-hover:!text-white transition-colors"
                  >
                    +92 343 4847819
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">
                    Visit Us
                  </p>
                  <p className="text-lg font-bold !text-slate-200 group-hover:!text-white transition-colors">
                    Global Offices (Coming Soon)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: THE DYNAMIC FORM ================= */}
          <div className="contact-form-box p-8 lg:p-10 rounded-[2rem] bg-slate-900/40 border border-slate-800 shadow-xl backdrop-blur-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all"
                    required
                  />
                </div>

                {/* Phone Input with Flag Library */}
             <div className="space-y-1.5 custom-phone-wrapper">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneInput
                    international
                    withCountryCallingCode // Yeh jadoo karega (country code input mein dikhayega)
                    defaultCountry="PK"
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              </div>

              {/* Step 1: Primary Service Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  I need expert help with...
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-slate-300 focus:text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select a primary service
                    </option>
                    {primaryServices.map((service, i) => (
                      <option
                        key={i}
                        value={service}
                        className="bg-slate-900 text-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2: Conditional Sub-Category Dropdown (Yeh tab dikhega jab Primary Service select hogi) */}
              {formData.service && (
                <div className="space-y-1.5 animate-[fadeIn_0.5s_ease-in-out]">
                  <label className="text-[11px] font-bold text-blue-400 uppercase tracking-widest ml-1">
                    Specifically...
                  </label>
                  <div className="relative">
                    <select
                      name="subService"
                      value={formData.subService}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/30 text-sm text-white focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select sub-category
                      </option>
                      {serviceCategories[formData.service].map((subItem, i) => (
                        <option
                          key={i}
                          value={subItem}
                          className="bg-slate-900 text-white"
                        >
                          {subItem}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Textarea */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your timeline, budget, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#020617]/50 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:bg-blue-500 !text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-blue-500/25"
              >
                Get My Free Quote
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
