"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  PlayCircle,
  FileText,
  UserCheck,
  CalendarDays,
  Activity,
  Clock,
  Search,
  Briefcase,
  Receipt,
  Layers,
  Users,
  Wallet,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// DATA LAYANAN LENGKAP DENGAN GRADASI
const services = [
  {
    title: "Absensi Digital",
    description: "Form absensi harian untuk mencatat kehadiran masuk dan pulang kerja karyawan.",
    icon: UserCheck,
    buttonText: "Isi Absen",
    href: "/absensi-digital",
    color: "primary" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  {
    title: "Form Pengajuan No. Surat",
    description: "Ajukan nomor surat untuk kepentingan bisnis dan administrasi resmi perusahaan.",
    icon: FileText,
    buttonText: "Isi Form",
    href: "/form-pengajuan-no-surat",
    color: "secondary" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  // {
  //   title: "Form Klaim Operasional",
  //   description: "Formulir pengajuan penggantian biaya operasional kantor (Reimbursement).",
  //   icon: Receipt,
  //   buttonText: "Isi Form",
  //   href: "/form-klaim-operasional",
  //   color: "accent" as const,
  //   gradient: "bg-gradient-to-br from-amber-50/90 to-orange-50/50 hover:from-amber-100/90 hover:to-orange-100/50 dark:from-amber-950/40 dark:to-orange-950/20 border-amber-100/50",
  // },
  // {
  //   title: "Form Perjalanan Dinas",
  //   description: "Pengajuan surat tugas dan anggaran perjalanan dinas luar kota.",
  //   icon: Briefcase,
  //   buttonText: "Isi Form",
  //   href: "/form-perjalanan-dinas",
  //   color: "primary" as const,
  //   gradient: "bg-gradient-to-br from-cyan-50/90 to-sky-50/50 hover:from-cyan-100/90 hover:to-sky-100/50 dark:from-cyan-950/40 dark:to-sky-950/20 border-cyan-100/50",
  // },
  {
    title: "ABAF Claim Integrated",
    description: "Satu pintu untuk klaim, cash advance, perjalanan dinas, approval, dan payment execution.",
    icon: Layers,
    buttonText: "Buka Sistem",
    href: "/abaf-integrated",
    color: "accent" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  {
    title: "Dashboard HR",
    description: "Portal pemantauan dan pengelolaan data sumber daya manusia (HR).",
    icon: Users,
    buttonText: "Buka Dashboard",
    href: "/dashboard-hr",
    color: "primary" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  {
    title: "ABAF Assessment",
    description: "Sistem penilaian dan evaluasi kinerja karyawan.",
    icon: Layers,
    buttonText: "Isi Form",
    href: "/abaf-assessment",
    color: "secondary" as const,
    gradient: "bg-gradient-to-br from-sky-50/90 to-blue-50/50 hover:from-sky-100/90 hover:to-blue-100/50 dark:from-sky-950/40 dark:to-blue-950/20 border-sky-100/50",
  },
  // {
  //   title: "Form Lembur",
  //   description: "Menu pengajuan lembur baru dan pengecekan riwayat lembur karyawan.",
  //   icon: Clock,
  //   buttonText: "Isi Form",
  //   href: "/form-lembur",
  //   color: "accent" as const,
  //   gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  // },
  // {
  //   title: "Form Pengajuan Cuti",
  //   description: "Formulir untuk mengajukan permohonan cuti tahunan, cuti besar, atau cuti lainnya.",
  //   icon: CalendarDays,
  //   buttonText: "Isi Form",
  //   href: "https://docs.google.com/forms/d/e/1FAIpQLSdeO6fNTDfSp7Gm8v4hTjCsNItfkqL0I18eCkuc8gr2KitR8A/viewform",
  //   color: "primary" as const,
  //   gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  // },
  // {
  //   title: "Form Izin Sakit",
  //   description: "Formulir pemberitahuan ketidakhadiran dikarenakan sakit beserta upload surat dokter.",
  //   icon: Activity,
  //   buttonText: "Isi Form",
  //   href: "https://docs.google.com/forms/d/e/1FAIpQLSdf5xaPhmA-UP1QQ-jFTZhGqc_KHh644utBIkzQwumWiLoIEQ/viewform",
  //   color: "secondary" as const,
  //   gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",  
  // },
  {
    title: "ABOS - Operational Web App",
    description: "Aplikasi operasional untuk mengelola Sales Order, Fulfillment, Surat Jalan, dan Memo Penarikan.",
    icon: Briefcase,
    buttonText: "Buka ABOS",
    href: "/abos", 
    color: "accent" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  {
    title: "Petty Cash Management",
    description: "Sistem pengelolaan kas kecil (Petty Cash) untuk kebutuhan operasional harian.",
    icon: Wallet,
    buttonText: "Buka PCM",
    href: "/pcm", // Mengarah ke folder yang baru kita buat
    color: "primary" as const,
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200/80 dark:from-slate-900 dark:to-blue-900/50 border-blue-200/50",
  },
  {
    title: "Video Sosialisasi",
    description: "Akses video tutorial dan panduan lengkap cara menggunakan portal dan layanan digital perusahaan.",
    icon: PlayCircle,
    buttonText: "Lihat Video",
    href: "/video-sosialisasi",
    color: "secondary" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
  {
    title: "Dezavasi's Sales Form App",
    description: "Form untuk menambah data customer baru dan mengelola informasi penjualan perusahaan.",
    icon: ShoppingCart,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSewbtzCYbBgxQfgmeRme2QKK4e42m9ePhpEf25Q6MlHBB85JQ/viewform",
    color: "accent" as const,
    gradient: "bg-gradient-to-br from-white to-blue-50/80 hover:from-blue-50/80 hover:to-blue-100/60 dark:from-slate-900 dark:to-blue-950/30 border-blue-100/50",
  },
];

// 1. KITA BUAT KOMPONEN KARTU KHUSUS DI SINI AGAR TIDAK MENGGANGGU FILE LAIN
interface CustomGradientCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  href: string;
  color: "primary" | "secondary" | "accent";
  gradient: string;
}

function CustomGradientCard({ title, description, icon: Icon, buttonText, href, color, gradient }: CustomGradientCardProps) {
  const colorClasses = {
    primary: {
      text: "text-primary dark:text-blue-400",
      button: "bg-primary hover:bg-primary/90",
    },
    secondary: {
      text: "text-secondary dark:text-blue-300",
      button: "bg-secondary hover:bg-secondary/90",
    },
    accent: {
      text: "text-accent dark:text-teal-300",
      button: "bg-accent hover:bg-accent/90",
    },
  };

  const colors = colorClasses[color];
  const isExternal = href.startsWith("http");

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${gradient} border h-full flex flex-col`}>
      {/* Pantulan Cahaya Latar */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 dark:bg-white/5 rounded-full blur-2xl pointer-events-none z-0"></div>
      
      <CardHeader className="pb-4 relative z-10">
        
        {/* WADAH IKON DENGAN ANIMASI LASER */}
        <div className="relative inline-flex h-14 w-14 mb-4 transition-transform duration-300 group-hover:scale-110 rounded-xl overflow-hidden p-[1.5px] shadow-sm">
          
          {/* Efek Laser Berputar (Conic Gradient) */}
          <div className="absolute inset-[-150%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#2563eb_100%)]"></div>
          
          {/* Kotak Putih Penutup Tengah (Hanya menyisakan garis tepi laser) */}
          <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-white/95 dark:bg-slate-900 backdrop-blur-md z-10">
            <Icon className={`h-7 w-7 ${colors.text}`} />
          </div>
          
        </div>

        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col relative z-10">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{description}</p>
        <Button asChild className={`w-full ${colors.button} text-white font-medium transition-all duration-300 group-hover:gap-3 mt-auto`}>
          <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

// 2. ANIMASI KARTU
function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// 3. KOMPONEN GRID UTAMA
export function ServicesGrid() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => service.title.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Akses Semua Layanan Digital</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">Pilih layanan yang Anda butuhkan untuk mengelola administrasi dan aktivitas kerja harian.</p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Cari layanan (cth: cuti, lembur, surat)..." className="pl-10 bg-background shadow-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 50}>
                {/* 4. GUNAKAN CUSTOM CARD YANG BARU KITA BUAT */}
                <CustomGradientCard {...service} />
              </AnimatedCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Layanan tidak ditemukan.</p>
          </div>
        )}
      </div>
    </section>
  );
}