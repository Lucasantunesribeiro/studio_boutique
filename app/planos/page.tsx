import type { Metadata } from "next";
import { Plans } from "@/components/vor/sections/Plans";
import { CTAWhatsApp } from "@/components/vor/CTAWhatsApp";

export const metadata: Metadata = {
  title: "Planos e Preços | VOR Fitness Studio",
  description: "Escolha o plano ideal para seus objetivos. Starter, Pro ou Unlimited com programa personalizado e acompanhamento profissional.",
};

export default function PlanosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-cream-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Planos e preços
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Investimento transparente. Sem taxas escondidas. Sem fidelidade obrigatória.
            </p>
          </div>
        </div>
      </section>

      {/* Planos */}
      <Plans />

      {/* Incluído em todos */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-center mb-12">
              Incluído em todos os planos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Programa de treinamento personalizado",
                "Avaliação física completa",
                "Acompanhamento profissional em todas as aulas",
                "Acesso ao app de treinamento",
                "Ajustes contínuos no programa",
                "Suporte via WhatsApp",
                "Acesso a todos os equipamentos",
                "Vestiários com ducha",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Planos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-center mb-12">
              Dúvidas sobre planos
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Posso mudar de plano depois?
                </h3>
                <p className="text-foreground/70">
                  Sim! Você pode fazer upgrade ou downgrade a qualquer momento. O ajuste é proporcional ao período restante.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tem taxa de matrícula?
                </h3>
                <p className="text-foreground/70">
                  Não cobramos taxa de matrícula. O valor indicado é tudo que você paga por mês.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Qual a forma de pagamento?
                </h3>
                <p className="text-foreground/70">
                  Aceitamos cartão de crédito, débito automático e PIX. O pagamento é mensal e sem fidelidade.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Posso cancelar a qualquer momento?
                </h3>
                <p className="text-foreground/70">
                  Sim. Basta avisar com 30 dias de antecedência. Sem multa, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ainda com dúvidas?
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Fale conosco e tire todas as suas dúvidas sobre planos e preços
            </p>
            <CTAWhatsApp
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              message="Olá! Tenho dúvidas sobre os planos do VOR Studio."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
