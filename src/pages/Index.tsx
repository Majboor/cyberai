import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import ValidationSection from "@/components/ValidationSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#030303] text-white selection:bg-[#d02030]/40 selection:text-white overflow-x-hidden min-h-screen relative">
      <BackgroundAnimation />

      <div className="border-x border-[#d02030]/10 min-h-screen w-full max-w-[1440px] mx-auto relative z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,43,67,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(245,43,67,0.03)_1px,transparent_1px)] bg-[size:12rem_24rem] pointer-events-none z-0"></div>

        <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-12 lg:px-24">
          <div className="relative w-px h-full bg-[#d02030]/10 overflow-hidden">
            <div className="beam"></div>
          </div>
          <div className="relative w-px h-full bg-[#d02030]/10 hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2">
            <div className="beam beam-delay-1"></div>
          </div>
          <div className="relative w-px h-full bg-[#d02030]/10 overflow-hidden">
            <div className="beam beam-delay-2"></div>
          </div>
        </div>

        <Header />

        <main className="z-10 relative pt-[108px]">
          <HeroSection />
          <TickerSection />
          <ValidationSection />
          <FeaturesGrid />
          <MetricsSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
