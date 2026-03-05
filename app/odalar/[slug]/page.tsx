// // import { client } from '@/sanity/lib/client';
// // import Navbar from '@/app/components/Navbar';
// // import Footer from '@/app/components/Footer';
// // import { Phone, CheckCircle } from 'lucide-react';

// // export default async function RoomPage(props: { params: Promise<{ slug: string }> }) {
// //   // 1. Params'ı güvenli bir şekilde çözüyoruz
// //   const params = await props.params;
// //   const slug = params.slug;

// //   // 2. Sorguyu doğrudan slug değeriyle yapıyoruz (Parametre hatasını bypass etmek için)
// //   const query = `*[_type == "room" && slug.current == "${slug}"][0]{
// //     title,
// //     price,
// //     description,
// //     "mainImage": image.asset->url,
// //     "gallery": gallery[].asset->url,
// //     features
// //   }`;

// //   const room = await client.fetch(query);

// //   if (!room) {
// //     return (
// //       <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
// //         <h1 className="text-2xl font-serif text-slate-800 mb-4">Masal Pansiyon - Oda Bulunamadı</h1>
// //         <a href="/" className="text-amber-700 underline font-bold">Ana Sayfaya Dön</a>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-white min-h-screen selection:bg-amber-100">
// //       <Navbar />
      
