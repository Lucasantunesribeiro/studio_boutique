"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER } from "@/lib/constants";

interface CTAWhatsAppProps {
  message?: string;
  variant?: "default" | "gold" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function CTAWhatsApp({
  message = "Olá! Gostaria de agendar uma visita ao VOR Studio.",
  variant = "gold",
  size = "lg",
  className,
  children,
  onClick,
}: CTAWhatsAppProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const handleClick = () => {
    onClick?.();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      aria-label="Reservar visita no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children || "Reservar visita no WhatsApp"}
    </Button>
  );
}
