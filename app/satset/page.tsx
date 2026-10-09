"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  LoaderCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const SATSET_URL =
  "https://script.google.com/macros/s/AKfycbwHaKljf8amWhPvDTfF3xJ_a1n-oa-HmsUrd27Xwzw67LA5nlNKufISRhULBVgqDE_j/exec";

export default function SatsetPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* AREA UTAMA */}
      <main className="relative w-full flex-1 overflow-hidden bg-slate-50/50 dark:bg-transparent">
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
      </main>
    </div>
  );
}