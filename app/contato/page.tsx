"use client";

import { useState } from "react";
import { contactContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/vor/ui/card";
import { Button } from "@/components/vor/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER, BUSINESS_INFO } from "@/lib/constants";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    objetivo: "",
    horario: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Gostaria de agendar uma visita ao VOR Studio.

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Objetivo:* ${contactContent.objectives.find(o => o.value === formData.objetivo)?.label || formData.objetivo}
*Preferência de horário:* ${contactContent.schedulePreference.find(h => h.value === formData.horario)?.label || formData.horario}
${formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-cream-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              {contactContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              {contactContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Contato */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-3xl">
                    Preencha seus dados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-sm font-medium mb-2"
                      >
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="objetivo"
                        className="block text-sm font-medium mb-2"
                      >
                        Qual seu objetivo? *
                      </label>
                      <select
                        id="objetivo"
                        required
                        value={formData.objetivo}
                        onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      >
                        <option value="">Selecione...</option>
                        {contactContent.objectives.map((obj) => (
                          <option key={obj.value} value={obj.value}>
                            {obj.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="horario"
                        className="block text-sm font-medium mb-2"
                      >
                        Preferência de horário *
                      </label>
                      <select
                        id="horario"
                        required
                        value={formData.horario}
                        onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      >
                        <option value="">Selecione...</option>
                        {contactContent.schedulePreference.map((pref) => (
                          <option key={pref.value} value={pref.value}>
                            {pref.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-sm font-medium mb-2"
                      >
                        Mensagem (opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                        placeholder="Alguma dúvida ou informação adicional?"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Enviar pelo WhatsApp
                    </Button>

                    <p className="text-xs text-foreground/60 text-center">
                      Ao clicar, você será redirecionado para o WhatsApp com a mensagem pronta
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Outras formas de contato
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Escolha a melhor forma de falar conosco. Nossa equipe está pronta para atendê-lo.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="bg-cream-50 border-none hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-gold-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-sm text-foreground/70 mb-2">
                        Atendimento rápido e direto
                      </p>
                      <a
                        href={`${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                      >
                        {BUSINESS_INFO.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-cream-50 border-none hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-sm text-foreground/70 mb-2">
                        Seg-Sex: 06:00 - 21:00
                      </p>
                      <a
                        href={`tel:${BUSINESS_INFO.contact.phone}`}
                        className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                      >
                        {BUSINESS_INFO.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-cream-50 border-none hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <p className="text-sm text-foreground/70 mb-2">
                        Resposta em até 24h
                      </p>
                      <a
                        href={`mailto:${BUSINESS_INFO.contact.email}`}
                        className="text-gold-600 hover:text-gold-700 font-medium text-sm"
                      >
                        {BUSINESS_INFO.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-gold-50 to-cream-100 border-gold-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Horário de atendimento</h3>
                  <div className="space-y-1 text-sm text-foreground/70">
                    <p>Segunda a Sexta: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Sábado: {BUSINESS_INFO.hours.saturday}</p>
                    <p>Domingo: {BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
