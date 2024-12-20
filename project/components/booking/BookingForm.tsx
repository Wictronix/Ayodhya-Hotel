"use client";

import { useState } from "react";
import DateSelector from "./DateSelector";
import RoomSelector from "./RoomSelector";
import GuestSelector from "./GuestSelector";
import { BookingData } from "@/lib/types";

export default function BookingForm() {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: "yyyy-mm-dd",
    checkOut: "yyyy-mm-dd",
    rooms: 1,
    guests: { adults: 1, children: 0 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", bookingData);
    // You can add API call here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-4xl mx-auto border border-amber-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DateSelector
          label="Check In"
          value={bookingData.checkIn}
          onChange={(date) => setBookingData({ ...bookingData, checkIn: date })}
        />
        <DateSelector
          label="Check Out"
          value={bookingData.checkOut}
          onChange={(date) =>
            setBookingData({ ...bookingData, checkOut: date })
          }
        />
        <RoomSelector
          value={bookingData.rooms}
          onChange={(rooms) => setBookingData({ ...bookingData, rooms })}
        />
        <GuestSelector
          value={bookingData.guests}
          onChange={(guests) => setBookingData({ ...bookingData, guests })}
        />
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Check Availability
        </button>
      </div>
    </form>
  );
}
