"use client";

import AboutHero from "@/components/about/AboutHero";
import HotelStats from "@/components/about/HotelStats";
import { RoomAmenities } from "@/components/about/RoomAmenities";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AboutHero />
        <HotelStats />
        <RoomAmenities />
      </main>
    </div>
  );
}
