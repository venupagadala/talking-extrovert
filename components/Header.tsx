// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/50">
      <div className="container flex h-14 items-center justify-between mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-bold text-lg text-gray-900 hover:scale-105 transition-transform hover:text-blue-600">
            Talking Introvert
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors font-semibold hover:scale-105">About</a>
          <a href="#features" className="hover:text-blue-600 transition-colors font-semibold hover:scale-105">Features</a>
          <a href="#roadmap" className="hover:text-blue-600 transition-colors font-semibold hover:scale-105">Roadmap</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors font-semibold hover:scale-105">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-semibold">About</a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-semibold">Features</a>
            <a href="#roadmap" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-semibold">Roadmap</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 font-semibold">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
