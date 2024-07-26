import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vinicius Motta',
  description:
    'A simple portfolio of Vinicius Motta that contains some of my projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
      <Toaster position="top-right" richColors expand />
    </html>
  )
}
