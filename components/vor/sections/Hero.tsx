import { heroContent } from "@/lib/content";
import { CTAWhatsApp } from "../CTAWhatsApp";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-100 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
            {heroContent.subheadline}
          </p>

          {/* CTA */}
          <div className="mb-16">
            <CTAWhatsApp size="lg" className="text-lg px-10 py-6 h-auto" />
          </div>

          {/* Proof Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {heroContent.proofPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-black/5"
                >
                  <Icon className="h-8 w-8 text-gold-600" aria-hidden="true" />
                  <p className="font-medium text-sm">{point.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
          <div className="w-1 h-2 bg-foreground/20 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
