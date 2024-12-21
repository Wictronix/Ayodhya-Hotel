"use client";

import { useState } from "react";
import { RoomList } from "@/components/rooms/RoomList";
import { BookingForm } from "@/components/rooms/BookingForm";
import { TestimonialSection } from "@/components/testinomials/TestinomialSection";

export default function RoomsPage() {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Rooms</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of luxurious rooms, each designed for your
            comfort and relaxation.
          </p>
        </div>

        <RoomList onRoomSelect={setSelectedRoomId} />

        {selectedRoomId && (
          <BookingForm
            roomId={selectedRoomId}
            onClose={() => setSelectedRoomId(null)}
          />
        )}
      </div>
      <TestimonialSection />
    </div>
  );
}
