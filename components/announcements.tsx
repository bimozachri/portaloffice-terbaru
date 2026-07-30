"use client"

import { Calendar, Bell, Info, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Announcement = {
  id: string
  title: string
  date: string
  type: "info" | "warning" | "urgent" | "event"
  message: string
  active: boolean
}

// DATA PENGUMUMAN UPDATE
const announcementsData: Announcement[] = [
  {
    id: "1",
    title: "PEMBERITAHUAN",
    date: "24 Juli 2026",
    type: "info",
    message: `Jika ada error atau tidak bisa akses, coba hapus cache browser atau gunakan mode incognito. Jika masih tidak bisa, hubungi admin IT.`,
    active: true, 
  },
  {
    id: "2",
    title: "Deadline Laporan Bulanan",
    date: "25 Maret 2024",
    type: "urgent",
    message: "Laporan dikumpulkan maksimal jam 5 sore.",
    active: false, 
  },
  {
    id: "3",
    title: "Update Sistem Absensi",
    date: "20 Maret 2024",
    type: "info",
    message: "Maintenance server jam 12 siang.",
    active: false,
  },
]

export function Announcements() {
  const activeAnnouncements = announcementsData.filter((item) => item.active === true)

  if (activeAnnouncements.length === 0) {
    return null
  }

  // Deteksi apakah ada pengumuman 'urgent' yang aktif
  const hasUrgentAnnouncement = activeAnnouncements.some((item) => item.type === "urgent")

  let gridColsClass = "grid-cols-1"
  if (activeAnnouncements.length === 2) {
    gridColsClass = "grid-cols-1 md:grid-cols-2"
  } else if (activeAnnouncements.length >= 3) {
    gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }

  // Helper Ikon Beranimasi
  const getIcon = (type: string) => {
    switch (type) {
      case "urgent": 
        return (
          <div className="relative mt-0.5 flex h-5 w-5 items-center justify-center shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60"></span>
            <AlertTriangle className="relative h-5 w-5 text-red-600" />
          </div>
        )
      case "warning": return <Bell className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
      case "event": return <Calendar className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
      default: return <Info className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
    }
  }

  // Helper Warna Latar & Border
  const getCardStyle = (type: string) => {
    switch (type) {
      case "urgent": return "bg-red-50/80 border-red-200 border-l-red-500 hover:bg-red-100/80"
      case "warning": return "bg-yellow-50/80 border-yellow-200 border-l-yellow-500 hover:bg-yellow-100/80"
      case "event": return "bg-blue-50/80 border-blue-200 border-l-blue-500 hover:bg-blue-100/80"
      default: return "bg-card border-border border-l-gray-300 hover:bg-accent/50"
    }
  }

  // Helper Warna Teks Judul
  const getTitleStyle = (type: string) => {
    switch (type) {
      case "urgent": return "text-red-800"
      case "warning": return "text-yellow-800"
      case "event": return "text-blue-800"
      default: return "text-foreground"
    }
  }

  // Helper Warna Teks Pesan
  const getMessageStyle = (type: string) => {
    switch (type) {
      case "urgent": return "text-red-700/90 font-medium"
      case "warning": return "text-yellow-700/90"
      case "event": return "text-blue-700/90"
      default: return "text-muted-foreground"
    }
  }

  // Helper Warna Badge Tanggal
  const getDateStyle = (type: string) => {
    switch (type) {
      case "urgent": return "text-red-700 bg-red-100/80 border-red-200"
      case "warning": return "text-yellow-700 bg-yellow-100/80 border-yellow-200"
      case "event": return "text-blue-700 bg-blue-100/80 border-blue-200"
      default: return "text-muted-foreground bg-muted border-transparent"
    }
  }

  return (
    <section className="container mx-auto px-4 py-8 pb-0">
      <Card className="shadow-sm border-border bg-card overflow-hidden relative">
        
        {/* Opsional: Efek cahaya merah tipis di latar jika ada pengumuman urgent */}
        {hasUrgentAnnouncement && (
           <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/5 rounded-full blur-3xl pointer-events-none"></div>
        )}

        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-center gap-2">
            {/* Lonceng utama berkedip merah jika ada peringatan urgent */}
            <Bell className={`h-5 w-5 ${hasUrgentAnnouncement ? 'text-red-500 animate-pulse' : 'text-primary'}`} />
            <CardTitle className="text-xl font-bold">Papan Pengumuman</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className={`grid gap-4 ${gridColsClass} relative z-10`}>
          {activeAnnouncements.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col gap-2 rounded-lg border border-l-4 p-4 sm:p-5 shadow-sm transition-all ${getCardStyle(item.type)}`}
            >
              
              {/* Header Card (Ikon, Judul, Tanggal) */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {getIcon(item.type)}
                  <h3 className={`font-bold text-sm md:text-base leading-tight mt-0.5 ${getTitleStyle(item.type)}`}>
                    {item.title}
                  </h3>
                </div>
                
                <span className={`inline-flex items-center shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${getDateStyle(item.type)}`}>
                  {item.date}
                </span>
              </div>
              
              {/* Isi Pesan */}
              <p className={`text-sm leading-relaxed whitespace-pre-line mt-1 sm:ml-8 ${getMessageStyle(item.type)}`}>
                {item.message}
              </p>
              
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}