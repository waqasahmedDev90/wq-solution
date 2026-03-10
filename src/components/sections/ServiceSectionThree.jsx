import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, CheckCircle2, Quote, ChevronDown, Star } from "lucide-react";
import { PrimaryButton } from "../Button"; // Make sure path is correct

gsap.registerPlugin(ScrollTrigger);

// Custom Accordion Component for FAQs
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/30 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left p-4 flex justify-between items-center hover:bg-slate-700/40 transition-colors"
      >
        <span className="text-sm font-medium !text-slate-200">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 !text-purple-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div 
        className={`px-4 text-sm !text-slate-400 transition-all duration-300 ease-in-out ${
          isOpen ? "pb-4 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="pt-2 border-t border-slate-700/50 mt-1">{faq.a}</p>
      </div>
    </div>
  );
};

// NAYA: Custom Collapsible Component for "What You Get"
const DeliverableItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800/20 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left px-4 py-3 flex gap-3 items-center group"
      >
        <CheckCircle2 className="w-5 h-5 shrink-0 !text-blue-500 group-hover:scale-110 transition-transform" />
        <span className="text-[15px] font-medium !text-slate-200 flex-1">{item.title}</span>
        <ChevronDown className={`w-4 h-4 !text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 !text-blue-400" : ""}`} />
      </button>
      <div 
        className={`pl-12 pr-4 transition-all duration-300 ease-in-out ${
          isOpen ? "pb-4 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-[14px] !text-slate-400">{item.text}</p>
      </div>
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    tabName: "Website Development",
    teaserHeadline: "Stop Losing Potential Customers to a Slow, Outdated Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    hook: "Your website should be your hardest-working employee, not a digital brochure gathering dust. As a leading responsive website development company, we build fast, eye catchy and mobile-friendly websites designed to capture attention and drive sales.",
    problem: "Most businesses lose customers before they even speak to them because of slow, confusing, or outdated websites. If your site doesn't load instantly and guide users effortlessly, you are missing out on serious ROI.",
    solution: "When you work with one of the top website development companies, you get strategic, high-performing websites customized to your specific business goals. You don’t just get a pretty design; you get a lead-generating machine.",
    deliverables: [
      { title: "Mobile-First Design", text: "Flawless functionality on phones, tablets, and desktops." },
      { title: "Lightning-Fast Speeds", text: "Optimized code and images so your customers never have to wait." },
      { title: "Built-In SEO", text: "Foundational search engine optimization so you actually show up on Google." },
      { title: "Easy-to-Manage Dashboard", text: "A user-friendly backend (no coding required) so you can update text and images yourself." }
    ],
    testimonial: "They built a site that finally matches the quality of our business. Our online leads doubled within the first month of launching.",
    client: "Sarah",
    company: "TechCorp",
    faqs: [
      { q: "How long does it take?", a: "Most standard business websites go from kickoff to launch in 3–4 weeks." },
      { q: "Do I have to write the text?", a: "We can work with your existing content, or you can add our copywriting package for a fully hands-off experience." }
    ],
    ctaText: "Book Your Free Strategy Call"
  },
  {
    id: 2,
    tabName: "UI/UX Designing",
    teaserHeadline: "Create Digital Experiences Your Customers Love to Use",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80",
    hook: "Frustrating interfaces cost you users. Whether you are a startup or an established product development company, we design intuitive, beautiful digital experiences that feel like second nature and keep your customers coming back.",
    problem: "If your app or website is confusing to navigate, users will abandon it within seconds. Good code means nothing if the human experience is broken.",
    solution: "Unlike standard firms, we apply user psychology to wireframes and prototypes to remove friction. It’s why the best branding agencies and product development companies trust us to design their user journeys.",
    deliverables: [
      { title: "User Research & Flow", text: "Mapping out the exact journey your customers take." },
      { title: "Interactive Prototypes", text: "Clickable designs so you can feel the product before it's coded." },
      { title: "Pixel-Perfect UI", text: "Stunning, on-brand visual designs." },
      { title: "Developer Handoff", text: "Clean assets and style guides ready for coding." }
    ],
    testimonial: "Our users finally understand the platform without needing a tutorial. Support tickets dropped by half.",
    client: "David",
    company: "SaaS Inc",
    faqs: [
      { q: "Do you code the design too?", a: "This service focuses entirely on research and visual design, but our development team can seamlessly bring it to life!" }
    ],
    ctaText: "Start Your Design Project"
  },
  {
    id: 3,
    tabName: "Graphic Designing",
    teaserHeadline: "Look as Premium as the Services You Provide",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    hook: "Good design builds instant trust. From cohesive graphic design website design elements to a standout graphic designer business card, we create striking visual identities that capture your brand's personality and make you unforgettable.",
    problem: "Looking like everyone else means blending in. If your visuals look cheap or inconsistent, potential customers will assume your services are too.",
    solution: "Competing among the top graphic design companies, we craft premium, cohesive branding that demands attention and communicates your value before a single word is read.",
    deliverables: [
      { title: "Logo & Brand Identity", text: "Complete visual systems, including typography and color palettes." },
      { title: "Social Media Kits", text: "Eye-catching templates for Instagram, LinkedIn, and Facebook." },
      { title: "Print & Packaging", text: "Business cards, brochures, and physical product designs." },
      { title: "Pitch Decks & Presentations", text: "Professional slides that win clients and investors." }
    ],
    testimonial: "They completely transformed our brand. We finally look as premium as the service we provide.",
    client: "Elena",
    company: "Vogue Studios",
    faqs: [
      { q: "Do I own the designs?", a: "Absolutely. Once the project is complete, you receive full ownership and all source files." }
    ],
    ctaText: "Upgrade Your Brand Today"
  },
  {
    id: 4,
    tabName: "Digital Marketing",
    teaserHeadline: "Get Found by the Customers Who Are Ready to Buy Today",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    hook: "Stop shouting into the void. Guided by an expert digital marketing strategist, we build targeted, data-driven marketing campaigns that put your business right in front of the people who are ready to buy.",
    problem: "Wasting money on ads that don't convert is exhausting. Getting likes is nice, but likes don't pay the bills—sales do.",
    solution: "Whether you need specialized digital marketing for home services or the robust tactics of a b2b industrial digital marketing agency, we ditch the vanity metrics and focus on ROI. Turn your digital presence into a lead-generation engine.",
    deliverables: [
      { title: "Paid Advertising (PPC)", text: "Highly optimized Google and Meta ads." },
      { title: "Search Engine Optimization (SEO)", text: "Long-term strategies to dominate organic search results." },
      { title: "Social Media Management", text: "Compelling content that builds a loyal community." },
      { title: "Email Marketing Sequences", text: "Automated sequences that nurture leads into buyers." }
    ],
    testimonial: "In three months, they cut our cost-per-lead by 40% and doubled our inbound inquiries.",
    client: "Michael",
    company: "Home Services Co.",
    faqs: [
      { q: "When will I see results?", a: "Paid ads generate traffic immediately, while SEO is a long-term investment that typically shows major growth in 3–6 months." }
    ],
    ctaText: "Get a Free Marketing Audit"
  },
  {
    id: 5,
    tabName: "E-commerce Solutions",
    teaserHeadline: "Stop Abandoned Carts with a Frictionless Checkout Experience",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    hook: "Ready to sell while you sleep? We build secure, lightning-fast e-commerce solutions optimized for frictionless checkout and maximum conversions.",
    problem: "Abandoned carts kill your e-commerce business for sale. If your checkout is clunky or your product pages are slow, buyers will simply go to Amazon instead.",
    solution: "We build robust online stores on platforms like Shopify and WooCommerce that prioritize speed, security, and an effortless purchasing journey.",
    deliverables: [
      { title: "Custom Storefronts", text: "Beautiful layouts designed to showcase your products." },
      { title: "Secure Payment Gateways", text: "Integration with Stripe, PayPal, and more." },
      { title: "Inventory Management", text: "Easy-to-use backends to track your stock effortlessly." },
      { title: "Abandoned Cart Recovery", text: "Automated emails to win back hesitant shoppers." }
    ],
    testimonial: "Our conversion rate jumped from 1.2% to over 3.5% just weeks after launching the new store.",
    client: "Emma",
    company: "Retail Brand",
    faqs: [
      { q: "Can I add products myself later?", a: "Yes! We provide full training so you can manage inventory, add products, and track orders independently." }
    ],
    ctaText: "Start Selling Online"
  },
  {
    id: 6,
    tabName: "App Development",
    teaserHeadline: "Launch a Bug-Free App Your Users Won't Delete",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    hook: "Have a game-changing app idea? Recognized among the top mobile app development companies, we build applications for iOS and Android that users actually want to keep on their home screen.",
    problem: "A buggy app destroys your reputation instantly. Building an app is a major investment, and choosing the wrong tech stack can result in endless crashes and rebuilds.",
    solution: "From acting as your food delivery app development company to providing custom android app development services or serving as a progressive web app development company, we engineer robust mobile apps optimized for long-term reliability.",
    deliverables: [
      { title: "iOS & Android Development", text: "Reaching your users no matter what device they use." },
      { title: "Custom APIs & Backend", text: "The invisible engine that powers your app securely." },
      { title: "Rigorous QA Testing", text: "Stress-testing every button and feature before launch." },
      { title: "App Store Launch Support", text: "Handling the submission and approval process for you." }
    ],
    testimonial: "They didn't just write code; they helped us refine our core features. Launch day was flawless.",
    client: "James",
    company: "Tech Startup",
    faqs: [
      { q: "Do you build Native or Cross-Platform?", a: "We do both (Swift/Kotlin and React Native/Flutter) and will recommend the best approach based on your budget and timeline." }
    ],
    ctaText: "Discuss Your App Idea"
  },
  {
    id: 7,
    tabName: "Custom Software",
    teaserHeadline: "Custom Software That Saves You Hours Every Week",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    hook: "We are a custom software development company replacing rigid off-the-shelf tools with custom internal tools, web apps, and CRM systems designed exclusively for your unique workflows.",
    problem: "Forcing your business into generic SaaS tools creates massive roadblocks. When your systems don't talk to each other, your team wastes hours on manual data entry.",
    solution: "We build growing, secure custom software that automates your innovative processes, saving you time and drastically reducing human error.",
    deliverables: [
      { title: "Workflow Automation", text: "Eliminating repetitive manual tasks." },
      { title: "Custom CRMs & ERPs", text: "Managing your customers and resources your way." },
      { title: "Secure Cloud Architecture", text: "Swift and resilient hosting built to handle heavy data loads." },
      { title: "Ongoing Maintenance", text: "Dedicated support to keep your software updated." }
    ],
    testimonial: "The internal dashboard they built saved our team an estimated 20 hours of manual data entry every single week.",
    client: "Robert",
    company: "Logistics Pro",
    faqs: [
      { q: "Is my company data safe?", a: "Security is our top priority. We use industry-standard encryption, secure cloud environments, and robust authentication protocols." }
    ],
    ctaText: "Book a Technical Consultation"
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(servicesData[0].image);

  useGSAP(() => {
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

    const blocks = gsap.utils.toArray(".service-content-block");
    blocks.forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 50%", 
        end: "bottom 50%",
        onEnter: () => setActiveImage(servicesData[index].image),
        onEnterBack: () => setActiveImage(servicesData[index].image),
      });
    });

  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="relative py-24 bg-[#020617] !text-white z-0">
      
      {/* Max-width add ki hai taake ultrawide screens pe boht ajeeb na lagay */}
      <div className="mx-auto px-6 lg:px-12 max-w-[1500px]">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 !text-blue-400 font-semibold text-sm uppercase mb-6">
            Core Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 !text-white">
            End-to-End Digital Expertise, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Managed Under One Roof.
            </span>
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
          
          {/* LEFT: THE IMAGE (Width fixed to 40% for larger screens) */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 key={activeImage}
                 src={activeImage} 
                 className="w-full h-full object-cover animate-in fade-in duration-500" 
                 alt="Service View" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80"></div>
            </div>
          </div>

          {/* RIGHT: THE CONTENT (Width fixed to 60% for larger screens) */}
          <div className="w-full lg:w-3/5 flex flex-col gap-12 order-1 lg:order-2">
            {servicesData.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveImage(service.image)}
                className="service-content-block p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Number & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black !text-slate-800 group-hover:!text-blue-500/20 transition-colors">0{service.id}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold !text-white">{service.tabName}</h3>
                </div>

                {/* Headings & Hook */}
                <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-4">{service.teaserHeadline}</h4>
                <p className="!text-slate-400 mb-8 leading-relaxed">{service.hook}</p>

                {/* PROBLEM/SOLUTION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0 !text-red-400" />
                      <strong className="!text-red-400">Problem:</strong>
                    </div>
                    <p className="text-sm !text-slate-300">{service.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 !text-green-400" />
                      <strong className="!text-green-400">Solution:</strong>
                    </div>
                    <p className="text-sm !text-slate-300">{service.solution}</p>
                  </div>
                </div>

                {/* UPDATED: COLLAPSIBLE DELIVERABLES */}
                <div className="mb-10">
                  <h5 className="text-sm font-semibold !text-slate-300 mb-4 uppercase tracking-wider">What You Get</h5>
                  <div className="flex flex-col gap-3">
                    {service.deliverables.map((item, i) => (
                      <DeliverableItem key={i} item={item} />
                    ))}
                  </div>
                </div>

                {/* UPGRADED TESTIMONIAL UI */}
                <div className="mb-10 p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                  <Quote className="absolute -top-2 -right-2 w-16 h-16 !text-blue-500/5 rotate-12" />
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 !text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-[15px] italic !text-slate-300 mb-5 relative z-10 leading-relaxed">
                    "{service.testimonial}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                      {service.client.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold !text-slate-200">{service.client}</p>
                      <p className="text-xs !text-slate-400">{service.company}</p>
                    </div>
                  </div>
                </div>

                {/* ACCORDION FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="mb-10 space-y-3">
                    <h5 className="text-sm font-semibold !text-slate-300 uppercase tracking-wider mb-3">Common Questions</h5>
                    {service.faqs.map((faq, idx) => (
                      <FAQItem key={idx} faq={faq} />
                    ))}
                  </div>
                )}

                {/* CTA BUTTON */}
                <div className="pt-4 border-t border-slate-800/50">
                  <PrimaryButton href="#contact" className="w-full sm:w-auto block text-center">
                    {service.ctaText}
                  </PrimaryButton>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
