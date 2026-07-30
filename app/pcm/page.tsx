import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PcmPage() {
  // Link Web App Google Apps Script PCM
  const urlPcm: string = "https://script.google.com/macros/s/AKfycbwatdsoL8xzPWfJttSFNcWrVVuagrRV19g0qhGjCg2JXxmZGAGGyvX2DQUHDSGEk8lXPA/exec";

  return (
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
      
      {/* Header (Dibekukan di atas) */}
      <div className="flex-none z-50">
        <header className="bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/image.png" alt="CV Angsae Baru Logo" width={40} height={40} className="object-contain" />
              <span className="font-bold text-lg text-foreground hidden sm:block">Angsae Baru Group</span>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Kembali ke Portal</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Area Iframe (Memenuhi sisa layar) */}
      <main className="flex-1 w-full relative bg-slate-50/50">
        {urlPcm !== "" ? (
          <div className="absolute inset-0 w-full h-full overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            <iframe
              src={urlPcm}
              className="w-full h-full border-0 block"
              title="Petty Cash Management"
              allow="clipboard-write; clipboard-read; autoplay"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg border border-border shadow-sm">
              Link sistem PCM belum dikonfigurasi.
            </span>
          </div>
        )}
      </main>

    </div>
  );
}