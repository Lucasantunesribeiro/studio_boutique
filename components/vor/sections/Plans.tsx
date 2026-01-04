import Link from "next/link";
import { plans } from "@/lib/content";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Plans() {
  return (
    <section className="py-24 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Todos os planos incluem acesso completo ao studio, programa personalizado e acompanhamento profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden transition-all hover:shadow-xl",
                plan.highlighted && "border-gold-500 border-2 shadow-lg scale-105"
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="font-display text-3xl mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-8">
                <div className="mb-8">
                  <span className="font-display text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/contato" className="w-full">
                  <Button
                    variant={plan.highlighted ? "gold" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/60 mt-12">
          Oferecemos 1 semana experimental por R$ 97. Valor abatido do primeiro mês em caso de matrícula.
        </p>
      </div>
    </section>
  );
}
