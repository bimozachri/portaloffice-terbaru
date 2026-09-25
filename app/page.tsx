import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"
// 1. Import komponen Announcements yang baru dibuat
import { Announcements } from "@/components/announcements"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Announcements />
      <ServicesGrid />
      <Footer />
    </div>
  );
}