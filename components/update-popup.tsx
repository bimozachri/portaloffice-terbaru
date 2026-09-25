"use client";

import { useState, useEffect } from "react";
import { X, Rocket, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UpdatePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // KUNCI PENTING: Key disamakan antara getItem dan setItem agar pop-up tidak looping
    const hasSeenPopup = localStorage.getItem("update_portal_september_2026");

    if (!hasSeenPopup) {
      // Memberikan jeda 1 detik setelah web dimuat agar transisi lebih natural
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Simpan data ke browser agar pop-up tidak muncul lagi di kunjungan berikutnya
    localStorage.setItem("update_portal_september_2026", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 px-4">
      <div className="bg-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative border border-border">

        {/* Tombol Silang (X) di pojok kanan atas */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-white/80 hover:bg-white/20 hover:text-white rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ilustrasi */}
        <div className="bg-gradient-to-br from-blue-600 to-primary p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
          {/* Efek cahaya di background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>

          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 shadow-inner">
            <Rocket className="w-8 h-8 text-white animate-bounce" />
          </div>
          <h2 className="text-2xl font-bold text-center tracking-tight">New Update!</h2>
        </div>

        {/* Konten Pesan */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BellRing className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Pembaruan Sistem Terbaru</h3>
          </div>

          <div className="text-sm text-muted-foreground mb-6 space-y-3">
            
            {/* Update 1: Satset (New) */}
            <div className="flex items-start gap-3 bg-secondary/20 p-3 rounded-lg border border-border/50">
              <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
              <p className="leading-relaxed">
                <b>Preview Satset:</b> Aplikasi manajemen <i>sales</i> untuk mengelola <i>pipeline</i>, proposal awal, dan aktivitas pelanggan telah hadir. (Akses terbatas menggunakan password).
              </p>
            </div>

          </div>

          <Button onClick={handleClose} variant="outline" className="w-full">
            Tutup Mengerti
          </Button>
        </div>
      </div>
    </div>
  );
}