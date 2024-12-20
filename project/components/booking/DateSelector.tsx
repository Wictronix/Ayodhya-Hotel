"use client";

interface DateSelectorProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

export default function DateSelector({
  label,
  value,
  onChange,
}: DateSelectorProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-amber-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
    </div>
  );
}
