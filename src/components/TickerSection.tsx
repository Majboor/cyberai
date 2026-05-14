import { Database, Sliders, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const TickerSection = () => {
  const items = [
    { icon: Database, text: "ATTACK SURFACE" },
    { icon: Sliders, text: "AI THREAT DETECTION" },
    { icon: TrendingUp, text: "EXPLOITABILITY PROOF" },
    { icon: ShieldCheck, text: "VERIFIED CLOSURE" },
    { icon: Zap, text: "AUTOMATED PATCHING" },
  ];

  return (
    <section className="border-[#d02030]/15 overflow-hidden bg-[#070303] border-b pt-6 pb-6 backdrop-blur">
      <div className="flex w-max animate-scroll">
        <div className="flex items-center gap-16 px-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-white/48 text-[11px] tracking-[0.2em] uppercase font-semibold">
                <Icon className="w-4 h-4 text-[#f52b43]/70" />
                {item.text}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-16 px-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-white/48 text-[11px] tracking-[0.2em] uppercase font-semibold">
                <Icon className="w-4 h-4 text-[#f52b43]/70" />
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TickerSection;
