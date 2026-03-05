import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GoogleSchema from './components/GoogleSchema';
import { Phone, CheckCircle2, BedDouble, Wifi, MapPin } from 'lucide-react';
import { client } from '../sanity/lib/client';
import Link from 'next/link';

// Otel Bilgileri (Data klasörünü sildiğimiz için buraya sabitliyoruz)
const HOTEL_PHONE = "+90 540 068 10 10"; 

// Sanity'den odaları çeken fonksiyon
async function getRooms() {
  const query = `*[_type == "room"]{
    _id,
    title,
    price,
    description,
    "image": image.asset->url,
    features,
    slug
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 10 } });
  return data;
}

export default async function Home() {
  const ROOMS = await getRooms();

  return (
    <div className="relative antialiased">
      <GoogleSchema />
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/mesal.avif" 
            alt="Masal Pansiyon Dış Görünüm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-amber-600/30">
            Balıkesir'in En Huzurlu Köşesi
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white mb-8 leading-tight drop-shadow-sm">
            Masal Pansiyon'a <br/> <span className="text-amber-500 italic font-medium text-4xl md:text-7xl">Hoş Geldiniz</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Şehrin merkezinde, ev sıcaklığında bir mola. Modern odalar ve uygun fiyatlarla yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#odalar" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-amber-900/20 active:scale-95">
              Odaları ve Fiyatları Gör
            </a>
            {/* HOTEL_INFO hatasını önlemek için doğrudan değişkeni kullandık */}
            <a href={`tel:${HOTEL_PHONE}`} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
              <Phone size={20} /> Hemen Yerini Ayırt
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- ÖZELLİKLER --- */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <MapPin className="mx-auto text-amber-600 mb-2" />, text: "Merkezi Konum" },
            { icon: <Wifi className="mx-auto text-amber-600 mb-2" />, text: "Ücretsiz Wi-Fi" },
            { icon: <BedDouble className="mx-auto text-amber-600 mb-2" />, text: "Konforlu Yataklar" },
            { icon: <CheckCircle2 className="mx-auto text-amber-600 mb-2" />, text: "7/24 Hizmet" },
          ].map((item, i) => (
            <div key={i} className="group">
              {item.icon}
              <span className="text-sm font-bold text-slate-700 uppercase tracking-tighter">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- ODALAR VE FİYATLAR --- */}
      <section id="odalar" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">Oda Seçeneklerimiz</h2>
          <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg italic">
            "Şeffaf fiyat politikasıyla, tatilinizi sürprizlerle değil, huzurla planlayın."
          </p>
        </div>

        {/* <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROOMS?.map((room: any) => (
            <Link 
              href={`/odalar/${room.slug?.current}`} 
              key={room._id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-widest border border-slate-200">
                  En Popüler
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{room.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed line-clamp-2 italic">{room.description}</p>
                
                <div className="space-y-3 mb-8">
                  {room.features?.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between border-t border-slate-50 pt-6">
                  <div>
                    <span className="text-slate-400 text-sm block mb-1">Gecelik Başlangıç</span>
                    <span className="text-3xl font-black text-amber-700 tracking-tighter">{room.price} ₺</span>
                  </div>
                  <div className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold group-hover:bg-amber-600 transition-colors shadow-lg">
                    Detayları Gör
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {ROOMS?.map((room: any) => (
    <Link 
      href={`/odalar/${room.slug?.current}`} 
      key={room._id} 
      // h-full ekleyerek tüm kartları aynı yüksekliğe zorluyoruz
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Görsel Alanı */}
      <div className="relative h-72 w-full flex-shrink-0">
        <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
      </div>
      
      {/* İçerik Alanı - flex-1 ekleyerek alt kısmı aşağı iteriz */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{room.title}</h3>
        
        {/* Açıklama Alanı - min-h ekleyerek boşlukları eşitliyoruz */}
        <p className="text-slate-500 mb-6 leading-relaxed line-clamp-2 italic min-h-[3rem]">
          {room.description}
        </p>
        
        {/* Özellikler - flex-grow ile bu alanı esnetiyoruz */}
        <div className="space-y-3 mb-8 flex-grow">
          {room.features?.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Fiyat ve Buton - Burası artık her zaman en altta kalacak */}
        <div className="flex items-end justify-between border-t border-slate-50 pt-6 mt-auto">
          <div>
            <span className="text-slate-400 text-sm block mb-1">Gecelik Başlangıç</span>
            <span className="text-3xl font-black text-amber-700 tracking-tighter">{room.price} ₺</span>
          </div>
          <div className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold group-hover:bg-amber-600 transition-colors shadow-lg">
            Detayları Gör
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>
      </section>

      <ContactSection />
      <Footer />

      {/* MOBİL STICKY REZERVASYON BUTONU */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
        <a 
          href={`tel:${HOTEL_PHONE}`} 
          className="bg-green-600 text-white flex items-center justify-center gap-3 py-5 rounded-[2rem] font-black shadow-[0_20px_50px_rgba(22,163,74,0.4)] active:scale-95 transition-all"
        >
          <Phone fill="currentColor" size={20} /> ŞİMDİ ARA REZERVASYON YAP
        </a>
      </div>
    </div>
  );
}
