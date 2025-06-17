import Image from "next/image"
import { Users, Award, Heart, Clock } from "lucide-react"

export default function About() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-brown mb-6">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl text-brown/70 max-w-3xl mx-auto">
              A journey of passion, tradition, and the pursuit of creating the perfect sweet experience
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-6">
                Three Generations of Sweet Excellence
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 1952 by Master Halwai Ramesh Kumar, Ambrosia Sweets began as a small sweet shop in the heart
                of Mumbai. What started as a humble family business has now grown into one of India's most trusted names
                in luxury sweets.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our founder's vision was simple yet profound: to create sweets that not only satisfy the palate but also
                touch the soul. This philosophy has been passed down through three generations, with each adding their
                own touch of innovation while preserving the traditional essence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to honor our heritage by using only the finest ingredients, time-tested recipes, and
                the same love and care that our founder instilled in every sweet he made.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Our Heritage"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              The principles that guide us in creating exceptional sweet experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every ingredient is carefully selected and every sweet is crafted to
                perfection.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-400 to-rose-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Made with Love</h3>
              <p className="text-gray-600">
                Each sweet is handcrafted with love and care, ensuring that every bite brings joy and happiness.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Time-Honored Tradition</h3>
              <p className="text-gray-600">
                We preserve ancient recipes and traditional methods while embracing modern innovations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-400 to-rose-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Customer Delight</h3>
              <p className="text-gray-600">
                Your satisfaction is our success. We strive to exceed expectations with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              From selection of ingredients to the final packaging, every step is executed with precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Ingredient Selection"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Premium Ingredients</h3>
              <p className="text-gray-600">
                We source the finest ingredients from trusted suppliers across India, ensuring authenticity and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Handcrafting Process"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our master halwais bring decades of experience, creating each sweet with traditional techniques and
                modern precision.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Packaging"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-4">Elegant Packaging</h3>
              <p className="text-gray-600">
                Each sweet is carefully packaged in our signature boxes, maintaining freshness and presenting
                beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              The passionate individuals behind every sweet creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Founder"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-2">Rajesh Kumar</h3>
              <p className="text-rose-600 mb-4">Founder & Master Halwai</p>
              <p className="text-gray-600">
                Third-generation sweet maker carrying forward the family legacy with innovation and tradition.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Head Chef"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-2">Priya Sharma</h3>
              <p className="text-rose-600 mb-4">Head of Product Development</p>
              <p className="text-gray-600">
                Culinary expert specializing in fusion sweets and modern interpretations of classic recipes.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Quality Manager"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-semibold text-xl text-brown mb-2">Amit Patel</h3>
              <p className="text-rose-600 mb-4">Quality Assurance Manager</p>
              <p className="text-gray-600">
                Ensures every sweet meets our highest standards of quality, taste, and presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
