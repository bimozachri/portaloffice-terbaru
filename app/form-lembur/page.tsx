import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function FormLemburMenu() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Tambahkan dark:bg-transparent agar efek putih bg-slate-50 hilang saat mode gelap */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/30 dark:bg-transparent">
        <div className="max-w-4xl mx-auto text-center mt-6">
          {/* Ubah text-slate-900 jadi text-foreground */}
          <h1 className="text-2xl font-bold text-foreground mb-2">Pilih Layanan Lembur</h1>
          {/* Ubah text-slate-500 jadi text-muted-foreground */}
          <p className="text-sm text-muted-foreground mb-10">
            Silakan pilih menu untuk pengajuan baru atau melihat riwayat lembur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Card Pengajuan Lembur */}
            {/* Ubah bg-white jadi bg-card, border-slate-200 jadi border-border */}
            <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-foreground mb-2 text-left">Pengajuan Lembur</h2>
              <p className="text-sm text-muted-foreground mb-6 text-left flex-grow">
                Isi formulir untuk mengajukan kerja lembur baru.
              </p>
              <Link 
                href="/form-lembur/pengajuan" 
                className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Buka Form 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card History Lembur */}
            {/* Sama seperti di atas, ubah warna background dan border statis */}
            <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-foreground mb-2 text-left">History Lembur</h2>
              <p className="text-sm text-muted-foreground mb-6 text-left flex-grow">
                Lihat status dan riwayat pengajuan lembur Anda di sini.
              </p>
              <Link 
                href="/form-lembur/history" 
                className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Lihat History 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}