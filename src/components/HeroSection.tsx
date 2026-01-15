import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();
  const ref5 = useScrollAnimation();

  return (
    <section className="md:px-12 lg:px-24 md:py-32 grid lg:grid-cols-12 gap-12 border-white/[0.03] border-b pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12 items-end">
      <div className="lg:col-span-8 flex flex-col gap-8">
        <div ref={ref1} className="animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-indigo-900/40 bg-indigo-900/10 text-[10px] font-medium tracking-widest text-indigo-200/80 uppercase">
            <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
            Cybersecurity Firm
          </span>
        </div>
        
        <h1 ref={ref2} className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl leading-[0.95] text-white tracking-tight animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <span className="block text-white/80 font-light italic">Deploy Strategic</span>
          <span className="block font-light italic">AI Cybersecurity.</span>
        </h1>
        
        <p ref={ref3} className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          We bridge the gap between emerging AI threats and enterprise defense. Architecting custom cybersecurity infrastructure for Saudi & Gulf enterprises.
        </p>
        
        <div ref={ref4} className="flex flex-col sm:flex-row gap-5 pt-4 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
          <Link
            to="/compliance-check"
            className="group shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden font-medium text-indigo-950 bg-gradient-to-r from-[#e0e7ff] to-[#a5b4fc] rounded-sm pt-3 pr-8 pb-3 pl-8 relative shadow-lg"
            style={{
              boxShadow: '0 15px 33px -12px rgba(99,102,241,0.6), inset 0 4px 6.3px rgba(255,255,255,0.8)'
            }}
          >
            <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/40 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
            <span className="relative flex items-center gap-2 text-sm tracking-tight font-semibold">
              Book Consultation
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </span>
          </Link>
          
          <Link
            to="/compliance-check"
            className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-sm pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-sm bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
            <span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-400 tracking-tight bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-sm pt-3 pr-8 pb-3 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <span className="relative z-10">View Framework</span>
            </span>
          </Link>
        </div>
      </div>
      
      <div ref={ref5} className="lg:col-span-4 flex flex-col justify-end gap-12 animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-12 border-t border-white/[0.05] pt-8 lg:border-t-0 lg:pt-0">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium">Efficiency Gain</div>
            <div className="text-5xl italic text-white font-serif">40<span className="not-italic align-top text-2xl font-light text-indigo-300/80 mx-1">%</span></div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium">Implementation</div>
            <div className="text-5xl italic text-white font-serif">6<span className="text-2xl text-white/40 not-italic align-top text-base uppercase tracking-widest ml-2">Weeks</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
