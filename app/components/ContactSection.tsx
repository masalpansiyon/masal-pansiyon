export default function ContactSection() {
  const hotelPhone = "+90 540 068 10 10"; 
  const hotelAddress = "Yıldırım, Başsaran Sk. No:12, 10100 Karesi/Balıkesir";

  return (
    <section id="iletisim" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-800">Bize Ulaşın</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Balıkesir'in merkezinde, ulaşımı en kolay noktadayız. Rezervasyon ve detaylı bilgi için 7/24 bizi arayabilirsiniz.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-bold">Adres</h4>
                <p className="text-slate-600">{hotelAddress}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-bold">Telefon</h4>
                <a href={`tel:${hotelPhone}`} className="text-amber-700 text-lg font-semibold">{hotelPhone}</a>
              </div>
            </div>
          </div>
        </div>
        

        <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.06725134892!2d27.881456675443406!3d39.64820100205669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b7014ed8d0d469%3A0x3a84665dd34b9d20!2sMASAL%20PANS%C4%B0YON!5e0!3m2!1str!2str!4v1769892949788!5m2!1str!2str"
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={true} 
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Masal Pansiyon Konumu"
    className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
  ></iframe>
  
  
</div>
      </div>
    </section>
  );
}