import type { Metadata } from "next";
import { locationContent } from "@/lib/content";
import { MapPin, Car, Bike, Bus } from "lucide-react";
import { CTAWhatsApp } from "@/components/vor/CTAWhatsApp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/vor/ui/card";

export const metadata: Metadata = {
  title: "Localização e Como Chegar | VOR Fitness Studio",
  description: "Encontre o VOR Studio em Pinheiros, São Paulo. Informações sobre estacionamento, transporte público e bairros atendidos.",
};

export default function LocalizacaoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-cream-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              {locationContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              Localização privilegiada em Pinheiros, com fácil acesso
            </p>
          </div>
        </div>
      </section>

      {/* Mapa e Endereço */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-cream-200">
                {/* Placeholder do mapa */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold-200 to-cream-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gold-700 mx-auto mb-4" />
                    <p className="text-foreground/60 font-medium">
                      Mapa do Google Maps
                    </p>
                    <p className="text-sm text-foreground/40 mt-2 px-4">
                      Substitua pelo iframe do Google Maps
                    </p>
                  </div>
                </div>
                {/* Uncomment para usar iframe real do Google Maps */}
                {/* <iframe
                  src={locationContent.address.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do VOR Studio"
                /> */}
              </div>
            </div>

            {/* Informações */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  {locationContent.address.title}
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {locationContent.address.full}
                </p>
                <div className="mt-6">
                  <CTAWhatsApp
                    message="Olá! Gostaria de saber como chegar ao VOR Studio."
                    size="default"
                  >
                    Como chegar
                  </CTAWhatsApp>
                </div>
              </div>

              <Card className="bg-cream-50 border-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-gold-600" />
                    Bairros que atendemos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {locationContent.neighborhoods.list.map((neighborhood, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm text-foreground/70"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como chegar */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            Como chegar
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carro */}
            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 mb-4 mx-auto">
                  <Car className="h-6 w-6 text-gold-700" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">
                  {locationContent.parking.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {locationContent.parking.options.map((option, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gold-600 mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Transporte público */}
            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 mb-4 mx-auto">
                  <Bus className="h-6 w-6 text-gold-700" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">
                  {locationContent.transport.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {locationContent.transport.options.map((option, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gold-600 mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Bicicleta */}
            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-100 mb-4 mx-auto">
                  <Bike className="h-6 w-6 text-gold-700" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">
                  De bicicleta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Bicicletário coberto e seguro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Vestiário com ducha disponível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Próximo à ciclovia da Av. Faria Lima</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Venha nos conhecer
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Agende uma visita e conheça nossa estrutura pessoalmente
            </p>
            <CTAWhatsApp
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              message="Olá! Gostaria de agendar uma visita ao VOR Studio."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
