import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Lucide Icons import kiye hain (Modern & Clean)
import { Monitor, LayoutTemplate, PenTool, Megaphone, ShoppingCart, Smartphone, Cpu, ArrowRight, AlertTriangle, CheckCircle, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= SAARA CONTENT YAHAN HAI =================
const servicesData = [
  {
    id: 1,
    icon: Monitor, // Naya icon
    teaserHeadline: "Stop Losing Potential Customers to a Slow, Outdated Website",
    hook: "Your website should be your hardest-working employee, not a digital brochure gathering dust. We build fast, eye-catchy and mobile-friendly websites designed to capture attention and drive sales.",
    expandedTitle: "Website Development: Engineered for Growth",
    problem: "Most businesses lose customers before they even speak to them because of slow, confusing, or outdated websites. If your site doesn't load instantly, you are missing out on serious ROI.",
    solution: "When you work with one of the top website development companies, you get strategic, high-performing websites customized to your specific business goals. You get a lead-generating machine.",
    deliverables: [
      { title: "Mobile-First Design", desc: "Flawless functionality on phones, tablets, and desktops." },
      { title: "Lightning-Fast Speeds", desc: "Optimized code and images so your customers never have to wait." },
      { title: "Built-In SEO", desc: "Foundational search engine optimization so you actually show up on Google." },
      { title: "Easy-to-Manage Dashboard", desc: "A user-friendly backend so you can update text and images yourself." },
    ],
    testimonial: "They built a site that finally matches the quality of our business. Our online leads doubled within the first month of launching.",
    client: "Sarah Jenkins, TechCorp",
    faqs: [
      { q: "How long does it take?", a: "Most standard business websites go from kickoff to launch in 3–4 weeks." },
      { q: "Do I have to write the text?", a: "We can work with your existing content, or you can add our copywriting package." },
    ],
    ctaText: "Book Your Free Strategy Call",
  },
  {
    id: 2,
    icon: LayoutTemplate,
    teaserHeadline: "Create Digital Experiences Your Customers Love to Use",
    hook: "Frustrating interfaces cost you users. Whether you are a startup or an established company, we design intuitive, beautiful digital experiences that feel like second nature.",
    expandedTitle: "UI/UX Design: Bridging Logic and Beauty",
    problem: "If your app or website is confusing to navigate, users will abandon it within seconds. Good code means nothing if the human experience is broken.",
    solution: "Unlike standard firms, we apply user psychology to wireframes and prototypes to remove friction. It’s why the best companies trust us to design their user journeys.",
    deliverables: [
      { title: "User Research & Flow", desc: "Mapping out the exact journey your customers take." },
      { title: "Interactive Prototypes", desc: "Clickable designs so you can feel the product before it's coded." },
      { title: "Pixel-Perfect UI", desc: "Stunning, on-brand visual designs." },
      { title: "Developer Handoff", desc: "Clean assets and style guides ready for coding." },
    ],
    testimonial: "Our users finally understand the platform without needing a tutorial. Support tickets dropped by half.",
    client: "David Miller, SaaS Inc",
    faqs: [
      { q: "Do you code the design too?", a: "This service focuses entirely on visual design, but our dev team can seamlessly bring it to life!" },
    ],
    ctaText: "Start Your Design Project",
  },
  {
    id: 3,
    icon: PenTool,
    teaserHeadline: "Look as Premium as the Services You Provide",
    hook: "Good design builds instant trust. From cohesive website design elements to a standout business card, we create striking visual identities that capture your brand's personality.",
    expandedTitle: "Graphic Design: Visuals That Speak Volumes",
    problem: "Looking like everyone else means blending in. If your visuals look cheap or inconsistent, potential customers will assume your services are too.",
    solution: "We craft premium, cohesive branding that demands attention and communicates your value before a single word is read.",
    deliverables: [
      { title: "Logo & Brand Identity", desc: "Complete visual systems, including typography and color palettes." },
      { title: "Social Media Kits", desc: "Eye-catching templates for Instagram, LinkedIn, and Facebook." },
      { title: "Print & Packaging", desc: "Business cards, brochures, and physical product designs." },
      { title: "Pitch Decks", desc: "Professional slides that win clients and investors." },
    ],
    testimonial: "They completely transformed our brand. We finally look as premium as the service we provide.",
    client: "Elena Rodriguez, Vogue Studios",
    faqs: [
      { q: "Do I own the designs?", a: "Absolutely. Once the project is complete, you receive full ownership and all source files." },
    ],
    ctaText: "Upgrade Your Brand Today",
  },
  {
    id: 4,
    icon: Megaphone,
    teaserHeadline: "Get Found by the Customers Who Are Ready to Buy Today",
    hook: "Stop shouting into the void. Guided by an expert digital marketing strategist, we build targeted, data-driven marketing campaigns that put your business right in front of buyers.",
    expandedTitle: "Digital Marketing: Predictable, Sustainable expansion",
    problem: "Wasting money on ads that don't convert is exhausting. Getting likes is nice, but likes don't pay the bills, sales do.",
    solution: "We ditch the vanity metrics and focus on ROI. Turn your digital presence into a lead-generation engine with our robust marketing tactics.",
    deliverables: [
      { title: "Paid Advertising (PPC)", desc: "Highly optimized Google and Meta ads." },
      { title: "SEO Optimization", desc: "Long-term strategies to dominate organic search results." },
      { title: "Social Media Management", desc: "Compelling content that builds a loyal community." },
      { title: "Email Marketing", desc: "Automated sequences that nurture leads into buyers." },
    ],
    testimonial: "In three months, they cut our cost-per-lead by 40% and doubled our inbound inquiries.",
    client: "Michael Chang, AutoPro",
    faqs: [
      { q: "When will I see results?", a: "Paid ads generate traffic immediately, while SEO typically shows major growth in 3–6 months." },
    ],
    ctaText: "Get a Free Marketing Audit",
  },
  {
    id: 5,
    icon: ShoppingCart,
    teaserHeadline: "Stop Abandoned Carts with a Frictionless Checkout Experience",
    hook: "Ready to sell while you sleep? We build secure, lightning-fast e-commerce solutions optimized for frictionless checkout and maximum conversions.",
    expandedTitle: "E-commerce: Seamless Shopping Experiences",
    problem: "Abandoned carts kill your e-commerce business. If your checkout is clunky or your product pages are slow, buyers will simply go to Amazon instead.",
    solution: "We build robust online stores on platforms like Shopify and WooCommerce that prioritize speed, security, and an effortless purchasing journey.",
    deliverables: [
      { title: "Custom Storefronts", desc: "Beautiful layouts designed to showcase your products." },
      { title: "Secure Payment Gateways", desc: "Integration with Stripe, PayPal, and more." },
      { title: "Inventory Management", desc: "Easy-to-use backends to track your stock effortlessly." },
      { title: "Abandoned Cart Recovery", desc: "Automated emails to win back hesitant shoppers." },
    ],
    testimonial: "Our conversion rate jumped from 1.2% to over 3.5% just weeks after launching the new store.",
    client: "Jessica Smith, Bloom Beauty",
    faqs: [
      { q: "Can I add products myself later?", a: "Yes! We provide full training so you can manage inventory and add products independently." },
    ],
    ctaText: "Start Selling Online",
  },
  {
    id: 6,
    icon: Smartphone,
    teaserHeadline: "Launch a Bug-Free App Your Users Won't Delete",
    hook: "Have a game-changing app idea? We build high-performing, intuitive applications for iOS and Android that users actually want to keep on their home screen.",
    expandedTitle: "App Development: From Concept to App Store",
    problem: "A buggy app destroys your reputation instantly. Choosing the wrong tech stack can result in endless crashes, poor user experience, and costly rebuilds.",
    solution: "We engineer robust mobile apps optimized for long-term reliability. From custom APIs to flawless UI, we handle the entire lifecycle.",
    deliverables: [
      { title: "iOS & Android Apps", desc: "Reaching your users no matter what device they use." },
      { title: "Custom APIs & Backend", desc: "The invisible engine that powers your app securely." },
      { title: "Rigorous QA Testing", desc: "Stress-testing every button and feature before launch." },
      { title: "App Store Launch Support", desc: "Handling the submission and approval process for you." },
    ],
    testimonial: "They didn't just write code; they helped us refine our core features. Launch day was flawless.",
    client: "Ryan Gosling, FitLife App",
    faqs: [
      { q: "Do you build Native or Cross-Platform?", a: "We do both (Swift/Kotlin and React Native/Flutter) and recommend the best approach based on your needs." },
    ],
    ctaText: "Discuss Your App Idea",
  },
  {
    id: 7,
    icon: Cpu,
    teaserHeadline: "Custom Software That Saves You Hours Every Week",
    hook: "We are a custom software development company replacing rigid off-the-shelf tools with bespoke internal web apps and CRM systems designed for your workflows.",
    expandedTitle: "Custom Software: Built for Your Business Workflow",
    problem: "Forcing your business into generic SaaS tools creates massive roadblocks. When your systems don't talk to each other, your team wastes hours on manual data entry.",
    solution: "We build secure custom software that automates your processes, saving you time and drastically reducing human error.",
    deliverables: [
      { title: "Workflow Automation", desc: "Eliminating repetitive manual tasks across departments." },
      { title: "Custom CRMs & ERPs", desc: "Managing your customers and resources your specific way." },
      { title: "Secure Cloud Architecture", desc: "Swift and resilient hosting built to handle heavy data loads." },
      { title: "Ongoing Maintenance", desc: "Dedicated support to keep your software updated and secure." },
    ],
    testimonial: "The internal dashboard they built saved our team an estimated 20 hours of manual data entry every single week.",
    client: "Thomas Wright, Logistics Plus",
    faqs: [
      { q: "Is my company data safe?", a: "Security is our top priority. We use industry-standard encryption and robust authentication protocols." },
    ],
    ctaText: "Book a Technical Consultation",
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(".service-header",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(".service-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeService]);

  return (
    <section id="services" ref={containerRef} className="relative py-28 bg-slate-950 overflow-hidden !text-white">
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 service-header">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 shadow-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="!text-slate-300 font-semibold text-sm uppercase tracking-widest">Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 !text-white tracking-tight">
            End-to-End Digital Expertise, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              managed under one roof.
            </span>
          </h2>
        </div>

        {/* ================= PREMIUM SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="service-card group cursor-pointer relative h-full flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-slate-700"
              >
                {/* Glowing Light Effect inside the card on Hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex-1">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 shadow-lg">
                    <IconComponent className="w-8 h-8 !text-blue-400 group-hover:!text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-2xl font-bold mb-4 !text-white leading-snug group-hover:!text-blue-100 transition-colors">
                    {service.teaserHeadline}
                  </h4>
                  <p className="!text-slate-400 leading-relaxed mb-8 text-base">
                    {service.hook}
                  </p>
                </div>

                {/* Bottom Interactive Button Area */}
                <div className="relative z-10 mt-auto pt-6 border-t border-slate-800/50 group-hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between !text-slate-300 font-semibold group-hover:!text-blue-400 transition-colors">
                    <span>Explore Detail</span>
                    <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:!text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MODAL / EXPANDED VIEW ================= */}
      {activeService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-slate-950/90 transition-opacity"
          onClick={() => setActiveService(null)} 
        >
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-6 sm:p-12 relative shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center !text-white transition-all z-50 shadow-lg hover:scale-110"
            >
              <Monitor className="w-5 h-5 rotate-45" /> {/* Use generic icon or lucide 'X' equivalent visually */}
            </button>

            {/* Modal Content */}
            <div className="pr-4 mt-6 sm:mt-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
                <activeService.icon className="w-10 h-10 !text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white mb-10 border-b border-slate-800 pb-8 pr-10 leading-tight">
                {activeService.expandedTitle}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-500/5 p-8 rounded-3xl border border-red-500/10 hover:border-red-500/30 transition-colors">
                  <h5 className="!text-red-400 font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> The Problem
                  </h5>
                  <p className="!text-slate-300 leading-relaxed text-base">
                    {activeService.problem}
                  </p>
                </div>
                <div className="bg-green-500/5 p-8 rounded-3xl border border-green-500/10 hover:border-green-500/30 transition-colors">
                  <h5 className="!text-green-400 font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> The Solution
                  </h5>
                  <p className="!text-slate-300 leading-relaxed text-base">
                    {activeService.solution}
                  </p>
                </div>
              </div>

              {/* What You Get */}
              <h4 className="text-2xl font-bold !text-white mb-8">What You Get (Core Deliverables)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {activeService.deliverables.map((item, index) => (
                  <div key={index} className="flex gap-5 p-5 rounded-2xl bg-slate-800/30 border border-slate-800 hover:bg-slate-800/60 transition-colors">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 !text-blue-400" />
                    </div>
                    <div>
                      <h6 className="!text-white font-bold mb-1 text-lg">{item.title}</h6>
                      <p className="!text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="relative bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl mb-16 overflow-hidden">
                <Quote className="absolute -top-4 -left-4 w-32 h-32 !text-blue-500/10 rotate-180" />
                <div className="relative z-10">
                  <p className="!text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                    "{activeService.testimonial}"
                  </p>
                  <p className="!text-blue-400 font-bold uppercase tracking-wider text-sm">
                    — {activeService.client}
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <h4 className="text-2xl font-bold !text-white mb-8">Common Questions</h4>
              <div className="space-y-4 mb-16">
                {activeService.faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/40 p-6 sm:p-8 rounded-3xl border border-slate-700/50">
                    <h6 className="!text-white font-bold mb-3 flex gap-4 text-lg">
                      <span className="!text-blue-500">Q.</span> {faq.q}
                    </h6>
                    <p className="!text-slate-400 flex gap-4 text-base leading-relaxed">
                      <span className="!text-slate-600 font-bold">A.</span> {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-10 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setActiveService(null)}
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 !text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  {activeService.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}