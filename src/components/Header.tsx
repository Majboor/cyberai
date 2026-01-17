import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Header = () => {
  return (
    <nav className="relative z-50 border-b border-white/[0.03] backdrop-blur-sm bg-[#020202]/80">
      <div className="md:px-12 lg:px-24 flex h-20 pr-6 pl-6 items-center justify-between max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-3 animate-on-scroll">
          <Cpu className="w-6 h-6 text-white stroke-[1.5]" />
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">
              Saudi Cyber AI
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-white/40 mt-1">
              Made by techrealm
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <a href="#features" className="text-[13px] hover:text-white transition-colors text-white/60">
            Features
          </a>
          <a href="#case-studies" className="text-[13px] hover:text-white transition-colors text-white/60">
            Case Studies
          </a>
          <a href="#careers" className="text-[13px] hover:text-white transition-colors text-white/60">
            Careers
          </a>
        </div>

        <div className="flex items-center gap-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <a href="/login" className="text-[13px] hover:text-white transition-colors hidden sm:block text-white/60">
            Client Login
          </a>
          <Link
            to="/compliance-check"
            className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 rounded-sm pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-sm bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
            <span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-[11px] font-medium text-zinc-300 tracking-tight bg-black w-full h-full rounded-sm pt-2 pr-4 pb-2 pl-4 relative z-10 uppercase tracking-widest">
              Audit Request
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;