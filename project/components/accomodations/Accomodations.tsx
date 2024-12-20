import RoomCard from "./RoomCard";

const rooms = [
  {
    title: "Deluxe Large Bed",
    image:
      "https://ramilakutir.com/wp-content/uploads/sites/3/2023/05/mueen-agherdien-YG8dsHZxtU4-unsplash-780x520.jpg", // Replace with your actual image path
    area: 240,
    guests: 2,
    bedType: "1 King Bed",
    description:
      "Our 16 elegantly designed bedrooms, each measuring 240 square feet, feature traditional decor with handmade wooden furniture and large windows offering views of the surroundings.",
  },
  {
    title: "Twin Bed Rooms",
    image:
      "https://ramilakutir.com/wp-content/uploads/sites/3/2023/05/mueen-agherdien-YG8dsHZxtU4-unsplash-780x520.jpg",
    area: 200,
    guests: 4,
    bedType: "Twin Bed",
    description:
      "We offer two 200 square foot twin-bedded rooms, each designed with handmade furniture and large windows, ideal for friends or solo travelers who prefer separate beds.",
  },
];

export default function Accommodations() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-serif text-amber-900">
            The Accommodations
          </h2>
          <a
            href="/rooms"
            className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors duration-200"
          >
            Discover All Rooms
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
