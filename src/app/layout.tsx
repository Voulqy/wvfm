import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

// Use the Inter font with preloaded subsets for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Next.js Production App',
  description: 'A production-ready Next.js application with Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="py-4 px-6 bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto flex justify-between">
            <Link href="/" className="font-bold text-lg">MyApp</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="py-6 px-6 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p>© {new Date().getFullYear()} My Next.js App</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
