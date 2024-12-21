"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function GetInTouch() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://ramilakutir.com/assets/images/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-amber-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-amber-50/90 max-w-2xl mx-auto">
            Have questions about our services or want to make a special request?
            We're here to help make your stay extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl"
          >
            <ContactInfo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
