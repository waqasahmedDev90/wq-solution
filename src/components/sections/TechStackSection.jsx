import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techData = [
  {
    id: 1,
    category: "Website Development",
    desc: "Build rapid, secure, and future-proof websites using modern frameworks.",
    stacks: [
      { 
        name: "Frontend", 
        tools: [
          { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
          { name: "Angular", img: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
          { name: "Vue.js", img: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
          { name: "HTML5", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" }
        ] 
      },
      { 
        name: "Backend", 
        tools: [
          { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
          { name: "Laravel", img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" }
        ] 
      }
    ]
  },
  {
    id: 2,
    category: "UI/UX Design",
    desc: "Crafting intuitive digital experiences that feel like second nature.",
    stacks: [
      { 
        name: "Prototyping", 
        tools: [
          { name: "Figma", img: "https://cdn.worldvectorlogo.com/logos/figma-5.svg" },
          { name: "Adobe XD", img: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },
          { name: "Sketch", img: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" }
        ] 
      }
    ]
  },
  {
    id: 3,
    category: "Graphic Design",
    desc: "Striking visual identities that demand attention and communicate value.",
    stacks: [
      { 
        name: "Creative Suite", 
        tools: [
          { name: "Photoshop", img: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
          { name: "Illustrator", img: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" },
          { name: "After Effects", img: "https://cdn.worldvectorlogo.com/logos/after-effects-cc-logo.svg" }
        ] 
      }
    ]
  },
  {
    id: 4,
    category: "Digital Marketing",
    desc: "Targeted campaigns and analytics to drive organic growth and ROI.",
    stacks: [
      { 
        name: "Analytics & Ads", 
        tools: [
          { name: "GA4", img: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
          { name: "Meta Ads", img: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
          { name: "Google Ads", img: "https://cdn.worldvectorlogo.com/logos/google-ads-1.svg" }
        ] 
      }
    ]
  },
  {
    id: 5,
    category: "E-Commerce",
    desc: "Secure, lightning-fast stores built for frictionless checkout.",
    stacks: [
      { 
        name: "Platforms", 
        tools: [
          { name: "Shopify", img: "https://cdn.worldvectorlogo.com/logos/shopify-logo.svg" },
          { name: "WooCommerce", img: "https://cdn.worldvectorlogo.com/logos/woocommerce-icon.svg" },
          { name: "Stripe", img: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" }
        ] 
      }
    ]
  },
  {
    id: 6,
    category: "App Development",
    desc: "High-performing applications for iOS and Android.",
    stacks: [
      { 
        name: "Mobile Stack", 
        tools: [
          { name: "Flutter", img: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" },
          { name: "React Native", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
          { name: "Firebase", img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" }
        ] 
      }
    ]
  },
  {
    id: 7,
    category: "Custom Software",
    desc: "Bespoke tools to automate workflows and reduce error.",
    stacks: [
      { 
        name: "Cloud & DB", 
        tools: [
          { name: "AWS", img: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg" },
          { name: "Docker", img: "https://cdn.worldvectorlogo.com/logos/docker-3.svg" },
          { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
        ] 
      }
    ]
  }
];

export default function TechStackSection() {
  const [openId, setOpenId] = useState(1);
  const containerRef = useRef(null);

  // Array for colorful glowing effects behind icons
  const glowColors = [
    'rgba(249,115,22,0.4)',   // Orange
    'rgba(6,182,212,0.4)',    // Cyan
    'rgba(34,197,94,0.4)',    // Green
    'rgba(59,130,246,0.4)',   // Blue
    'rgba(239,68,68,0.4)',    // Red
    'rgba(168,85,247,0.4)'    // Purple
  ];

  useGSAP(() => {
    const items = gsap.utils.toArray(".tech-reveal");
    
    if (items.length > 0) {
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          y: 40 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", 
            toggleActions: "play none none none", 
          },
          onComplete: () => gsap.set(items, { clearProps: "all" })
        }
      );

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, { scope: containerRef });

  return (
    <section id="technology" ref={containerRef} className="relative py-28 bg-[#090A0F] !text-white overflow-hidden min-h-screen">
      
      

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Heading Section */}
        <div className="max-w-4xl mb-24 tech-reveal">
          <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight text-white">
            Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9700FC] to-[#4F46E5]">
              Industry-Leading Tech.
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl font-medium max-w-2xl">
            We build rapid, secure, and future-proof digital solutions using the most advanced tech stacks.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6 w-full mx-auto">
          {techData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`tech-reveal border transition-all duration-700 overflow-hidden ${
                  isOpen 
                    ? "rounded-2xl border-white/10 bg-[#0E0F16]" 
                    : "rounded-2xl border-white/5 bg-[#0E0F16]/50 hover:bg-[#0E0F16]"
                }`}
              >
                {/* Accordion Header (Full Gradient when Active) */}
                <button 
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between px-8 py-6 text-left group transition-all duration-500 ${
                    isOpen 
                      ? "bg-gradient-to-r from-[#9700FC] via-[#6D00F1] to-[#3B82F6] shadow-[0_4px_20px_rgba(109,0,241,0.3)]" 
                      : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl font-black transition-colors duration-300 ${isOpen ? "text-white/80" : "text-slate-600 group-hover:text-slate-400"}`}>
                      0{item.id}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                      {item.category}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Plus className={`w-8 h-8 transition-all duration-500 ${isOpen ? "rotate-45 text-white" : "text-slate-500 group-hover:text-white"}`} />
                  </div>
                </button>

                {/* Accordion Content */}
                <div className={`transition-all duration-700 ease-in-out ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-8 lg:p-10">
                    <p className="text-gray-300 text-lg mb-10 max-w-3xl leading-relaxed">
                       {item.desc}
                    </p>

                    <div className="space-y-12">
                       {item.stacks.map((stack, idx) => (
                         <div key={idx} className="space-y-6">
                           
                           {/* Pinkish Technologies Label */}
                           <h4 className="text-xl font-medium text-[#E879F9] tracking-wide mb-6">
                             {stack.name}:
                           </h4>
                           
                           {/* Tools Grid (Glowing Squircle Style) */}
                           <div className="flex flex-wrap gap-6 lg:gap-8">
                             {stack.tools.map((tool, i) => {
                               const shadowColor = glowColors[i % glowColors.length];

                               return (
                                 <div key={i} className="flex flex-col items-center gap-3 w-24 group">
                                   <div 
                                     className="w-[88px] h-[88px] rounded-[1.5rem] bg-[#1A1C28] flex items-center justify-center border border-white/5 transition-all duration-300 hover:scale-105 cursor-pointer"
                                     style={{ boxShadow: `0px 0px 25px ${shadowColor}` }}
                                   >
                                     <img 
                                       src={tool.img} 
                                       alt={tool.name} 
                                       className="w-10 h-10 object-contain drop-shadow-lg" 
                                     />
                                   </div>
                                   
                                   <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center transition-colors">
                                     {tool.name}
                                   </span>
                                 </div>
                               );
                             })}
                           </div>
                         </div>
                       ))}
                    </div>

                    {/* Deploy Button (Matching image style) */}
                    <div className="mt-14">
                       <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-transparent border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                         Deploy My Solution <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}