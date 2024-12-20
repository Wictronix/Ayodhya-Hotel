"use client";

import { Square, Users, Bed } from "lucide-react";

interface RoomFeature {
  icon: React.ReactNode;
  text: string;
}

interface RoomCardProps {
  title: string;
  image: string;
  area: number;
  guests: number;
  bedType: string;
  description: string;
}

export default function RoomCard({
  title,
  image,
  area,
  guests,
  bedType,
  description,
}: RoomCardProps) {
  const features: RoomFeature[] = [
    { icon: <Square className="w-5 h-5" />, text: `${area} Sq/ft` },
    { icon: <Users className="w-5 h-5" />, text: `${guests} Guests` },
    { icon: <Bed className="w-5 h-5" />, text: bedType },
  ];

  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
      />
      <h3 className="text-3xl font-serif text-amber-900 mb-4">{title}</h3>

      <div className="flex gap-6 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-amber-700">
            {feature.icon}
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      <p className="text-amber-800/80 leading-relaxed">{description}</p>
    </div>
  );
}
