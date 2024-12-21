"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BedDouble, Users, Wifi, Coffee } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  size: number;
  onSelect: (id: string) => void;
}

export function RoomCard({
  id,
  name,
  description,
  price,
  image,
  capacity,
  size,
  onSelect,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{size} m²</span>
          </div>
          <Wifi className="h-4 w-4" />
          <Coffee className="h-4 w-4" />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-amber-600">
            <span className="text-2xl font-bold">₹{price}</span>
            <span className="text-sm">/night</span>
          </div>
          <Button
            onClick={() => onSelect(id)}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
