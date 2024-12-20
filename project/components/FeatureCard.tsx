interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md border border-amber-100">
      <h3 className="text-lg font-semibold text-amber-800 mb-2">{title}</h3>
      <p className="text-amber-600">{description}</p>
    </div>
  );
}