// //       <main className="max-w-7xl mx-auto px-6 py-32">
// //         {/* Üst Bilgi Bölümü */}
// //         <div className="mb-12 border-b border-slate-100 pb-10">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
// //             <div>
// //               <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Oda Detayları</span>
// //               <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">{room.title}</h1>
// //             </div>
// //             <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl min-w-[200px] text-center">
// //               <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Gecelik Fiyat</p>
// //               <p className="text-3xl font-black text-amber-500 tracking-tighter">{room.price} ₺</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Görsel Galerisi */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 h-auto md:h-[600px]">
// //           <div className="md:col-span-2 h-full">
// //             <img src={room.mainImage} className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl" alt={room.title} />
// //           </div>
// //           <div className="grid grid-rows-2 gap-6 h-full">
// //              {room.gallery?.slice(0, 2).map((img: string, i: number) => (
// //                <img key={i} src={img} className="w-full h-full object-cover rounded-[2.5rem] shadow-lg hover:brightness-90 transition duration-300" alt={`${room.title} ${i}`} />
// //              ))}
// //              {!room.gallery && <div className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 font-serif italic text-sm p-10 text-center">Diğer fotoğraflar hazırlanıyor...</div>}
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-20">
// //           {/* Sol: Açıklama ve Özellikler */}
// //           <div className="md:col-span-2">
// //             <h2 className="text-3xl font-serif font-bold mb-8 text-slate-800">Konaklama Deneyimi</h2>
// //             <p className="text-slate-600 leading-relaxed text-xl mb-12 font-light whitespace-pre-line">
// //               {room.description}
// //             </p>
            
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                {room.features?.map((f: string, idx: number) => (
// //                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-amber-200 transition">
// //                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition">
// //                        <CheckCircle size={20} />
// //                     </div>
// //                     <span className="font-bold text-slate-700">{f}</span>
// //                  </div>
// //                ))}
// //             </div>
// //           </div>

// //           {/* Sağ: İletişim Kartı */}
// //           <div className="h-fit sticky top-32">
// //             <div className="bg-amber-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-amber-900/20">
// //               <h3 className="text-2xl font-serif mb-4 font-bold italic">Bize Ulaşın</h3>
// //               <p className="text-amber-100 mb-8 leading-relaxed font-light">
// //                 Masal Pansiyon'da size özel bir yer ayırmak için hemen telefonla iletişime geçin.
// //               </p>
// //               <a href="tel:+905XXXXXXXXX" className="flex items-center justify-center gap-4 bg-white text-slate-900 py-6 rounded-2xl font-black text-xl hover:scale-105 transition shadow-lg">
// //                 <Phone size={24} fill="currentColor" /> ŞİMDİ ARA
// //               </a>
// //               <p className="text-[10px] text-center mt-6 text-amber-200 font-bold uppercase tracking-widest">
// //                 7/24 Kesintisiz Hizmet
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }

// import { client } from '@/sanity/lib/client';
// import Navbar from '@/app/components/Navbar';
// import Footer from '@/app/components/Footer';
// import { Phone, CheckCircle, Coffee, Wind, Tv, ShieldCheck } from 'lucide-react';

// export default async function RoomPage(props: { params: Promise<{ slug: string }> }) {
//   const params = await props.params;
//   const slug = params.slug;

//   const query = `*[_type == "room" && slug.current == "${slug}"][0]{
//     title,
//     price,
//     description,
//     "mainImage": image.asset->url,
//     "gallery": gallery[].asset->url,
//     features
//   }`;

//   const room = await client.fetch(query);

//   if (!room) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-slate-50 font-serif">
//         <h1 className="text-3xl text-slate-800 mb-6">Oda Bulunamadı</h1>
//         <a href="/" className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all shadow-lg">Ana Sayfaya Dön</a>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FCFBFA] min-h-screen selection:bg-amber-200">
//       <Navbar />
      
//       {/* --- HERO SECTION (Görsel Odaklı Giriş) --- */}
//       <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
//         <img 
//           src={room.mainImage} 
//           className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]" 
//           alt={room.title} 
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBFA] via-transparent to-black/20" />
//         <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
//           <div className="max-w-7xl mx-auto">
//             <span className="inline-block px-4 py-1.5 bg-amber-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-4 shadow-xl">
//               Özel Konaklama
//             </span>
//             <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 drop-shadow-sm leading-[1.1]">
//               {room.title}
//             </h1>
//           </div>
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-12 gap-16">
          
//           {/* SOL TARAF: DETAYLAR */}
//           <div className="lg:col-span-8">
            
//             {/* Hızlı Bilgi Barı */}
//             <div className="flex flex-wrap gap-8 mb-16 pb-8 border-b border-slate-200">
//               <div className="flex items-center gap-3 text-slate-500">
//                 <Coffee size={20} className="text-amber-600" />
//                 <span className="text-sm font-medium">Kahvaltı Dahil</span>
//               </div>
//               <div className="flex items-center gap-3 text-slate-500">
//                 <Wind size={20} className="text-amber-600" />
//                 <span className="text-sm font-medium">Klima</span>
//               </div>
//               <div className="flex items-center gap-3 text-slate-500">
//                 <Tv size={20} className="text-amber-600" />
//                 <span className="text-sm font-medium">Smart TV</span>
//               </div>
//               <div className="flex items-center gap-3 text-slate-500">
//                 <ShieldCheck size={20} className="text-amber-600" />
//                 <span className="text-sm font-medium">Güvenli Konaklama</span>
//               </div>
//             </div>

//             <h2 className="text-3xl font-serif font-bold mb-8 text-slate-800 tracking-tight">Oda Hikayesi</h2>
//             <p className="text-slate-600 leading-relaxed text-xl mb-16 font-light italic first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-amber-700">
//               {room.description}
//             </p>

//             {/* Galeri Grid - Modern Masonry Style */}
//             <div className="grid grid-cols-2 gap-4 mb-20">
//               {room.gallery?.map((img: string, i: number) => (
//                 <div key={i} className={`overflow-hidden rounded-3xl shadow-2xl ${i === 0 ? 'col-span-2 h-[400px]' : 'h-[250px]'}`}>
//                   <img 
//                     src={img} 
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-zoom-in" 
//                     alt={`${room.title} Detay ${i}`} 
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Özellikler - Minimalist Kartlar */}
//             <h3 className="text-2xl font-serif font-bold mb-8 text-slate-800">Oda Ayrıcalıkları</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {room.features?.map((f: string, idx: number) => (
//                 <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
//                   <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
//                     <CheckCircle size={22} />
//                   </div>
//                   <span className="font-bold text-slate-700 tracking-tight uppercase text-xs">{f}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SAĞ TARAF: REZERVASYON KARTI (Sticky) */}
//           <div className="lg:col-span-4">
//             <div className="sticky top-32">
//               <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.05)] relative overflow-hidden">
//                 {/* Dekoratif Arka Plan */}
//                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl" />
                
//                 <div className="mb-10 text-center">
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Konaklama Bedeli</span>
//                   <div className="flex items-center justify-center gap-2">
//                     <span className="text-5xl font-serif font-bold text-slate-900">{room.price}</span>
//                     <span className="text-xl text-amber-600 font-bold">₺</span>
//                   </div>
//                   <span className="text-xs text-slate-400 italic mt-1 block">gecelik, kişi başı başlangıç</span>
//                 </div>

//                 <div className="space-y-4">
//                   <a href="tel:+905XXXXXXXXX" className="flex items-center justify-center gap-4 bg-slate-900 text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-amber-700 transition-all shadow-xl active:scale-95">
//                     <Phone size={20} /> Hemen Rezervasyon
//                   </a>
//                   <p className="text-[10px] text-center text-slate-400 font-medium px-4">
//                     Giriş: 14:00 • Çıkış: 11:00 <br/>
//                     Rezervasyon için bizi dilediğiniz zaman arayabilirsiniz.
//                   </p>
//                 </div>

