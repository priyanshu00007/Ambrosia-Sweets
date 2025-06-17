"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react"
import { type Product, useCart } from "@/contexts/CartContext"
import { notFound } from "next/navigation"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/admin/products/${params.id}`)
        if (!response.ok) {
          notFound()
          return
        }
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
        notFound()
      }
    }

    fetchProduct()
  }, [params.id])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setQuantity(1)
  }

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely delicious! The quality is exceptional and the taste is authentic.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 4,
      comment: "Great product, fresh and well-packaged. Will definitely order again.",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 5,
      comment: "Perfect for gifting! Everyone loved these sweets at our celebration.",
      date: "2024-01-05",
    },
  ]

  return (
    <div className="fade-in py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full font-medium">
              {product.category}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-brown font-medium">{product.rating}</span>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-brown">₹{product.price}</span>
              <span className="text-gray-600 ml-2">per kg</span>
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-brown font-medium mr-4">Quantity:</span>
              <div className="flex items-center border border-brown rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-yellow-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-yellow-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex items-center justify-center space-x-2 flex-1"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-brown mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Made with premium quality ingredients</li>
                <li>• Handcrafted by expert halwais</li>
                <li>• No artificial colors or preservatives</li>
                <li>• Fresh preparation on order</li>
                <li>• Elegant packaging included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-yellow-600 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "ingredients"
                    ? "border-yellow-600 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-yellow-600 text-yellow-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">{product.description}</p>
                <p className="text-gray-600 leading-relaxed">
                  Our {product.name} represents the perfect blend of traditional craftsmanship and premium ingredients.
                  Each piece is carefully handcrafted by our master halwais who have perfected their art over
                  generations. We use only the finest ingredients sourced from trusted suppliers across India to ensure
                  authenticity and quality.
                </p>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div>
                <h3 className="font-semibold text-brown mb-4">Premium Ingredients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  <li>• Pure Ghee (Clarified Butter)</li>
                  <li>• Fresh Milk & Cream</li>
                  <li>• Premium Nuts & Dry Fruits</li>
                  <li>• Organic Jaggery</li>
                  <li>• Aromatic Cardamom</li>
                  <li>• Pure Saffron Strands</li>
                  <li>• Rose Water</li>
                  <li>• Silver Leaf (Varak)</li>
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium text-brown">{review.name}</span>
                        <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
