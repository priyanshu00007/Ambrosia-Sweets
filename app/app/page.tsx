import Link from "next/link"
import { Star, Award, Truck, Shield } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-rose-100 to-yellow-100"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-brown mb-6">
            Taste the <span className="text-gradient">Luxury</span>
          </h1>
          <p className="text-xl md:text-2xl text-brown/80 mb-8 font-light">
            Handcrafted Indian sweets made with the finest ingredients and traditional recipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              Explore Collection
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Our Story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brown rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brown rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brown mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with finest ingredients and traditional recipes</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-400 to-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brown mb-2">Handcrafted</h3>
              <p className="text-gray-600">Each sweet is carefully handmade by expert artisans</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brown mb-2">Fresh Delivery</h3>
              <p className="text-gray-600">Same day delivery to ensure maximum freshness</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-400 to-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brown mb-2">Pure & Safe</h3>
              <p className="text-gray-600">No artificial colors or preservatives used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-cream to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown mb-4">
              Featured <span className="text-gradient">Delicacies</span>
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              Discover our most loved sweets, crafted with passion and served with pride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brown to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Experience the Royal Taste</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us for their sweet celebrations
          </p>
          <Link
            href="/products"
            className="bg-white text-brown px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  )
}
