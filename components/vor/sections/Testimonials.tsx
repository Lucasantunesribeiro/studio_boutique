import { testimonials } from "@/lib/content";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          O que nossos alunos dizem
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Resultados reais de pessoas reais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-gold-400 mb-4" aria-hidden="true" />
                <p className="text-sm leading-relaxed mb-6 text-foreground/80">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
