import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import Features from "@/components/Features"
import GallerySection from "@/components/GallerySection"
import Testimonials from "@/components/Testimonials"
import BookingSection from "@/components/BookingSection"
import Footer from "@/components/Footer"
import Introduction from "@/components/Introduction"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col 3xl:items-center">
      <div className="flex-col flex">
        <HeroBanner />
        <Introduction />
        <Features />
        <GallerySection />
        <Testimonials />
        <BookingSection />
        <Footer />
      </div>
    </div>
  )
}
