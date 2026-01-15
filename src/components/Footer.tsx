import { Link } from "react-router-dom";
import { Cpu, ArrowUpRight, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "group-hover:text-[#1877F2]" },
    { icon: Twitter, label: "Twitter", href: "#", color: "group-hover:text-white" },
    { icon: Youtube, label: "Youtube", href: "#", color: "group-hover:text-[#FF0000]" },
    { icon: Instagram, label: "Instagram", href: "#", color: "group-hover:text-[#E4405F]" },
  ];

  const footerColumns = [
    {
      number: "01",
      title: "About Us",
      links: [
        { text: "Pricing Methodology", href: "#" },
        { text: "Contact Sales", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Latest News", href: "#" },
      ]
    },
    {
      number: "02",
      title: "Support",
      links: [
        { text: "Help Center", href: "#" },
        { text: "API Status", href: "#" },
        { text: "Report Issue", href: "#" },
        { text: "Security Audit", href: "#" },
      ]
    },
    {
      number: "03",
      title: "Community",
      links: [
        { text: "Developer Forum", href: "#" },
        { text: "Events & Hackathons", href: "#" },
        { text: "Partner Program", href: "#" },
        { text: "Careers", href: "#" },
      ]
    },
    {
      number: "04",
      title: "Legal",
      links: [
        { text: "Investor Relations", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Cookie Settings", href: "#" },
      ]
    },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.03] overflow-hidden">
      {/* Vertical Background Lines */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pointer-events-none flex justify-between z-0">
        <div className="w-px h-full bg-white/[0.03]"></div>
        <div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[25%]"></div>
        <div className="hidden md:block w-px h-full bg-white/[0.03] absolute left-1/2 -translate-x-1/2"></div>
        <div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[75%]"></div>
        <div className="w-px h-full bg-white/[0.03]"></div>
      </div>

      {/* Top Highlight Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Social Connections Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/[0.03]">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                className={`group relative py-8 lg:pr-8 flex items-center justify-between border-b md:border-b-0 ${idx < 3 ? 'md:border-r lg:border-r' : ''} border-white/[0.03] hover:bg-white/[0.02] transition-all duration-500 ${idx === 1 ? 'lg:px-8' : ''} ${idx === 3 ? 'lg:pl-8' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`text-white/40 ${social.color} transition-colors duration-300 w-5 h-5`} />
                  <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{social.label}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
                  <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 pb-24">
          {footerColumns.map((column, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-8 ${idx === 0 ? 'lg:pr-8' : idx === 1 ? 'md:pl-8 lg:px-8' : idx === 2 ? 'lg:px-8' : 'md:pl-8 lg:pl-8'} ${idx < 2 ? 'border-r-0 md:border-r border-white/[0.03] border-b md:border-b-0' : idx === 2 ? 'border-r-0 md:border-r border-white/[0.03] border-b md:border-b-0 py-12 md:py-0' : 'py-12 md:py-0'}`}
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-zinc-600 tracking-widest">{column.number}</span>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">{column.title}</h4>
              </div>
              <ul className="flex flex-col gap-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-[13px] text-white/40 hover:text-white transition-colors duration-300">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 border-t border-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/[0.05] rounded-sm flex items-center justify-center">
              <Cpu className="w-3 h-3 text-white/60" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-white/30">© 2025 SAUDI CYBER AI</span>
              <span className="text-[11px] text-white/30">
                A cybersecurity initiative by <span className="text-white/50">Digital Software Market</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[11px] text-emerald-500/80 font-mono">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
