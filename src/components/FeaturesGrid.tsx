import { Search, FileCode, BarChart2, Network, RefreshCw, Lock } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const FeaturesGrid = () => {
  const features = [
    {
      number: "01",
      icon: Search,
      title: "Infrastructure Audit",
      description: "Deep-dive analysis of your current security stack to identify readiness for AI-powered threat detection and compliance automation.",
    },
    {
      number: "02",
      icon: FileCode,
      title: "AI Model Integration",
      description: "Seamless API orchestration connecting proprietary security data with foundational AI models for threat intelligence.",
    },
    {
      number: "03",
      icon: BarChart2,
      title: "Strategic Roadmapping",
      description: "Quarterly execution plans that align AI capabilities with core business KPIs and regulatory compliance requirements.",
    },
    {
      number: "04",
      icon: Network,
      title: "Threat Intelligence Network",
      description: "Real-time threat data mapping to enable semantic search and retrieval systems with sub-millisecond latency.",
    },
    {
      number: "05",
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Automated feedback loops that refine model output accuracy based on threat patterns and new attack vectors.",
    },
    {
      number: "06",
      icon: Lock,
      title: "Security Protocol",
      description: "Enterprise-grade encryption and PII masking layers to ensure data sovereignty while leveraging public AI models.",
    },
  ];

  const delays = ["0.2s", "0.3s", "0.4s", "0.5s", "0.6s", "0.7s"];

  return (
    <section id="features" className="grid border-white/[0.03] md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:p-24 bg-[#020202] border-b px-6 py-6 gap-x-6 gap-y-6">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <SpotlightCard
            key={idx}
            className={`p-8 lg:p-12 group animate-on-scroll`}
            style={{ animationDelay: delays[idx] } as React.CSSProperties}
          >
            <span className="absolute top-8 right-8 text-[11px] font-mono text-white/20">{feature.number}</span>
            <div className="relative z-10 flex flex-col h-full justify-between gap-16">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl text-white mb-3 font-serif italic tracking-wide">{feature.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </SpotlightCard>
        );
      })}
    </section>
  );
};

export default FeaturesGrid;

