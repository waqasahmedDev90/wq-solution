import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, CheckCircle2, Quote, ChevronRight, HelpCircle } from "lucide-react";
import { PrimaryButton } from "../Button";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    tabName: "Website Development",
    teaserHeadline: "Stop Losing Potential Customers to a Slow, Outdated Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    hook: "Your website should be your hardest-working employee, not a digital brochure gathering dust. We build fast and mobile-friendly websites designed to drive sales.",
    problem: "Most businesses lose customers before they even speak to them because of slow or outdated websites.",
    solution: "You get strategic, high-performing websites customized to your specific business goals.",
    deliverables: ["Mobile-First Design", "Lightning-Fast Speeds", "Built-In SEO", "Easy-to-Manage Dashboard"],
    testimonial: "Online leads doubled within the first month of launching.",
    client: "Sarah, TechCorp",
    ctaText: "Book Your Free Strategy Call"
  },
  {
    id: 2,
    tabName: "UI/UX Designing",
    teaserHeadline: "Create Digital Experiences Your Customers Love to Use",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80",
    hook: "Frustrating interfaces cost you users. We design intuitive, beautiful digital experiences that feel like second nature.",
    problem: "If your app is confusing, users will abandon it. Good code means nothing if the human experience is broken.",
    solution: "We apply user psychology to wireframes and prototypes to remove friction.",
    deliverables: ["User Research", "Interactive Prototypes", "Pixel-Perfect UI", "Developer Handoff"],
    testimonial: "Support tickets dropped by half after the redesign.",
    client: "David, SaaS Inc",
    ctaText: "Start Your Design Project"
  },
  {
    id: 3,
    tabName: "Graphic Designing",
    teaserHeadline: "Look as Premium as the Services You Provide",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    hook: "Good design builds instant trust. We create striking visual identities that capture your brand's personality.",
    problem: "If your visuals look cheap, potential customers will assume your services are too.",
    solution: "We craft premium, cohesive branding that demands attention and communicates value.",
    deliverables: ["Logo & Identity", "Social Media Kits", "Print & Packaging", "Pitch Decks"],
    testimonial: "They completely transformed our brand image.",
    client: "Elena, Vogue Studios",
    ctaText: "Upgrade Your Brand Today"
  },
  {
    id: 4,
    tabName: "Digital Marketing",
    teaserHeadline: "Get Found by the Customers Who Are Ready to Buy Today",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    hook: "Stop shouting into the void. Guided by an expert digital marketing strategist, we build targeted campaigns that put you in front of buyers.",
    problem: "Wasting money on ads that don't convert is exhausting. Likes don't pay the bills—sales do.",
    solution: "We ditch the vanity metrics and focus on ROI, turning your digital presence into a lead-generation engine.",
    deliverables: ["Paid Advertising (PPC)", "Search Engine Optimization (SEO)", "Social Media Management", "Email Marketing Sequences"],
    ctaText: "Get a Free Marketing Audit"
  },
  {
    id: 5,
    tabName: "E-commerce Solutions",
    teaserHeadline: "Stop Abandoned Carts with a Frictionless Checkout Experience",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    hook: "Ready to sell while you sleep? We build secure, lightning-fast e-commerce solutions optimized for maximum conversions.",
    problem: "Abandoned carts kill your business. If your checkout is clunky, buyers will simply go to Amazon instead.",
    solution: "We build robust stores on Shopify and WooCommerce that prioritize speed and an effortless purchasing journey.",
    deliverables: ["Custom Storefronts", "Secure Payment Gateways", "Inventory Management", "Abandoned Cart Recovery"],
    ctaText: "Start Selling Online"
  },
  {
    id: 6,
    tabName: "App Development",
    teaserHeadline: "Launch a Bug-Free App Your Users Won't Delete",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    hook: "Have a game-changing app idea? We build high-performing applications for iOS and Android that users actually want to keep.",
    problem: "A buggy app destroys your reputation. Building an app is an investment; choosing the wrong stack leads to crashes.",
    solution: "We engineer robust mobile apps optimized for long-term reliability and seamless performance.",
    deliverables: ["iOS & Android Development", "Custom APIs & Backend", "Rigorous QA Testing", "App Store Launch Support"],
    ctaText: "Discuss Your App Idea"
  },
  {
    id: 7,
    tabName: "Custom Software",
    teaserHeadline: "Custom Software That Saves You Hours Every Week",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    hook: "We replace rigid off-the-shelf tools with custom internal tools, web apps, and CRM systems designed for your unique workflows.",
    problem: "Forcing your business into generic SaaS tools creates roadblocks and wastes hours on manual data entry.",
    solution: "We build growable, secure custom software that automates your innovative processes and reduces human error.",
    deliverables: ["Workflow Automation", "Custom CRMs & ERPs", "Secure Cloud Architecture", "Ongoing Maintenance"],
    ctaText: "Book a Technical Consultation"
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(servicesData[0].image);

  useGSAP(() => {
    // 1. Initial Reveal Animation (Aapka purana code)
    gsap.fromTo(".service-content-block", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );

    // 2. NAYA CODE: Scroll par Image Change karne ka logic
    const blocks = gsap.utils.toArray(".service-content-block");
    blocks.forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        // Jab block screen ke center (50%) par pohnchega toh trigger hoga
        start: "top 50%", 
        end: "bottom 50%",
        onEnter: () => setActiveImage(servicesData[index].image), // Neechay scroll karte waqt
        onEnterBack: () => setActiveImage(servicesData[index].image), // Upar scroll karte waqt
      });
    });

  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="relative py-24 bg-[#020617] !text-white z-0">
      
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-semibold text-sm uppercase mb-6">
            Core Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 !text-white">
            End-to-End Digital Expertise, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Under One Roof.
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: THE IMAGE (Fixed width and responsive) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 key={activeImage}
                 src={activeImage} 
                 className="w-full h-full object-cover animate-in fade-in duration-500" 
                 alt="Service View" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* RIGHT: THE CONTENT (Scrollable) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 order-1 lg:order-2">
            {servicesData.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveImage(service.image)} // Hover wala function bhi rakha hai extra smoothness ke liye
                className="service-content-block p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black !text-slate-800 group-hover:!text-blue-500/20 transition-colors">0{service.id}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold !text-white">{service.tabName}</h3>
                </div>

                <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-4">{service.teaserHeadline}</h4>
                <p className="!text-slate-400 mb-8 leading-relaxed">{service.hook}</p>

                {/* PROBLEM/SOLUTION GRID */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex gap-3">
                    <AlertTriangle className="w-5 h-5 shrink-0 !text-red-400" />
                    <p className="text-sm !text-slate-300"><strong className="!text-red-400">Problem:</strong> {service.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 !text-green-400" />
                    <p className="text-sm !text-slate-300"><strong className="!text-green-400">Solution:</strong> {service.solution}</p>
                  </div>
                </div>

                {/* DELIVERABLES */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 !text-blue-500 " />
                      <span className="text-[14px] !text-slate-400">{item.title || item}</span>
                    </div>
                  ))}
                </div>

                {/* <a href="#contact" className="inline-flex items-center gap-2 !text-white font-bold bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-colors">
                   {service.ctaText} <ChevronRight className="w-4 h-4" />
                </a> */}

                <PrimaryButton href="#contact" className="w-full sm:w-auto">
  {service.ctaText}
</PrimaryButton>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}