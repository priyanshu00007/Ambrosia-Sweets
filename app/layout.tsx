import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/CartContext"
import { AuthProvider } from "@/contexts/AuthContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import ScrollToTop from "@/components/ScrollToTop"
import ScrollRestoration from "@/components/ScrollRestoration"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ambrosia Sweets - Luxury Indian Sweets | Premium Handcrafted Mithai",
  description:
    "Premium handcrafted Indian sweets made with the finest ingredients. Order luxury mithai online with same-day delivery. Traditional recipes, modern presentation.",
  keywords:
    "luxury indian sweets, premium mithai, handcrafted sweets, traditional indian desserts, online sweet shop, luxury confectionery",
  authors: [{ name: "Ambrosia Sweets" }],
  creator: "Ambrosia Sweets",
  publisher: "Ambrosia Sweets",
  robots: "index, follow",
  openGraph: {
    title: "Ambrosia Sweets - Luxury Indian Sweets",
    description: "Premium handcrafted Indian sweets made with the finest ingredients",
    url: "https://ambrosiasweets.com",
    siteName: "Ambrosia Sweets",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambrosia Sweets - Luxury Indian Sweets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambrosia Sweets - Luxury Indian Sweets",
    description: "Premium handcrafted Indian sweets made with the finest ingredients",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.dev',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ambrosiasweets.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ambrosiasweets.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Ambrosia Sweets",
              description: "Premium handcrafted Indian sweets made with the finest ingredients",
              url: "https://ambrosiasweets.com",
              telephone: "+91-98765-43210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Sweet Street, Bandra West",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400050",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 09:00-21:00, Su 10:00-20:00",
              priceRange: "₹₹₹",
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} font-poppins`}>
        <AuthProvider>
          <CartProvider>
            <LoadingScreen />
            <ScrollRestoration />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
