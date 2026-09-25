"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  LoaderCircle,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const SATSET_URL =
  "https://script.google.com/macros/s/AKfycbwHaKljf8amWhPvDTfF3xJ_a1n-oa-HmsUrd27Xwzw67LA5nlNKufISRhULBVgqDE_j/exec";

export default function SatsetPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === "satset2026") {
      setIsAuthenticated(true);
      setError(false);
      return;
    }

    setError(true);
  }

  function openSatsetDirectly() {
    window.open(SATSET_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background">
      {/* HEADER */}
      <header className="z-50 flex-none border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/forms/ab-logo.png"
              alt="Angsae Baru Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />

            <span className="hidden text-lg font-bold text-foreground sm:block">
              Angsae Baru Group
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={openSatsetDirectly}
                className="flex items-center gap-2"
                title="Buka langsung jika kamera atau lokasi diblokir"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Buka Langsung</span>
              </Button>
            )}

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

      {/* AREA UTAMA */}
      <main className="relative w-full flex-1 overflow-hidden bg-slate-50/50 dark:bg-transparent">
        {!isAuthenticated ? (
          <div className="absolute inset-0 flex items-center justify-center overflow-y-auto p-4">
            <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>

              <h1 className="mb-2 text-xl font-semibold text-foreground">
                Akses Terbatas
              </h1>

              <p className="mb-6 text-sm text-muted-foreground">
                Aplikasi SATSET sedang dalam tahap pengembangan. Silakan
                masukkan password untuk mengakses pratinjau.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="satset-password" className="sr-only">
                    Password portal
                  </label>

                  <input
                    id="satset-password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);

                      if (error) {
                        setError(false);
                      }
                    }}
                    placeholder="Masukkan password portal..."
                    autoComplete="current-password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />

                  {error && (
                    <p
                      role="alert"
                      className="mt-2 text-left text-sm font-medium text-destructive"
                    >
                      Password salah, silakan coba lagi.
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full text-white">
                  Buka SATSET
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div
            className="absolute inset-0 h-full w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  Memuat SATSET...
                </div>
              </div>
            )}

            <iframe
              src={SATSET_URL}
              title="SATSET Web App"
              className="block h-full w-full border-0"
              // Hapus tanda bintang (*), gunakan format standar berikut untuk kompatibilitas maksimal:
              allow="camera; geolocation; microphone; clipboard-read; clipboard-write; autoplay"
              allowFullScreen
              onLoad={() => setIframeLoaded(true)}
            />

            <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex justify-center px-4 sm:hidden">
              <button
                type="button"
                onClick={openSatsetDirectly}
                className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur"
              >
                <ExternalLink className="h-4 w-4" />
                Lokasi bermasalah? Buka langsung
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}