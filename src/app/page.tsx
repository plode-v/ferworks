import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import Features from "@/components/Features"
import GallerySection from "@/components/GallerySection"
import Testimonials from "@/components/Testimonials"
import BookingSection from "@/components/BookingSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen">
      <HeroBanner />
      <Features />
      <GallerySection />
      <Testimonials />
      <BookingSection />
      <Footer />
    </div>
  )
}
