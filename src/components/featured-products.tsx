import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Essential White Tee",
    price: "$45",
    image: "/placeholder.svg?height=400&width=300",
    category: "Basics",
  },
  {
    id: 2,
    name: "Minimal Black Hoodie",
    price: "$85",
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Classic Denim",
    price: "$120",
    image: "/placeholder.svg?height=400&width=300",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Structured Blazer",
    price: "$180",
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider text-black mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Carefully selected pieces that embody our philosophy of timeless design and quality craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`}>
                <div className="relative overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-light text-black mb-2">{product.name}</h3>
                  <p className="text-lg text-black">{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
