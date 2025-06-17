"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cream via-rose-100 to-yellow-100 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-rose-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gradient mb-2">Ambrosia</h1>
            <p className="text-brown text-lg font-light">Luxury Indian Sweets</p>
          </div>
        </div>

        {/* Animated Sweet Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-4 h-4 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-4 h-4 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          <div className="w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-4 h-4 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "0.8s" }}></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-white/30 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-600 to-rose-400 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-brown/70 mt-2 text-sm">Loading your sweet experience... {Math.round(progress)}%</p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-yellow-400/20 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-20 right-20 w-6 h-6 bg-rose-400/20 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-600/20 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
