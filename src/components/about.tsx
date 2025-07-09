import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light tracking-wider text-black mb-6">Our Philosophy</h2>
            <p className="text-gray-600 text-lg font-light mb-6 leading-relaxed">
              At XMApparel, we believe that true style comes from simplicity. Our carefully curated collection focuses
              on essential pieces that transcend trends and seasons.
            </p>
            <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
              Each garment is thoughtfully designed with clean lines, premium materials, and impeccable craftsmanship.
              We create clothing that speaks to those who appreciate the beauty of minimalism.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-light text-black mb-2">Quality First</h3>
                <p className="text-gray-600 font-light">Premium materials and ethical manufacturing</p>
              </div>
              <div>
                <h3 className="text-xl font-light text-black mb-2">Timeless Design</h3>
                <p className="text-gray-600 font-light">Pieces that last beyond fleeting trends</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Minimalist fashion design"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
