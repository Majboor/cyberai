import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, ScanSearch, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  return (
    <section className="relative min-h-[720px] overflow-hidden border-b border-[#d02030]/15 px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20 lg:px-24">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <img
          src="/pointblank/hero-security-core.png"
          alt="Abstract security automation core"
          className="h-full w-full object-cover object-[72%_50%] opacity-78"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.72)_26%,rgba(3,3,3,0.18)_58%,rgba(3,3,3,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgba(245,43,67,0.22),transparent_34%)]" />
      </div>

      <div className="relative z-10 grid min-h-[560px] items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div ref={ref1} className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 rounded-sm border border-[#d02030]/45 bg-[#d02030]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffb4bb]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f52b43]" />
              Autonomous AI Defense
            </span>
          </div>

          <h1
            ref={ref2}
            className="animate-on-scroll max-w-4xl text-[3.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-[5.8rem]"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block">AI finds risk.</span>
            <span className="block text-[#f52b43]">CyberAI closes it.</span>
          </h1>

          <p
            ref={ref3}
            className="max-w-xl text-lg leading-relaxed text-white/64 md:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            Scan, prove, patch, and verify security issues across applications, APIs, codebases, cloud systems, and managed operations for Saudi and Gulf enterprises.
          </p>

          <div ref={ref4} className="animate-on-scroll flex flex-col gap-4 pt-2 sm:flex-row" style={{ animationDelay: "0.5s" }}>
            <Link
              to="/compliance-check"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#d02030] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_36px_-18px_rgba(245,43,67,0.9)] transition-colors hover:bg-[#f52b43]"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 stroke-[2]" />
            </Link>

            <Link
              to="/compliance-check"
              className="inline-flex items-center justify-center rounded-lg border border-[#d02030]/42 bg-black/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/78 transition-colors hover:border-[#ff5a66] hover:bg-[#d02030]/12 hover:text-white"
            >
              View Framework
            </Link>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-3 pt-8 text-white/70 sm:grid-cols-3">
            {[
              { icon: ScanSearch, title: "Scan", detail: "Attack surface mapped" },
              { icon: Code2, title: "Patch", detail: "Root cause fixed" },
              { icon: ShieldCheck, title: "Verify", detail: "Closure proven" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l border-[#d02030]/45 bg-black/24 px-4 py-3">
                  <Icon className="mb-3 h-5 w-5 text-[#f52b43]" />
                  <div className="text-sm font-bold uppercase tracking-[0.12em] text-white">{item.title}</div>
                  <div className="mt-1 text-xs text-white/52">{item.detail}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 lg:hidden">
          <div className="relative aspect-[1.54] overflow-hidden rounded-lg border border-[#d02030]/20">
            <img
              src="/pointblank/hero-security-core.png"
              alt="Abstract security automation core"
              className="h-full w-full object-cover object-[72%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,3,3,0.36))]" />
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,43,67,0.8),transparent)]" />
      <CheckCircle2 className="absolute bottom-8 right-8 hidden h-6 w-6 text-[#32d583]/70 lg:block" />
    </section>
  );
};

export default HeroSection;
