import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AbafIntegratedPage() {
  const urlAbaf: string = "https://script.google.com/macros/s/AKfycbyAweLzcXatL2bCrejCSnkHbAtDPivfc08F5MevkS30sP8t4HYpe04Nx9MtxJd3dQ8X/exec";

  return (
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
      
      {/* BLOK HEADER & JUDUL (FLEX-NONE) */}
      <div className="flex-none z-50">
        <header className="bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/image.png" alt="CV Angsae Baru Logo" width={40} height={40} className="object-contain" />
              <span className="font-bold text-lg text-foreground hidden sm:block">Angsae Baru Group</span>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Judul Abu-abu */}
        <div className="bg-primary/5 border-b border-border py-3">
          <div className="container mx-auto px-4">
            <h1 className="text-lg md:text-xl font-bold text-foreground">ABAF Integrated</h1>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
              Satu pintu untuk klaim, cash advance, perjalanan dinas, approval, dan payment execution.
            </p>
          </div>
        </div>
      </div>

      {/* BLOK IFRAME (FLEX-1) - Langsung terbuka tanpa password */}
      <main className="flex-1 w-full relative bg-slate-50/50">
        {urlAbaf !== "" ? (
          <div className="absolute inset-0 w-full h-full overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            <iframe
              src={urlAbaf}
              className="w-full h-full border-0 block"
              title="Sistem ABAF Integrated"
              allow="clipboard-write; clipboard-read; autoplay"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg border border-border shadow-sm">
              Link sistem ABAF belum dikonfigurasi.
            </span>
          </div>
        )}
      </main>

    </div>
  );
}