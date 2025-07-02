import type { ReactNode } from "react"

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-rose-50">
      <header className="bg-yellow-600 text-white py-4 px-8 shadow-lg flex items-center justify-between">
        <h1 className="font-playfair text-2xl font-bold">Ambrosia Chat</h1>
        <span className="text-sm opacity-80">Support &amp; Product Help</span>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {children}
      </main>
      <footer className="bg-yellow-600 text-white text-center py-2 text-xs opacity-80">
        &copy; {new Date().getFullYear()} Ambrosia Sweets
      </footer>
    </div>
  )
}
