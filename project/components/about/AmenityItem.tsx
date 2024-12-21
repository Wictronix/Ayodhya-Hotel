"use client";

import { CheckIcon } from "lucide-react";

interface AmenityItemProps {
  text: string;
}

export function AmenityItem({ text }: AmenityItemProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckIcon className="h-5 w-5 text-amber-500" />
      <span className="text-gray-600">{text}</span>
    </div>
  );
}
    