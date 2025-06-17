"use client"

import type React from "react"

import { useAuth } from "@/contexts/AuthContext"
import { AdminProvider } from "@/contexts/AdminContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAdmin, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/")
    }
  }, [isAdmin, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-600"></div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AdminProvider>
  )
}
