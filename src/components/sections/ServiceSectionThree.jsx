import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ================= SAARA CONTENT YAHAN HAI =================
const servicesData = [
  {
    id: 1,
    icon: "fa-desktop",
    teaserHeadline:
      "Stop Losing Potential Customers to a Slow, Outdated Website",
    hook: "Your website should be your hardest-working employee, not a digital brochure gathering dust. As a leading responsive website development company, we build fast, eye catchy and mobile-friendly websites designed to capture attention and drive sales.",
    expandedTitle: "Website Development: Engineered for Growth",
    problem:
      "Most businesses lose customers before they even speak to them because of slow, confusing, or outdated websites. If your site doesn't load instantly and guide users effortlessly, you are missing out on serious ROI.",
    solution:
      "When you work with one of the top website development companies, you get strategic, high-performing websites customized to your specific business goals. You don’t just get a pretty design; you get a lead-generating machine.",
    deliverables: [
      {
        title: "Mobile-First Design",
        desc: "Flawless functionality on phones, tablets, and desktops.",
      },
      {
        title: "Lightning-Fast Speeds",
        desc: "Optimized code and images so your customers never have to wait.",
      },
      {
        title: "Built-In SEO",
        desc: "Foundational search engine optimization so you actually show up on Google.",
      },
      {
        title: "Easy-to-Manage Dashboard",
        desc: "A user-friendly backend (no coding required) so you can update text and images yourself.",
      },
    ],
    testimonial:
      "They built a site that finally matches the quality of our business. Our online leads doubled within the first month of launching.",
    client: "[Client Name, Company]",
    faqs: [
      {
        q: "How long does it take?",
        a: "Most standard business websites go from kickoff to launch in 3–4 weeks.",
      },
      {
        q: "Do I have to write the text?",
        a: "We can work with your existing content, or you can add our copywriting package for a fully hands-off experience.",
      },
    ],
    ctaText: "Book Your Free Strategy Call",
  },
  {
    id: 2,
    icon: "fa-bezier-curve",
    teaserHeadline: "Create Digital Experiences Your Customers Love to Use",
    hook: "Frustrating interfaces cost you users. Whether you are a startup or an established product development company, we design intuitive, beautiful digital experiences that feel like second nature and keep your customers coming back.",
    expandedTitle: "UI/UX Design: Bridging Logic and Beauty",
    problem:
      "If your app or website is confusing to navigate, users will abandon it within seconds. Good code means nothing if the human experience is broken.",
    solution:
      "Unlike standard firms, we apply user psychology to wireframes and prototypes to remove friction. It’s why the best branding agencies and product development companies trust us to design their user journeys.",
    deliverables: [
      {
        title: "User Research & Flow",
        desc: "Mapping out the exact journey your customers take.",
      },
      {
        title: "Interactive Prototypes",
        desc: "Clickable designs so you can feel the product before it's coded.",
      },
      { title: "Pixel-Perfect UI", desc: "Stunning, on-brand visual designs." },
      {
        title: "Developer Handoff",
        desc: "Clean assets and style guides ready for coding.",
      },
    ],
    testimonial:
      "Our users finally understand the platform without needing a tutorial. Support tickets dropped by half.",
    client: "[Client Name]",
    faqs: [
      {
        q: "Do you code the design too?",
        a: "This service focuses entirely on research and visual design, but our development team can seamlessly bring it to life!",
      },
    ],
    ctaText: "Start Your Design Project",
  },
  {
    id: 3,
    icon: "fa-pen-nib",
    teaserHeadline: "Look as Premium as the Services You Provide",
    hook: "Good design builds instant trust. From cohesive graphic design website design elements to a standout graphic designer business card, we create striking visual identities that capture your brand's personality and make you unforgettable.",
    expandedTitle: "Graphic Design: Visuals That Speak Volumes",
    problem:
      "Looking like everyone else means blending in. If your visuals look cheap or inconsistent, potential customers will assume your services are too.",
    solution:
      "Competing among the top graphic design companies, we craft premium, cohesive branding that demands attention and communicates your value before a single word is read.",
    deliverables: [
      {
        title: "Logo & Brand Identity",
        desc: "Complete visual systems, including typography and color palettes.",
      },
      {
        title: "Social Media Kits",
        desc: "Eye-catching templates for Instagram, LinkedIn, and Facebook.",
      },
      {
        title: "Print & Packaging",
        desc: "Business cards, brochures, and physical product designs.",
      },
      {
        title: "Pitch Decks",
        desc: "Professional slides that win clients and investors.",
      },
    ],
    testimonial:
      "They completely transformed our brand. We finally look as premium as the service we provide.",
    client: "[Client Name]",
    faqs: [
      {
        q: "Do I own the designs?",
        a: "Absolutely. Once the project is complete, you receive full ownership and all source files.",
      },
    ],
    ctaText: "Upgrade Your Brand Today",
  },
  {
    id: 4,
    icon: "fa-bullhorn",
    teaserHeadline: "Get Found by the Customers Who Are Ready to Buy Today",
    hook: "Stop shouting into the void. Guided by an expert digital marketing strategist, we build targeted, data-driven marketing campaigns that put your business right in front of the people who are ready to buy.",
    expandedTitle: "Digital Marketing: Predictable, Sustainable expansion",
    problem:
      "Wasting money on ads that don't convert is exhausting. Getting likes is nice, but likes don't pay the bills, sales do.",
    solution:
      "Whether you need specialized digital marketing for home services or the robust tactics of a b2b industrial digital marketing agency, we ditch the vanity metrics and focus on ROI. Turn your digital presence into a lead-generation engine.",
    deliverables: [
      {
        title: "Paid Advertising (PPC)",
        desc: "Highly optimized Google and Meta ads.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Long-term strategies to dominate organic search results.",
      },
      {
        title: "Social Media Management",
        desc: "Compelling content that builds a loyal community.",
      },
      {
        title: "Email Marketing",
        desc: "Automated sequences that nurture leads into buyers.",
      },
    ],
    testimonial:
      "In three months, they cut our cost-per-lead by 40% and doubled our inbound inquiries.",
    client: "[Client Name]",
    faqs: [
      {
        q: "When will I see results?",
        a: "Paid ads generate traffic immediately, while SEO is a long-term investment that typically shows major growth in 3–6 months.",
      },
    ],
    ctaText: "Get a Free Marketing Audit",
  },
  {
    id: 5,
    icon: "fa-cart-shopping",
    teaserHeadline:
      "Stop Abandoned Carts with a Frictionless Checkout Experience",
    hook: "Ready to sell while you sleep? We build secure, lightning-fast e-commerce solutions optimized for frictionless checkout and maximum conversions.",
    expandedTitle: "E-commerce: Seamless Shopping Experiences",
    problem:
      "Abandoned carts kill your e-commerce business for sale. If your checkout is clunky or your product pages are slow, buyers will simply go to Amazon instead.",
    solution:
      "We build robust online stores on platforms like Shopify and WooCommerce that prioritize speed, security, and an effortless purchasing journey.",
    deliverables: [
      {
        title: "Custom Storefronts",
        desc: "Beautiful layouts designed to showcase your products.",
      },
      {
        title: "Secure Payment Gateways",
        desc: "Integration with Stripe, PayPal, and more.",
      },
      {
        title: "Inventory Management",
        desc: "Easy-to-use backends to track your stock effortlessly.",
      },
      {
        title: "Abandoned Cart Recovery",
        desc: "Automated emails to win back hesitant shoppers.",
      },
    ],
    testimonial:
      "Our conversion rate jumped from 1.2% to over 3.5% just weeks after launching the new store.",
    client: "[Client Name]",
    faqs: [
      {
        q: "Can I add products myself later?",
        a: "Yes! We provide full training so you can manage inventory, add products, and track orders independently.",
      },
    ],
    ctaText: "Start Selling Online",
  },
  {
    id: 6,
    icon: "fa-mobile-screen-button",
    teaserHeadline: "Launch a Bug-Free App Your Users Won't Delete",
    hook: "Have a game-changing app idea? Recognized among the top mobile app development companies, we build applications for iOS and Android that users actually want to keep on their home screen.",
    expandedTitle: "App Development: From Concept to App Store",
    problem:
      "A buggy app destroys your reputation instantly. Building an app is a major investment, and choosing the wrong tech stack can result in endless crashes and rebuilds.",
    solution:
      "From acting as your food delivery app development company to providing custom android app development services, we engineer robust mobile apps optimized for long-term reliability.",
    deliverables: [
      {
        title: "iOS & Android Development",
        desc: "Reaching your users no matter what device they use.",
      },
      {
        title: "Custom APIs & Backend",
        desc: "The invisible engine that powers your app securely.",
      },
      {
        title: "Rigorous QA Testing",
        desc: "Stress-testing every button and feature before launch.",
      },
      {
        title: "App Store Launch Support",
        desc: "Handling the submission and approval process for you.",
      },
    ],
    testimonial:
      "They didn't just write code; they helped us refine our core features. Launch day was flawless.",
    client: "[Client Name]",
    faqs: [
      {
        q: "Do you build Native or Cross-Platform?",
        a: "We do both (Swift/Kotlin and React Native/Flutter) and will recommend the best approach based on your budget and timeline.",
      },
    ],
    ctaText: "Discuss Your App Idea",
  },
  {
    id: 7,
    icon: "fa-gears",
    teaserHeadline: "Custom Software That Saves You Hours Every Week",
    hook: "We are a custom software development company replacing rigid off-the-shelf tools with custom internal tools, web apps, and CRM systems designed exclusively for your unique workflows.",
    expandedTitle: "Custom Software: Built for Your Business Workflow",
    problem:
      "Forcing your business into generic SaaS tools creates massive roadblock. When your systems don't talk to each other, your team wastes hours on manual data entry.",
    solution:
      "We build growing, secure custom software that automates your innovative processes, saving you time and drastically reducing human error.",
    deliverables: [
      {
        title: "Workflow Automation",
        desc: "Eliminating repetitive manual tasks.",
      },
      {
        title: "Custom CRMs & ERPs",
        desc: "Managing your customers and resources your way.",
      },
      {
        title: "Secure Cloud Architecture",
        desc: "Swift and resilient hosting built to handle heavy data loads.",
      },
      {
        title: "Ongoing Maintenance",
        desc: "Dedicated support to keep your software updated.",
      },
    ],
    testimonial:
      "The internal dashboard they built saved our team an estimated 20 hours of manual data entry every single week.",
    client: "[Client Name]",
    faqs: [
      {
        q: "Is my company data safe?",
        a: "Security is our top priority. We use industry-standard encryption, secure cloud environments, and robust authentication protocols.",
      },
    ],
    ctaText: "Book a Technical Consultation",
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  // GSAP Scroll Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".service-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  // Body scroll lock jab modal open ho
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeService]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-24 bg-slate-950 overflow-hidden !text-white"
    >
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 service-header">
          <h6 className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6">
            Core Services
          </h6>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 !text-white">
            End-to-End Digital Expertise, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              managed under one roof.
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col justify-between p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                  <i
                    className={`fa-duotone ${service.icon} text-3xl !text-blue-400 group-hover:!text-white transition-colors`}
                  ></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 !text-white leading-tight">
                  {service.teaserHeadline}
                </h4>
                <p className="!text-slate-400 leading-relaxed mb-8 text-sm lg:text-base">
                  {service.hook}
                </p>
              </div>

              <button
                onClick={() => setActiveService(service)}
                className="mt-auto inline-flex items-center gap-2 !text-blue-400 font-bold group-hover:!text-white transition-colors border-t border-white/10 pt-6"
              >
                <i className="fa-solid fa-arrow-turn-down-right"></i>
                See More Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL / EXPANDED VIEW ================= */}
      {/* ================= MODAL / EXPANDED VIEW ================= */}
      {activeService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-slate-950/90 transition-opacity"
          onClick={() => setActiveService(null)} // Background par click karne se modal close hoga
        >
          {/* Modal Container - data-lenis-prevent add kiya taake scroll kaam kare */}
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            // custom-scrollbar class hata di gayi hai
            className="bg-slate-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-6 sm:p-12 relative shadow-[0_0_60px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200"
          >
            {/* Close Button - Position absolute kar di taake hamesha wazeh nazar aaye */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-red-500 rounded-full flex items-center justify-center !text-white transition-colors z-50"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            {/* Modal Content */}
            <div className="pr-4 mt-6 sm:mt-0">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i
                  className={`fa-duotone ${activeService.icon} text-3xl !text-white`}
                ></i>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold !text-white mb-8 border-b border-white/10 pb-6 pr-10">
                {activeService.expandedTitle}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                  <h5 className="!text-red-400 font-bold mb-3 uppercase tracking-wider text-sm">
                    <i className="fa-solid fa-triangle-exclamation mr-2"></i>{" "}
                    The Problem
                  </h5>
                  <p className="!text-slate-300 leading-relaxed bg-red-500/5 p-5 rounded-2xl border border-red-500/10">
                    {activeService.problem}
                  </p>
                </div>
                <div>
                  <h5 className="!text-green-400 font-bold mb-3 uppercase tracking-wider text-sm">
                    <i className="fa-solid fa-check-circle mr-2"></i> The
                    Solution
                  </h5>
                  <p className="!text-slate-300 leading-relaxed bg-green-500/5 p-5 rounded-2xl border border-green-500/10">
                    {activeService.solution}
                  </p>
                </div>
              </div>

              {/* What You Get */}
              <h4 className="text-2xl font-bold !text-white mb-6">
                What You Get (Core Deliverables)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {activeService.deliverables.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <i className="fa-solid fa-check !text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <h6 className="!text-white font-bold mb-1">
                        {item.title}
                      </h6>
                      <p className="!text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-blue-900/40 to-transparent border-l-4 border-blue-500 p-6 sm:p-8 rounded-r-2xl mb-12">
                <i className="fa-solid fa-quote-left text-3xl !text-blue-500/30 mb-4 block"></i>
                <p className="!text-white text-lg sm:text-xl italic mb-4">
                  "{activeService.testimonial}"
                </p>
                <p className="!text-blue-400 font-bold text-sm">
                  — {activeService.client}
                </p>
              </div>

              {/* FAQs */}
              <h4 className="text-2xl font-bold !text-white mb-6">
                Common Questions
              </h4>
              <div className="space-y-6 mb-12">
                {activeService.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-6 rounded-2xl border border-white/5"
                  >
                    <h6 className="!text-white font-bold mb-2 flex gap-3">
                      <span className="!text-blue-500">Q:</span> {faq.q}
                    </h6>
                    <p className="!text-slate-400 text-sm flex gap-3">
                      <span className="!text-slate-600">A:</span> {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setActiveService(null)}
                  className="inline-flex items-center gap-3 bg-blue-600 !text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  {activeService.ctaText}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `,
        }}
      />
    </section>
  );
}
