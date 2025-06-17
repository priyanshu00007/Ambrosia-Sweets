"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import LoginModal from "./LoginModal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { state } = useCart()
  const { user, logout, isAdmin } = useAuth()

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="font-playfair text-2xl font-bold text-gradient">Ambrosia</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-brown hover:text-yellow-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-brown hover:text-yellow-600 transition-colors">
                About
              </Link>
              <Link href="/products" className="text-brown hover:text-yellow-600 transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-brown hover:text-yellow-600 transition-colors">
                Contact
              </Link>

              {/* Admin Link */}
              {isAdmin && (
                <Link href="/admin" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">
                  Admin Panel
                </Link>
              )}

              <Link href="/cart" className="relative">
                <ShoppingCart
                  className={`w-6 h-6 text-brown hover:text-yellow-600 transition-colors ${state.itemCount > 0 ? "cart-bounce" : ""}`}
                />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-brown hover:text-yellow-600 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden lg:block">{user.name}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        {isAdmin && (
                          <span className="inline-block bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full mt-1">
                            Admin
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          logout()
                          setShowUserMenu(false)
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-brown" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="text-brown hover:text-yellow-600">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
                <Link href="/" className="block px-3 py-2 text-brown hover:text-yellow-600">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-brown hover:text-yellow-600">
                  About
                </Link>
                <Link href="/products" className="block px-3 py-2 text-brown hover:text-yellow-600">
                  Products
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-brown hover:text-yellow-600">
                  Contact
                </Link>
                {isAdmin && (
                  <Link href="/admin" className="block px-3 py-2 text-rose-600 hover:text-rose-800 font-medium">
                    Admin Panel
                  </Link>
                )}
                {user ? (
                  <div className="border-t border-gray-200 pt-2">
                    <div className="px-3 py-2">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-brown hover:text-yellow-600"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true)
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-brown hover:text-yellow-600"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  )
}
