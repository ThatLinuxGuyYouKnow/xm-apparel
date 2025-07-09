import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-light tracking-wider text-black mb-4">XMApparel</h3>
            <p className="text-gray-600 font-light">Minimalist fashion for the modern individual</p>
          </div>

          <div>
            <h4 className="text-lg font-light text-black mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-black transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/basics" className="text-gray-600 hover:text-black transition-colors">
                  Basics
                </Link>
              </li>
              <li>
                <Link href="/outerwear" className="text-gray-600 hover:text-black transition-colors">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-600 hover:text-black transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-black mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-black mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Pinterest
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-gray-600 font-light">© 2024 XMApparel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
