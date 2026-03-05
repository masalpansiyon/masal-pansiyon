import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#FCFBFA] min-h-screen flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20 flex-grow max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Bize Ulaşın</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mt-4">Konum & İletişim</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* SOL TARAF: İLETİŞİM BİLGİLERİ */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-8 text-slate-800">İletişim Detayları</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Adres</p>
                    <p className="text-slate-600 leading-relaxed">Yıldırım, Başsaran Sk. No:12, 10100 Karesi/Balıkesir</p>
                  </div>
                </div>

                <a href="tel:+905400681010" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-colors">
                    <Phone className="text-amber-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Telefon</p>
                    <p className="text-slate-600 font-medium">+90 540 068 10 10</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Resepsiyon</p>
                    <p className="text-slate-600">7/24 Hizmetinizdeyiz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hızlı Buton */}
            <a 
              href="https://maps.app.goo.gl/LiYLtdWiZM4kGEJY6" 
              target="_blank" 
              className="block w-full text-center bg-slate-900 text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-amber-700 transition-all shadow-xl active:scale-95"
            >
              Google Haritalar'da Aç
            </a>
          </div>

          {/* SAĞ TARAF: HARİTA IFRAME */}
          <div className="h-[500px] lg:h-full min-h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
           
              <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.06725134892!2d27.881456675443406!3d39.64820100205669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b7014ed8d0d469%3A0x3a84665dd34b9d20!2sMASAL%20PANS%C4%B0YON!5e0!3m2!1str!2str!4v1769892949788!5m2!1str!2str"
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={true} // React'ta bu şekilde yazılmalı
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Masal Pansiyon Konumu"
    className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
  ></iframe>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}