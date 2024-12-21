"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./TestinomialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    content:
      "The attention to detail and the warm hospitality made my stay unforgettable. The amenities are world-class and the staff goes above and beyond.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Family Vacation",
    content:
      "Perfect location, exceptional service, and amazing facilities. Our family had the most wonderful time. The kids especially loved the resort activities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Honeymoon Stay",
    content:
      "A truly magical experience! The romantic ambiance and luxurious accommodations made our honeymoon absolutely perfect. We'll definitely return.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why guests choose our hotel for their memorable stays
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
