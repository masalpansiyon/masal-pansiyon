"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Her zaman anasayfaya yönlendirir */}
        <Link 
          href="/" 
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            scrolled ? 'text-amber-800' : 'text-white'// text-amber-800
          }`}
        >
          MASAL PANSİYON
        </Link>

        <div className="hidden md:flex space-x-8 items-center font-medium">
          {/* Odalar Linki: Başına / koyarak anasayfadaki id'ye gider */}
          <Link 
            href="/#odalar" 
            className={`transition-colors duration-300 ${
              scrolled ? 'text-slate-700 hover:text-amber-800' : 'text-white/90 hover:text-white'
            }`}
          >
            Odalar
          </Link>

          {/* Galeri Linki: app/galeri/page.tsx dosyasına gider */}
          <Link 
            href="/galeri" 
            className={`transition-colors duration-300 ${
              scrolled ? 'text-slate-700 hover:text-amber-800' : 'text-white/90 hover:text-white'
            }`}
          >
            Galeri
          </Link>

          {/* İletişim Butonu */}
          <a 
            href="tel:+905400681010" 
            className="bg-amber-600 text-white px-5 py-2 rounded-full hover:bg-amber-700 transition shadow-lg text-sm uppercase font-bold tracking-tighter"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </nav>
  );
}