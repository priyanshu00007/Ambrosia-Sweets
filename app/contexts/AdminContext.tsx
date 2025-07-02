"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "@/contexts/CartContext"

interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: Array<{
    id: number
    name: string
    quantity: number
    price: number
  }>
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  orderDate: string
  deliveryPartner?: string
}

interface DeliveryPartner {
  id: string
  name: string
  phone: string
  email: string
  status: "active" | "inactive"
}

interface AdminContextType {
  products: Product[]
  orders: Order[]
  deliveryPartners: DeliveryPartner[]
  addProduct: (product: Omit<Product, "id">) => void
  updateProduct: (id: number, product: Partial<Product>) => void
  deleteProduct: (id: number) => void
  updateOrderStatus: (orderId: string, status: Order["status"]) => void
  assignDeliveryPartner: (orderId: string, partnerId: string) => void
  addDeliveryPartner: (partner: Omit<DeliveryPartner, "id">) => void
  updateDeliveryPartner: (id: string, partner: Partial<DeliveryPartner>) => void
  deleteDeliveryPartner: (id: string) => void
}

const AdminContext = createContext<AdminContextType | null>(null)

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [deliveryPartners, setDeliveryPartners] = useState<DeliveryPartner[]>([])

  useEffect(() => {
    // Load initial data
    const savedProducts = localStorage.getItem("admin_products")
    const savedOrders = localStorage.getItem("admin_orders")
    const savedPartners = localStorage.getItem("admin_delivery_partners")

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Load default products from data file
      import("@/data/products").then(({ products: defaultProducts }) => {
        setProducts(defaultProducts)
        localStorage.setItem("admin_products", JSON.stringify(defaultProducts))
      })
    }

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    } else {
      // Generate some demo orders
      const demoOrders: Order[] = [
        {
          id: "ORD-001",
          customerName: "Priya Sharma",
          customerEmail: "priya@example.com",
          customerPhone: "+91-98765-43210",
          items: [
            { id: 1, name: "Kesar Badam Burfi", quantity: 2, price: 450 },
            { id: 4, name: "Saffron Rasmalai", quantity: 1, price: 420 },
          ],
          total: 1320,
          status: "pending",
          orderDate: "2024-01-15T10:30:00Z",
        },
        {
          id: "ORD-002",
          customerName: "Rajesh Kumar",
          customerEmail: "rajesh@example.com",
          customerPhone: "+91-98765-43211",
          items: [{ id: 9, name: "Kaju Katli", quantity: 1, price: 680 }],
          total: 680,
          status: "processing",
          orderDate: "2024-01-14T15:45:00Z",
          deliveryPartner: "partner-1",
        },
      ]
      setOrders(demoOrders)
      localStorage.setItem("admin_orders", JSON.stringify(demoOrders))
    }

    if (savedPartners) {
      setDeliveryPartners(JSON.parse(savedPartners))
    } else {
      const demoPartners: DeliveryPartner[] = [
        {
          id: "partner-1",
          name: "Speedy Delivery",
          phone: "+91-98765-11111",
          email: "speedy@delivery.com",
          status: "active",
        },
        {
          id: "partner-2",
          name: "Quick Express",
          phone: "+91-98765-22222",
          email: "quick@express.com",
          status: "active",
        },
      ]
      setDeliveryPartners(demoPartners)
      localStorage.setItem("admin_delivery_partners", JSON.stringify(demoPartners))
    }
  }, [])

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map((p) => p.id), 0) + 1,
    }
    const updatedProducts = [...products, newProduct]
    setProducts(updatedProducts)
    localStorage.setItem("admin_products", JSON.stringify(updatedProducts))
  }

  const updateProduct = (id: number, productUpdate: Partial<Product>) => {
    const updatedProducts = products.map((p) => (p.id === id ? { ...p, ...productUpdate } : p))
    setProducts(updatedProducts)
    localStorage.setItem("admin_products", JSON.stringify(updatedProducts))
  }

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((p) => p.id !== id)
    setProducts(updatedProducts)
    localStorage.setItem("admin_products", JSON.stringify(updatedProducts))
  }

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    const updatedOrders = orders.map((order) => (order.id === orderId ? { ...order, status } : order))
    setOrders(updatedOrders)
    localStorage.setItem("admin_orders", JSON.stringify(updatedOrders))
  }

  const assignDeliveryPartner = (orderId: string, partnerId: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, deliveryPartner: partnerId } : order,
    )
    setOrders(updatedOrders)
    localStorage.setItem("admin_orders", JSON.stringify(updatedOrders))
  }

  const addDeliveryPartner = (partner: Omit<DeliveryPartner, "id">) => {
    const newPartner = {
      ...partner,
      id: `partner-${Date.now()}`,
    }
    const updatedPartners = [...deliveryPartners, newPartner]
    setDeliveryPartners(updatedPartners)
    localStorage.setItem("admin_delivery_partners", JSON.stringify(updatedPartners))
  }

  const updateDeliveryPartner = (id: string, partnerUpdate: Partial<DeliveryPartner>) => {
    const updatedPartners = deliveryPartners.map((p) => (p.id === id ? { ...p, ...partnerUpdate } : p))
    setDeliveryPartners(updatedPartners)
    localStorage.setItem("admin_delivery_partners", JSON.stringify(updatedPartners))
  }

  const deleteDeliveryPartner = (id: string) => {
    const updatedPartners = deliveryPartners.filter((p) => p.id !== id)
    setDeliveryPartners(updatedPartners)
    localStorage.setItem("admin_delivery_partners", JSON.stringify(updatedPartners))
  }

  return (
    <AdminContext.Provider
      value={{
        products,
        orders,
        deliveryPartners,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        assignDeliveryPartner,
        addDeliveryPartner,
        updateDeliveryPartner,
        deleteDeliveryPartner,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
