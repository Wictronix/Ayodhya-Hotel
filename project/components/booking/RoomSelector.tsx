"use client";

import { Bed } from "lucide-react";

interface RoomSelectorProps {
  value: number;
  onChange: (rooms: number) => void;
}

export default function RoomSelector({ value, onChange }: RoomSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-amber-700 mb-2">
        Rooms
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent appearance-none"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Room{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <Bed className="absolute right-3 top-3 h-5 w-5" />
      </div>
    </div>
  );
}
