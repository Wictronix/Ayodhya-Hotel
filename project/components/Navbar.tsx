"use client";

import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-50 py-2 px-4 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Welcome to The Ayodhya Hotel</p>
          <div className="flex gap-4">
            <a href="tel:+9199889988" className="hover:text-amber-600">
              +91 99889988
            </a>
            <a href="mailto:info@hotel" className="hover:text-amber-600">
              info@hotel
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <SunIcon className="h-10 w-10 text-amber-500" />
            <span className="font-bold text-2xl">Ayodhya</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-600 font-medium"
            >
              ABOUT US
            </Link>
            <Link
              href="/rooms"
              className="text-gray-700 hover:text-amber-600 font-medium"
            >
              ROOMS
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 font-medium"
            >
              CONTACT US
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6">
              BOOK ONLINE
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
