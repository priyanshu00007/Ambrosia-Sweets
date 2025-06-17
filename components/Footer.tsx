import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gradient mb-4">Ambrosia</h3>
            <p className="text-cream/80 mb-4">
              Crafting the finest luxury Indian sweets with traditional recipes and premium ingredients.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-cream/80 hover:text-yellow-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-cream/80">Traditional Sweets</span>
              </li>
              <li>
                <span className="text-cream/80">Premium Collection</span>
              </li>
              <li>
                <span className="text-cream/80">Festival Specials</span>
              </li>
              <li>
                <span className="text-cream/80">Gift Boxes</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-cream/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-cream/80">info@ambrosiasweets.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-cream/80">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">© {new Date().getFullYear()} Ambrosia Sweets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
