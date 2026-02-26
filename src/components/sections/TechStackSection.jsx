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

  useGSAP(() => {
    // 1. Pehle check karein ke elements render ho chuke hain
    const items = gsap.utils.toArray(".tech-reveal");
    
    if (items.length > 0) {
      // 2. fromTo use karein: Forcefully 0 se 1 par le jayen
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
            start: "top 85%", // Jab section ka top 85% screen par ho
            toggleActions: "play none none none", // Sirf ek baar chalay ga
          },
          // 3. Animation khatam hone par opacity ko '1' par lock kar dega
          onComplete: () => gsap.set(items, { clearProps: "all" })
        }
      );

      // 4. Sab se zaroori: Reload ke masle ke liye
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, { scope: containerRef });

  return (
    <section id="technology" ref={containerRef} className="py-28 bg-[#020617] !text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="max-w-4xl mb-24 tech-reveal">
          <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight">
            Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Industry-Leading Tech.
            </span>
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl font-medium max-w-2xl">
            We build rapid, secure, and future-proof digital solutions using the most advanced tech stacks.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
          {techData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`tech-reveal border rounded-[2rem] transition-all duration-700 overflow-hidden ${
                  isOpen ? "bg-slate-900/50 border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.1)]" : "bg-slate-900/20 border-slate-800/50"
                }`}
              >
                <button 
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl font-black transition-colors ${isOpen ? "text-blue-500" : "text-slate-700"}`}>
                      0{item.id}
                    </span>
                    <h4 className="text-xl lg:text-2xl font-extrabold !text-white tracking-tight">
                      {item.category}
                    </h4>
                  </div>
                  <div className={`w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-45 bg-blue-600 border-transparent shadow-[0_0_20px_rgba(37,99,235,0.4)]" : ""}`}>
                    <Plus className={`w-6 h-6 transition-colors ${isOpen ? "!text-white" : "text-slate-500"}`} />
                  </div>
                </button>

                <div className={`transition-all duration-700 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-8 lg:p-12 pt-0 border-t border-slate-800/50">
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
                       {item.desc}
                    </p>

                    <div className="space-y-12">
                       {item.stacks.map((stack, idx) => (
                         <div key={idx} className="space-y-6">
                           <h5 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-3">
                             <span className="w-10 h-[1px] bg-blue-500/50"></span>
                             {stack.name}
                           </h5>
                           
                           <div className="flex flex-wrap gap-4 lg:gap-6">
                             {stack.tools.map((tool, i) => (
                               <div 
                                 key={i} 
                                 className="group relative flex flex-col items-center justify-center p-4 min-w-[100px] lg:min-w-[120px] h-32 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl"
                               >
                                 <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                                 
                                 {/* IMAGE HANDLING FIX */}
                                 <div className="relative z-10 w-12 h-12 mb-3 flex items-center justify-center">
                                   <img 
                                     src={tool.img} 
                                     alt={tool.name} 
                                     className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                                   />
                                 </div>
                                 
                                 <span className="relative z-10 text-[10px] lg:text-xs font-black uppercase tracking-tighter !text-slate-500 group-hover:!text-white transition-colors text-center">
                                   {tool.name}
                                 </span>

                                 <div className="absolute bottom-2 w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#3b82f6] transition-all"></div>
                               </div>
                             ))}
                           </div>
                         </div>
                       ))}
                    </div>

                    <div className="mt-12">
                       <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 font-bold text-sm hover:bg-blue-600 hover:!text-white transition-all shadow-lg">
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