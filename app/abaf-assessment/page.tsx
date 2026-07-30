import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HistoryClaimPage() {
  // TODO: Masukkan URL Web App Google Apps Script untuk History Claim di sini
  const urlHistoryClaim: string = "https://script.google.com/macros/s/AKfycbzHQzSuSIOsAJIAElVIog-yFFqe27nFDXx19IWbM3lS8BC7rx5x_2ZAdtFZ9iPMlOKSkg/exec"; 

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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

      {/* Embedded Content */}
      <div className="flex-1 w-full relative">
        {urlHistoryClaim !== "" ? (
          <iframe
            src={urlHistoryClaim}
            frameBorder="0"
            width="100%"
            height="1000px"
            title="ABAF Assessment"
            allow="clipboard-write; clipboard-read; autoplay"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg border border-border shadow-sm">
              Link sistem ABAF Assessment belum dikonfigurasi.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}