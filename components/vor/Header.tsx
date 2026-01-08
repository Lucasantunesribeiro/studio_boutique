"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";
import { CTAWhatsApp } from "./CTAWhatsApp";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll(); // garante estado correto caso a página já abra "scrolada"
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // fecha o menu ao navegar para outra rota
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHeaderSolid = useMemo(
    () => isScrolled || isMobileMenuOpen,
    [isScrolled, isMobileMenuOpen]
  );

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isHeaderSolid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
  );

  const linkClasses = (href: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-gold-600",
      pathname === href ? "text-gold-600" : "text-foreground/80"
    );

  const mobileLinkClasses = (href: string) =>
    cn(
      "text-base font-medium py-2 transition-colors hover:text-gold-600",
      pathname === href ? "text-gold-600" : "text-foreground/80"
    );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            {BUSINESS_INFO.name.split(" ")[0]}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <CTAWhatsApp size="default" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 hover:bg-accent/10 rounded-md transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden py-6 border-t animate-in slide-in-from-top-5 duration-200",
              // garante contraste mesmo antes do scroll
              "bg-white/95 backdrop-blur-md"
            )}
          >
            <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileLinkClasses(link.href)}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex justify-center">
              <CTAWhatsApp className="w-full max-w-xs" onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
