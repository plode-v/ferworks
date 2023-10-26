import Navbar from "@/components/Navbar"
import HeroBanner from "@/components/HeroBanner"
import Features from "@/components/Features"

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen">
      <Navbar />
      <HeroBanner />
      <Features />
    </div>
  )
}
