import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function KVKKPage() {
  return (
    <div className="bg-[#FCFBFA] min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 pb-40 max-w-4xl mx-auto px-6 w-full flex-grow">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">KVKK Aydınlatma Metni</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm md:text-base leading-relaxed">
          <p><strong>Masal Pansiyon</strong> (Veri Sorumlusu) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerinizi aşağıda açıklanan çerçevede işlemekteyiz.</p>

          <h2 className="text-xl font-bold text-slate-800 mt-8">Kişisel Verilerin İşlenme Amacı</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Konaklama rezervasyon süreçlerinin yürütülmesi.</li>
            <li>Müşteri taleplerinin karşılanması ve iletişim faaliyetlerinin sürdürülmesi.</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-800 mt-8">Veri Sahibi Olarak Haklarınız</h2>
          <p>Kanun kapsamında; verilerinizin işlenip işlenmediğini öğrenme, yanlış işlenmişse düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz. Başvurularınızı Balıkesir'deki adresimize yazılı olarak iletebilirsiniz.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}