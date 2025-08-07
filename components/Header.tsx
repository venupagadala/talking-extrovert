// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/50">
      <div className="container flex h-14 items-center justify-between mx-auto px-6">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-lg text-gray-900">
            TutorAI
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors font-semibold">About</a>
          <a href="#features" className="hover:text-blue-600 transition-colors font-semibold">Features</a>
          <a href="#roadmap" className="hover:text-blue-600 transition-colors font-semibold">Roadmap</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors font-semibold">Contact</a>
        </nav>
      </div>
    </header>
  );
}