import type { Metadata } from "next";
import { experienceContent } from "@/lib/content";
import { Check, X } from "lucide-react";
import { CTAWhatsApp } from "@/components/vor/CTAWhatsApp";

export const metadata: Metadata = {
  title: "Experiência VOR | Método e Diferenciais",
  description: "Conheça o método VOR: avaliação completa, periodização inteligente e acompanhamento constante para resultados duradouros.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-cream-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              {experienceContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              {experienceContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            {experienceContent.method.title}
          </h2>

          <div className="max-w-5xl mx-auto space-y-20">
            {experienceContent.method.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gold-100 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-gold-700" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-6xl font-bold text-gold-200 mb-2">
                      {step.number}
                    </div>
                    <h3 className="font-display text-3xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para quem é / não é */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Para quem é */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Check className="h-6 w-6 text-green-700" aria-hidden="true" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">
                {experienceContent.forWho.title}
              </h3>
              <ul className="space-y-4">
                {experienceContent.forWho.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é para quem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <X className="h-6 w-6 text-red-700" aria-hidden="true" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">
                {experienceContent.notForWho.title}
              </h3>
              <ul className="space-y-4">
                {experienceContent.notForWho.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pronto para experimentar?
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Agende uma visita e veja na prática como funciona nosso método
            </p>
            <CTAWhatsApp
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              message="Olá! Vi a página Experiência e gostaria de agendar uma visita ao VOR Studio."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
