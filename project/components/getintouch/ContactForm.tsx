"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="mt-1"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <Textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1"
            placeholder="How can we help you?"
            rows={4}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
        >
          Send Message
        </Button>
      </div>
    </motion.form>
  );
}
