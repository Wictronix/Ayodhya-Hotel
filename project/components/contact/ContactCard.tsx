"use client";

import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: () => void;
}

export function ContactCard({
  icon: Icon,
  title,
  description,
  action,
}: ContactCardProps) {
  return (
    <button
      onClick={action}
      className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
    >
      <Icon className="h-16 w-16 text-amber-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </button>
  );
}
