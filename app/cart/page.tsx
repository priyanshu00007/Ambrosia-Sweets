"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import LoginModal from "@/components/LoginModal"


  export default function Cart() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart()
  const { user } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  const FREE_DELIVERY_THRESHOLD = 3000;
  const DELIVERY_CHARGE = 300;

  if (!user) {
    return (
      <div className="fade-in py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-brown mb-4">Sign In Required</h1>
          <p className="text-gray-600 mb-8">Please sign in to view your cart and manage your sweets.</p>
          <button className="btn-primary" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
          {showLogin && <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />}
        </div>
      </div>
    )
  }
  if (state.items.length === 0) {
    return (
      <div className="fade-in py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-brown mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any sweets to your cart yet.</p>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>  
    )
  }
  
  return (
    <div className="fade-in py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-brown">Shopping Cart</h1>
          <button onClick={clearCart} className="text-red-600 hover:text-red-800 transition-colors">
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 ">
            <div className="bg-white rounded-lg shadow-lg overflow-y-auto">
              {state.items.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-brown text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.category}</p>
                      <p className="text-brown font-bold text-xl">₹{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-brown rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-yellow-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-yellow-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-brown text-xl">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
  <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
    <h2 className="font-playfair text-2xl font-bold text-brown mb-6">Order Summary</h2>

    {/* Progress Bar for Free Delivery */}
    {state.total < FREE_DELIVERY_THRESHOLD && (
      <div className="mb-6">
        <div className="mb-2 text-sm text-gray-700">
          Spend <span className="font-semibold text-brown">₹{(FREE_DELIVERY_THRESHOLD - state.total).toFixed(0)}</span> more to get <span className="font-semibold text-green-600">Free Delivery!</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{
              width: `${Math.min((state.total / FREE_DELIVERY_THRESHOLD) * 100, 100)}%`
            }}
          />
        </div>
      </div>
    )}

    <div className="space-y-4 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal ({state.itemCount} items)</span>
        <span className="font-medium">₹{state.total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Delivery</span>
        {state.total >= FREE_DELIVERY_THRESHOLD ? (
          <span className="font-medium text-green-600">Free</span>
        ) : (
          <span className="font-medium text-brown">₹{DELIVERY_CHARGE.toFixed(2)}</span>
        )}
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Tax</span>
        <span className="font-medium">₹{(state.total * 0.05).toFixed(2)}</span>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-brown">Total</span>
          <span className="text-lg font-bold text-brown">
            ₹{(
              state.total * 1.05 +
              (state.total >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE)
            ).toFixed(2)}
          </span>
        </div>
      </div>
    </div>

    <Link href="/checkout" className="btn-primary w-full text-center block">
      Proceed to Checkout
    </Link>

    <Link href="/products" className="btn-secondary w-full text-center block mt-4">
      Continue Shopping
    </Link>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}
