"use client";

import { AmenityItem } from "./AmenityItem";
import { FacilityCard } from "./FacilityCard";

const amenities = [
  { text: "Towel" },
  { text: "Bath towel" },
  { text: "Slippers" },
  { text: "Toothbrush" },
  { text: "Shaving razor" },
  { text: "Hair Brush" },
  { text: "Hair band" },
  { text: "Cotton swab" },
  { text: "Negative ion hairdryer" },
  { text: "Shampoo,conditioner" },
  { text: "body soap,hand soap" },
  { text: "bottles" },
];

const facilities = [
  {
    title: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    alt: "Luxury restaurant interior",
  },
  {
    title: "Banquet",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2070",
    alt: "Elegant banquet hall",
  },
  {
    title: "Resort",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    alt: "Luxurious resort facilities",
  },
  {
    title: "Reception",
    image:
      "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2070",
    alt: "Modern hotel reception",
  },
];

export function RoomAmenities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-amber-800 mb-8">
          Room Amenities:
        </h2>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <AmenityItem key={index} text={amenity.text} />
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              image={facility.image}
              title={facility.title}
              alt={facility.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
