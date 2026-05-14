const validationCards = [
  {
    image: "/pointblank/validation-leader.png",
    title: "CyberKSA Core",
    description: "Offensive testing, SOC, vCISO, breach response, and investigations.",
  },
  {
    image: "/pointblank/validation-detection.png",
    title: "Detection Ready",
    description: "AI-assisted workflows for scan, prove, patch, and verify cycles.",
  },
  {
    image: "/pointblank/validation-radar.png",
    title: "Risk Radar",
    description: "Mapped coverage across apps, APIs, codebases, cloud, and identity.",
  },
];

const ValidationSection = () => {
  return (
    <section className="border-b border-[#d02030]/15 bg-[#f7f7f5] px-5 py-10 text-zinc-950 md:px-10 md:py-12 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 lg:grid-cols-3">
        {validationCards.map((card) => (
          <article key={card.title} className="group relative aspect-[1.78] overflow-hidden rounded-sm bg-zinc-950">
            <img
              src={card.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.18))]" />
            <div className="absolute inset-x-[12%] top-1/2 -translate-y-1/2 text-center">
              <div className="text-[clamp(1.65rem,3vw,3.2rem)] font-black uppercase leading-none tracking-tight text-white">
                {card.title}
              </div>
              <p className="mx-auto mt-5 max-w-[24rem] text-[clamp(0.9rem,1.18vw,1.2rem)] font-semibold leading-snug text-white/86">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ValidationSection;
