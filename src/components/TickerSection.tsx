import { Database, Sliders, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const TickerSection = () => {
  const items = [
    { icon: Database, text: "DATA GOVERNANCE" },
    { icon: Sliders, text: "AI THREAT DETECTION" },
    { icon: TrendingUp, text: "PREDICTIVE ANALYTICS" },
    { icon: ShieldCheck, text: "ETHICAL COMPLIANCE" },
    { icon: Zap, text: "PROCESS AUTOMATION" },
  ];

  return (
    <section className="border-white/[0.03] overflow-hidden bg-[#050505] border-b pt-6 pb-6 backdrop-blur">
      <div className="flex w-max animate-scroll">
        <div className="flex items-center gap-16 px-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold">
                <Icon className="w-4 h-4 text-white/30" />
                {item.text}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-16 px-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold">
                <Icon className="w-4 h-4 text-white/30" />
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

