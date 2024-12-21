"use client";

import { ContactOptions } from "@/components/contact/ContactOptions";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for bookings, inquiries, or assistance.
            We're here to help make your stay memorable.
          </p>
        </div>

        <ContactOptions />
      </div>
    </div>
  );
}
