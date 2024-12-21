"use client";

import Image from "next/image";

interface FacilityCardProps {
  image: string;
  title: string;
  alt: string;
}

export function FacilityCard({ image, title, alt }: FacilityCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-semibold text-amber-800">{title}</h3>
    </div>
  );
}
