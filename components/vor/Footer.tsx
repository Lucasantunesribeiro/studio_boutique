import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              {BUSINESS_INFO.name.split(" ")[0]}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {BUSINESS_INFO.description}
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="flex items-center gap-2 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.contact.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {BUSINESS_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="flex gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <address className="not-italic">
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.neighborhood}<br />
                {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.state}<br />
                {BUSINESS_INFO.address.zipCode}
              </address>
            </div>
            <div className="mt-4 text-sm text-white/70">
              <p className="font-medium text-white mb-2">Horários</p>
              <p>Seg-Sex: {BUSINESS_INFO.hours.weekdays}</p>
              <p>Sáb: {BUSINESS_INFO.hours.saturday}</p>
              <p>Dom: {BUSINESS_INFO.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
