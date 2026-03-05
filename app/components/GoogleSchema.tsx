// // components/GoogleSchema.tsx
// //import { HOTEL_INFO } from '../constant/data';
// export default function GoogleSchema() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "Hotel",
//     //"name": HOTEL_INFO.name,
//     "name": "Masal Pansiyon",
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": "Balıkesir",
//       "addressCountry": "TR"
//     },
//     "priceRange": "₺1200 - ₺2500",
//     "telephone": HOTEL_INFO.phone,
//     //"telephone": "05000000000",
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   );
// }

export default function GoogleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Masal Pansiyon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Balıkesir",
      "addressCountry": "TR"
    },
    "priceRange": "₺1200 - ₺2500",
    "telephone": "+905400681010", // Gerçek telefon numarasını buraya yaz
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}