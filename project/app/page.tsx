"use client";

import Accommodations from "@/components/accomodations/Accomodations";
import BookingForm from "@/components/booking/BookingForm";
import FeatureCard from "@/components/FeatureCard";
import { GetInTouch } from "@/components/getintouch/GetInTouch";

const features = [
  {
    title: "Best Price Guarantee",
    description:
      "Find a lower price? We'll match it and give you an extra 10% off.",
  },
  {
    title: "Flexible Cancellation",
    description:
      "Plans change. That's why we offer free cancellation on most rooms.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your booking needs.",
  },
];

export default function Home() {
  return (
    <main>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://ramilakutir.com/assets/images/banner.jpg")',
        }}
      >
        <div className="min-h-screen bg-black/40">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">
                Luxury Stay Awaits
              </h1>
              <p className="text-xl text-amber-200">
                Experience unparalleled comfort and elegance
              </p>
            </div>

            <BookingForm />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Accommodations />
      <GetInTouch />
    </main>
  );
}
