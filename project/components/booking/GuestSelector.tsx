"use client";

import { Users } from "lucide-react";
import { Guests } from "@/lib/types";

interface GuestSelectorProps {
  value: Guests;
  onChange: (guests: Guests) => void;
}

export default function GuestSelector({ value, onChange }: GuestSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-amber-700 mb-2">
        Guests
      </label>
      <div className="relative">
        <select
          value={`${value.adults},${value.children}`}
          onChange={(e) => {
            const [adults, children] = e.target.value.split(",").map(Number);
            onChange({ adults, children });
          }}
          className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent appearance-none"
        >
          {[
            { adults: 1, children: 0 },
            { adults: 1, children: 1 },
            { adults: 2, children: 0 },
            { adults: 2, children: 1 },
            { adults: 2, children: 2 },
          ].map((option) => (
            <option
              key={`${option.adults}-${option.children}`}
              value={`${option.adults},${option.children}`}
            >
              {option.adults} Adult{option.adults > 1 ? "s" : ""},{" "}
              {option.children} Child{option.children !== 1 ? "ren" : ""}
            </option>
          ))}
        </select>
        <Users className="absolute right-3 top-3 h-5 w-5" />
      </div>
    </div>
  );
}
