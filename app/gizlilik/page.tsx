import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FCFBFA] min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 pb-40 max-w-4xl mx-auto px-6 w-full flex-grow">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Gizlilik Politikası</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Masal Pansiyon olarak, ziyaretçilerimizin gizliliğine önem veriyoruz. Bu politika, sitemizi kullanırken toplanan verilerin nasıl işlendiğini açıklar.</p>
          
          <h2 className="text-xl font-bold text-slate-800 mt-8">1. Toplanan Bilgiler</h2>
          <p>Sitemiz üzerinden "Hemen Ara" butonuna tıklamanız veya bizimle iletişime geçmeniz durumunda, paylaştığınız telefon numarası ve isim bilgileri sadece size hizmet vermek amacıyla kullanılır.</p>

          <h2 className="text-xl font-bold text-slate-800 mt-8">2. Çerezler (Cookies)</h2>
          <p>Kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla teknik çerezler kullanılabilir. Bu veriler kişisel kimlik tespiti için kullanılmaz.</p>

          <h2 className="text-xl font-bold text-slate-800 mt-8">3. Üçüncü Taraf Bağlantıları</h2>
          <p>Sitemizde yer alan Google Haritalar gibi üçüncü taraf servislerin kendi gizlilik politikaları geçerlidir.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}