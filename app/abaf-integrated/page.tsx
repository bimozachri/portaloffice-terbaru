'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AbafIntegratedPage() {
  // State untuk mengontrol akses dan input form
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Link GAS ABAF
  const urlAbaf: string = "https://script.google.com/macros/s/AKfycbyAweLzcXatL2bCrejCSnkHbAtDPivfc08F5MevkS30sP8t4HYpe04Nx9MtxJd3dQ8X/exec";

  // Fungsi untuk mengecek password saat tombol diklik
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

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

      {/* Page Title */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">ABAF Integrated</h1>
          <p className="text-sm text-muted-foreground">Satu pintu untuk klaim, cash advance, perjalanan dinas, approval, dan payment execution.</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full relative flex flex-col">
        
        {/* Kondisi: Jika BELUM auth, tampilkan form password. Jika SUDAH, tampilkan iframe */}
        {!isAuthenticated ? (
          
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-card border border-border rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">Halaman Terkunci</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Silakan masukkan password untuk mengakses sistem ABAF.
              </p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password..."
                    // Styling input disamakan dengan gaya shadcn/ui
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-2 text-left">Password salah, silakan coba lagi.</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Buka Akses
                </Button>
              </form>
            </div>
          </div>

        ) : (
          
          /* Iframe muncul HANYA jika password benar */
          urlAbaf !== "" ? (
            <iframe
              src={urlAbaf}
              frameBorder="0"
              width="100%"
              height="1000px"
              title="Sistem ABAF Integrated"
              allow="clipboard-write; clipboard-read; autoplay"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg border border-border shadow-sm">
                Link sistem ABAF belum dikonfigurasi.
              </span>
            </div>
          )

        )}
      </div>
    </div>
  );
}