//                 <div className="mt-10 pt-8 border-t border-slate-100">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                       📍
//                     </div>
//                     <div>
//                       <p className="text-xs font-bold text-slate-900">Merkezi Konum</p>
//                       <p className="text-[10px] text-slate-500">Balıkesir, Karesi Bölgesi</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { client } from '@/sanity/lib/client';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Phone, CheckCircle, Coffee, Wind, Tv, ShieldCheck } from 'lucide-react';

export default async function RoomPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  const query = `*[_type == "room" && slug.current == "${slug}"][0]{
    title,
    price,
    description,
    "mainImage": image.asset->url,
    "gallery": gallery[].asset->url,
    features
  }`;

  const room = await client.fetch(query);

  // Eğer oda bulunamazsa bu ekran gelir
  if (!room) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-50 font-serif">
        <h1 className="text-3xl text-slate-800 mb-6">Oda Bulunamadı</h1>
        <p className="mb-8 text-slate-500 text-center px-6">Aradığınız oda mevcut değil veya henüz yayınlanmamış olabilir.</p>
        <a href="/" className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all shadow-lg">Ana Sayfaya Dön</a>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFBFA] min-h-screen selection:bg-amber-200">
      <Navbar />
      
      {/* Navbar yüksekliği kadar boşluk bırakıyoruz */}
      <div className="pt-20 md:pt-28"> 
        
        {/* --- HERO SECTION --- */}
        <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <img 
            src={room.mainImage} 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]" 
            alt={room.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBFA] via-transparent to-black/30" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-amber-600 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-4 shadow-xl">
                Özel Konaklama
              </span>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 drop-shadow-sm leading-[1.1]">
                {room.title}
              </h1>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* SOL TARAF: DETAYLAR */}
            <div className="lg:col-span-8">
              
              {/* Hızlı Bilgi Barı */}
              <div className="flex flex-wrap gap-4 md:gap-8 mb-12 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-3 text-slate-500">
                  <Coffee size={20} className="text-amber-600" />
                  <span className="text-sm font-medium">Kahvaltı Dahil</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Wind size={20} className="text-amber-600" />
                  <span className="text-sm font-medium">Klima</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Tv size={20} className="text-amber-600" />
                  <span className="text-sm font-medium">Smart TV</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <ShieldCheck size={20} className="text-amber-600" />
                  <span className="text-sm font-medium">Güvenli Konaklama</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-slate-800 tracking-tight text-center md:text-left">Oda Hikayesi</h2>
              <p className="text-slate-600 leading-relaxed text-lg md:text-xl mb-12 font-light italic first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-amber-700">
                {room.description}
              </p>

              {/* Galeri Grid */}
              <div className="grid grid-cols-2 gap-4 mb-16">
                {room.gallery?.map((img: string, i: number) => (
                  <div key={i} className={`overflow-hidden rounded-2xl md:rounded-3xl shadow-lg ${i === 0 ? 'col-span-2 h-[300px] md:h-[400px]' : 'h-[180px] md:h-[250px]'}`}>
                    <img 
                      src={img} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                      alt={`${room.title} Detay ${i}`} 
                    />
                  </div>
                ))}
              </div>

              {/* Özellikler */}
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-slate-800">Oda Ayrıcalıkları</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features?.map((f: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <span className="font-bold text-slate-700 tracking-tight uppercase text-[10px] md:text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SAĞ TARAF: REZERVASYON KARTI */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl" />
                  
                  <div className="mb-8 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Konaklama Bedeli</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{room.price}</span>
                      <span className="text-xl text-amber-600 font-bold font-sans tracking-tighter">₺</span>
                    </div>
                    <span className="text-[10px] text-slate-400 italic mt-1 block">gecelik, kişi başı başlangıç</span>
                  </div>

                  <div className="space-y-4">
                    <a href="tel:+905XXXXXXXXX" className="flex items-center justify-center gap-4 bg-slate-900 text-white py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-bold text-base md:text-lg hover:bg-amber-700 transition-all shadow-lg active:scale-95">
                      <Phone size={20} /> Hemen Rezervasyon
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 font-sans uppercase tracking-tighter">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">📍</div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-900">Merkezi Konum</p>
                        <p className="text-[10px] text-slate-500">Balıkesir, Karesi Bölgesi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}