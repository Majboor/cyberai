import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Cpu, Globe2, Menu, Search, X } from "lucide-react";
import { megaNavSections, type MegaNavSection } from "@/data/navigation";

const utilityLinks = ["Experiencing a Breach?", "Blog"];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(megaNavSections[0]?.label ?? null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSection = megaNavSections.find((section) => section.label === activeMenu);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-end gap-6 px-5 text-[13px] text-white/62 md:px-10 lg:px-16">
        {utilityLinks.map((label) => (
          <a key={label} href={label === "Blog" ? "/blog" : "/incident-response"} className="hidden transition-colors hover:text-white md:block">
            {label}
          </a>
        ))}
        <button className="hidden text-white/70 transition-colors hover:text-white md:inline-flex" aria-label="Search">
          <Search className="h-4 w-4" />
        </button>
        <button className="hidden items-center gap-1 text-white/70 transition-colors hover:text-white md:inline-flex" aria-label="Language">
          <Globe2 className="h-4 w-4" />
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      <nav
        className="relative"
        onMouseLeave={() => setActiveMenu(null)}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <Cpu className="h-7 w-7 text-white stroke-[1.5]" />
            <span className="flex flex-col leading-none">
              <span className="text-[22px] font-semibold tracking-tight text-white">CyberAI</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                Saudi security group
              </span>
            </span>
          </Link>

          <div className="hidden h-full items-center gap-1 lg:flex">
            {megaNavSections.map((section) => (
              <MegaNavButton
                key={section.label}
                section={section}
                active={activeMenu === section.label}
                onOpen={() => setActiveMenu(section.label)}
              />
            ))}
            <a
              href="#pricing"
              className="flex h-full items-center px-4 text-[15px] font-medium text-white/72 transition-colors hover:text-white"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Pricing
            </a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/compliance-check"
              className="rounded-lg bg-white px-5 py-3 text-[14px] font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Get Started
            </Link>
            <Link
              to="/compliance-check"
              className="rounded-lg border border-white/35 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {activeSection?.columns ? <DesktopMegaPanel section={activeSection} /> : null}
        {mobileOpen ? <MobileMegaPanel onClose={() => setMobileOpen(false)} /> : null}
      </nav>
    </header>
  );
};

type MegaNavButtonProps = {
  section: MegaNavSection;
  active: boolean;
  onOpen: () => void;
};

const MegaNavButton = ({ section, active, onOpen }: MegaNavButtonProps) => (
  <button
    className={[
      "relative flex h-full items-center gap-2 px-4 text-[15px] font-medium transition-colors",
      active ? "text-white" : "text-white/72 hover:text-white",
    ].join(" ")}
    onMouseEnter={onOpen}
    onFocus={onOpen}
    aria-expanded={active}
  >
    {section.label}
    <ChevronDown className={["h-4 w-4 transition-transform", active ? "rotate-180" : ""].join(" ")} />
    {active ? <span className="absolute inset-x-4 bottom-0 h-px bg-white" /> : null}
  </button>
);

const DesktopMegaPanel = ({ section }: { section: MegaNavSection }) => (
  <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 border-y border-white/10 bg-[#f7f7f5] text-zinc-950 shadow-[0_12px_28px_rgba(0,0,0,0.24)] lg:block">
    <div
      className={[
        "mx-auto grid max-w-[1440px] gap-6 px-10 py-8 lg:px-16",
        section.columns && section.columns.length > 3 ? "grid-cols-5" : "grid-cols-3",
      ].join(" ")}
    >
      {section.columns?.map((column) => (
        <div key={column.title} className="min-w-0">
          <div className="mb-4 border-b border-zinc-300 pb-3 text-[15px] font-semibold text-zinc-950">
            {column.title}
          </div>
          <div className="space-y-1">
            {column.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={[
                  "block border-l px-4 py-3 transition-colors",
                  item.featured
                    ? "border-[#6d28d9] bg-violet-50 text-[#4c1d95]"
                    : "border-transparent hover:border-zinc-300 hover:bg-white",
                ].join(" ")}
              >
                <span className="block text-[15px] font-semibold leading-snug">{item.title}</span>
                <span className="mt-1 block text-[13px] font-medium leading-snug text-zinc-600">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MobileMegaPanel = ({ onClose }: { onClose: () => void }) => (
  <div className="max-h-[calc(100vh-108px)] overflow-y-auto border-t border-white/10 bg-[#050505] px-5 py-4 lg:hidden">
    <div className="space-y-4">
      {megaNavSections.map((section) => (
        <details key={section.label} className="border-b border-white/10 pb-4" open={section.label === "Platform"}>
          <summary className="cursor-pointer list-none text-[15px] font-semibold text-white">
            <span className="inline-flex w-full items-center justify-between">
              {section.label}
              <ChevronDown className="h-4 w-4 text-white/55" />
            </span>
          </summary>
          <div className="mt-4 space-y-5">
            {section.columns?.map((column) => (
              <div key={column.title}>
                <div className="mb-2 text-[13px] font-semibold text-white/52">{column.title}</div>
                <div className="space-y-1">
                  {column.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-[14px] text-white/78 hover:bg-white/8 hover:text-white"
                      onClick={onClose}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link
          to="/compliance-check"
          className="rounded-lg bg-white px-4 py-3 text-center text-[14px] font-semibold text-black"
          onClick={onClose}
        >
          Get Started
        </Link>
        <Link
          to="/compliance-check"
          className="rounded-lg border border-white/25 px-4 py-3 text-center text-[14px] font-semibold text-white"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
