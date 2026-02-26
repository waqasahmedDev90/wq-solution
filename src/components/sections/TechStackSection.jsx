import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, CheckCircle2, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techData = [
  {
    id: 1,
    category: "Website Development",
    desc: "Build rapid, secure, and future-proof websites using modern frameworks.",
    stacks: [
      { name: "Frontend", tools: ["React.js", "Angular", "Vue.js", "HTML5", "CSS3"] },
      { name: "Backend", tools: ["Node.js", "Python", "Django", "PHP", "Laravel"] },
      { name: "CMS", tools: ["WordPress", "Webflow"] }
    ]
  },
  {
    id: 2,
    category: "UI/UX Design",
    desc: "Crafting intuitive digital experiences that feel like second nature.",
    stacks: [
      { name: "Prototyping", tools: ["Figma", "Adobe XD", "Sketch"] },
      { name: "Handoff", tools: ["InVision", "Zeplin", "Miro"] }
    ]
  },
  {
    id: 3,
    category: "Graphic Design",
    desc: "Striking visual identities that demand attention and communicate value.",
    stacks: [
      { name: "Creative Suite", tools: ["Photoshop", "Illustrator", "InDesign"] },
      { name: "Motion", tools: ["After Effects", "Premiere Pro"] }
    ]
  },
  {
    id: 4,
    category: "Digital Marketing",
    desc: "Targeted campaigns and analytics to drive organic growth and ROI.",
    stacks: [
      { name: "Analytics", tools: ["GA4", "GTM", "Search Console"] },
      { name: "Ads", tools: ["Meta Ads", "Google Ads", "HubSpot"] }
    ]
  },
  {
    id: 5,
    category: "E-Commerce",
    desc: "Secure, lightning-fast stores built for frictionless checkout.",
    stacks: [
      { name: "Platforms", tools: ["Shopify", "WooCommerce", "Magento"] },
      { name: "Payments", tools: ["Stripe", "PayPal", "Square"] }
    ]
  },
  {
    id: 6,
    category: "App Development",
    desc: "High-performing applications for iOS and Android user home screens.",
    stacks: [
      { name: "Mobile", tools: ["Flutter", "React Native", "Swift", "Kotlin"] },
      { name: "BaaS", tools: ["Firebase", "Supabase"] }
    ]
  },
  {
    id: 7,
    category: "Custom Software",
    desc: "Automate innovative processes and reduce human error with bespoke tools.",
    stacks: [
      { name: "Databases", tools: ["MySQL", "PostgreSQL", "MongoDB"] },
      { name: "Cloud/DevOps", tools: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"] }
    ]
  }
];

export default function TechStackSection() {
  const [openId, setOpenId] = useState(1);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".tech-reveal", {
      opacity: 1,
      y: 30,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="technology" ref={containerRef} className="py-28 bg-[#020617] !text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-24 tech-reveal">
          <h2 className="text-4xl lg:text-7xl font-black mb-6 tracking-tight">
            Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Industry-Leading Tech.
            </span>
          </h2>
          <p className="text-slate-400 text-lg lg:text-xl font-medium max-w-2xl">
            We build rapid, secure, and future-proof digital solutions using the most advanced tech stacks available today.
          </p>
        </div>

        {/* ACCORDION DASHBOARD */}
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
          {techData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`tech-reveal border rounded-[2rem] transition-all duration-700 overflow-hidden ${
                  isOpen ? "bg-slate-900/50 border-blue-500/30" : "bg-slate-900/20 border-slate-800/50"
                }`}
              >
                {/* CATEGORY BAR */}
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

                {/* EXPANDABLE CONTENT AREA */}
                <div className={`transition-all duration-700 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
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
                           
                           {/* TOOLS GRID - Official Style */}
                           <div className="flex flex-wrap gap-4">
                             {stack.tools.map((tool, i) => (
                               <div 
                                 key={i} 
                                 className="group relative flex items-center justify-center p-4 min-w-[120px] lg:min-w-[140px] h-20 rounded-2xl bg-[#020617] border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
                               >
                                 {/* Hover Glow Background */}
                                 <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                 
                                 <div className="relative z-10 flex flex-col items-center gap-2">
                                   <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                   <span className="text-xs lg:text-sm font-bold !text-slate-300 group-hover:!text-white transition-colors uppercase tracking-widest">
                                     {tool}
                                   </span>
                                 </div>
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