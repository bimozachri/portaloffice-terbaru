'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardHrPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Link GAS Dashboard HR
  const urlDashboardHr: string = "https://script.google.com/macros/s/AKfycbxGP_-e8hBHo57nXRsBxrKGCSKD4Qdwv-M0kFTLuHy_hcmTohS5UwXWOcbejXcKEtZI/exec";

  // Fungsi pengecekan password
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "adminhr") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
      
      {/* HEADER & JUDUL (DIBEKUKAN DI ATAS) */}
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

        {/* Judul Halaman */}
        <div className="bg-secondary/5 border-b border-border py-3">
          <div className="container mx-auto px-4">
            <h1 className="text-lg md:text-xl font-bold text-foreground">Dashboard HR</h1>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
              Portal pemantauan dan pengelolaan data sumber daya manusia (HR).
            </p>
          </div>
        </div>
      </div>

      {/* AREA UTAMA (BISA DI-SCROLL) */}
      <main className="flex-1 w-full relative bg-slate-50/50">
        {!isAuthenticated ? (
          
          /* Form Login Dashboard HR */
          <div className="absolute inset-0 overflow-y-auto flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">Akses Terbatas</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Silakan masukkan password untuk mengakses Dashboard HR.
              </p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password..."
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-2 text-left">Password salah, silakan coba lagi.</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Buka Dashboard
                </Button>
              </form>
            </div>
          </div>

        ) : (

          /* Iframe Dashboard HR muncul jika password benar */
          urlDashboardHr !== "" ? (
            <div className="absolute inset-0 w-full h-full overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
              <iframe
                src={urlDashboardHr}
                className="w-full h-full border-0 block"
                title="Dashboard HR"
                allow="clipboard-write; clipboard-read; autoplay"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg border border-border shadow-sm">
                Link sistem Dashboard HR belum dikonfigurasi.
              </span>
            </div>
          )

        )}
      </main>

    </div>
  );
}