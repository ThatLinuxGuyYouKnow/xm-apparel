import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-light tracking-wider mb-4">Stay Updated</h2>
        <p className="text-gray-300 text-lg font-light mb-8 max-w-2xl mx-auto">
          Be the first to know about new collections, exclusive offers, and minimalist style inspiration
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <Input type="email" placeholder="Enter your email" className="bg-white text-black border-0 flex-1" />
          <Button className="bg-white text-black hover:bg-gray-100 px-8">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
