import HeroBanner from "@/components/HeroBanner"
import Features from "@/components/Features"
import GallerySection from "@/components/GallerySection"
import Testimonials from "@/components/Testimonials"
import BookingSection from "@/components/BookingSection"
import Footer from "@/components/Footer"
import Introduction from "@/components/Introduction"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-[97%] h-auto">
        <HeroBanner />
        <Introduction />
        {/* <Features /> */}
        <GallerySection />
        {/* <Testimonials /> */}
        <BookingSection />
      </div>
    </div>
  )
}
