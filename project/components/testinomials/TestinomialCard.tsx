"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  index: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  image,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: index * 1.2 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-amber-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </motion.div>
  );
}
