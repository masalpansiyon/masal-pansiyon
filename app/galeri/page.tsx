// import { client } from '@/sanity/lib/client';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// async function getGallery() {
//   const query = `*[_type == "gallery"] | order(_createdAt desc) {
//     _id,
//     title,
//     "image": image.asset->url,
//     category
//   }`;
//   return await client.fetch(query);
// }

// export default async function GalleryPage() {
//   const images = await getGallery();

//   return (
//     <div className="bg-[#FCFBFA] min-h-screen">
//       <Navbar />
//       <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Anılar Biriktirin</span>
//           <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mt-4">Masal'dan Kareler</h1>
//           <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
//         </div>

//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {images.map((item: any) => (
//             <div key={item._id} className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500">
//               <img 
//                 src={item.image} 
//                 alt={item.title} 
//                 className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
//                 <p className="text-white font-medium text-lg tracking-wide">{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { client } from '@/sanity/lib/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

async function getGallery() {
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    "image": image.asset->url,
    category
  }`;
  return await client.fetch(query);
}

export default async function GalleryPage() {
  const images = await getGallery();

  return (
    <div className="bg-[#FCFBFA] min-h-screen flex flex-col">
      <Navbar />
      
      {/* pb-40 ekleyerek footer ile arasına ciddi bir nefes alma alanı bıraktık */}
      <main className="pt-32 pb-40 max-w-7xl mx-auto px-6 flex-grow">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Anılar Biriktirin</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mt-4">Masal'dan Kareler</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* mb-6 ekleyerek dikeyde de fotoğrafların arasını açtık */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {images.map((item: any) => (
            <div key={item._id} className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 mb-8 break-inside-avoid">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}