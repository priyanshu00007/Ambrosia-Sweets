"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { type Product, useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import LoginModal from "@/components/LoginModal"

interface ProductCardProps {
  product: Product
}


export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      setShowLogin(true)
      return
    }
    addToCart(product)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-yellow-600 text-white px-2 py-1 rounded-full text-sm font-medium">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-playfair text-xl font-semibold text-brown mb-2 hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl text-brown">₹{product.price}</span>
          <button onClick={handleAddToCart} className="btn-primary flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          {showLogin && (
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
          )}
        </div>
      </div>
    </div>
  )
}
