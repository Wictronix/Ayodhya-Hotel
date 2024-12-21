"use client";

import { RoomCard } from "./RoomCard";

const rooms = [
  {
    id: "deluxe-1",
    name: "Deluxe Room",
    description: "Spacious room with modern amenities and city view",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
    capacity: 2,
    size: 32,
  },
  {
    id: "suite-1",
    name: "Executive Suite",
    description: "Luxury suite with separate living area and premium amenities",
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    capacity: 3,
    size: 45,
  },
  {
    id: "family-1",
    name: "Family Room",
    description: "Perfect for families with interconnected rooms",
    price: 10999,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
    capacity: 4,
    size: 55,
  },
];

interface RoomListProps {
  onRoomSelect: (id: string) => void;
}

export function RoomList({ onRoomSelect }: RoomListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} onSelect={onRoomSelect} />
      ))}
    </div>
  );
}
