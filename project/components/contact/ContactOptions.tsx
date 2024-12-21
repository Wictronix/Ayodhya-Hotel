"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { ContactCard } from "./ContactCard";

const PHONE_NUMBER = "+9199889988";

export function ContactOptions() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I would like to make a booking inquiry."
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <ContactCard
        icon={PhoneCall}
        title="Call Us"
        description="Speak directly with our team for immediate assistance"
        action={handleCall}
      />
      <ContactCard
        icon={MessageCircle}
        title="WhatsApp"
        description="Send us a message on WhatsApp for quick responses"
        action={handleWhatsApp}
      />
    </div>
  );
}
