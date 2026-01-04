import { CTAWhatsApp } from "../CTAWhatsApp";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
            Agende uma visita gratuita e conheça o VOR Studio. Sem compromisso.
          </p>
          <CTAWhatsApp
            size="lg"
            className="text-lg px-10 py-6 h-auto"
            message="Olá! Gostaria de agendar uma visita gratuita ao VOR Studio."
          />
          <p className="text-sm text-foreground/60 mt-8">
            Resposta em até 2 horas durante horário comercial
          </p>
        </div>
      </div>
    </section>
  );
}
