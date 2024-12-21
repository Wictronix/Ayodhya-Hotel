"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Divine Street, Ayodhya, Uttar Pradesh, India",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9988 9988 99",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@hotel.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "24/7 - Always available for our guests",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="bg-amber-100 p-3 rounded-full">
              <Icon className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{detail.title}</h3>
              <p className="text-gray-100">{detail.content}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
