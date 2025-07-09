import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0">
        <Image
          src="/image.png"
          alt="Minimalist fashion"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider text-black mb-6">Less is More</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Discover our curated collection of minimalist essentials
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Shop Collection
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
