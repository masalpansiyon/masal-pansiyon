import Link from 'next/link';
import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          
          {/* LOGO VE TELİF */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-amber-500 mb-3 tracking-tight">
              MASAL PANSİYON
            </div>
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">
              © 2026 Tüm Hakları Saklıdır.
            </p>
          </div>

          {/* HIZLI LİNKLER */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-widest">
            <Link href="/#odalar" className="text-slate-400 hover:text-amber-500 transition-colors">
              Odalar
            </Link>
            <Link href="/galeri" className="text-slate-400 hover:text-amber-500 transition-colors">
              Galeri
            </Link>
            <Link href="/iletisim" className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2">
              <MapPin size={14} /> Konum
            </Link>
          </div>

          {/* SOSYAL MEDYA VE TASARIMCI */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-5 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
            <div className="text-slate-500 text-[10px] uppercase tracking-widest">
              Desıgned by <span className="text-slate-300 font-bold italic">TSoft</span>
            </div>
          </div>
        </div>

        {/* ALT ÇİZGİ VE EK LİNKLER */}
        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-center gap-6 text-[10px] text-slate-600 uppercase tracking-widest">
          <a href="#" className="hover:text-slate-400 transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-slate-400 transition-colors">KVKK Aydınlatma Metni</a>
          <a href="/iletisim" className="hover:text-slate-400 transition-colors">İletişim</a>
        </div>
      </div>
    </footer>
  );
}