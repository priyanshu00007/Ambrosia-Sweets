"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ChatbotPopup() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show popup after short delay on load
    const timer = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleStartChat = () => {
    setOpen(false)
    // Redirect to chat app (replace with your chat URL or route)
    router.push("/chat")
  }

  if (!show) return null

  return (
    <>
      {!open && (
        <button
          className="fixed bottom-8 right-8 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 transition-all z-50"
          onClick={() => setOpen(true)}
          aria-label="Open Chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-8 right-8 bg-white rounded-xl shadow-2xl p-6 w-80 z-50 flex flex-col items-center">
          <h3 className="font-bold text-brown mb-2">Hi! Need help?</h3>
          <p className="text-gray-600 mb-4 text-center text-sm">Chat with us for quick support or product queries.</p>
          <button
            className="btn-primary w-full mb-2"
            onClick={handleStartChat}
          >
            Start Chat
          </button>
          <button
            className="text-xs text-gray-400 hover:text-gray-600 mt-1"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  )
}
