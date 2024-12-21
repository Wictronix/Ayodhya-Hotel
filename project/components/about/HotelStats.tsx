interface StatCardProps {
  number: string | number;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-amber-100 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-200">
      <div className="text-4xl font-bold text-amber-800 mb-2">{number}</div>
      <div className="text-amber-700 uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
}

export default function HotelStats() {
  const stats = [
    { number: 50, label: "Rooms" },
    { number: 1, label: "Restaurant" },
    { number: 25, label: "Staffs" },
    { number: 3, label: "Managers" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
