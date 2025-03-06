import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Providers } from './providers'

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
})

export function generateMetadata(): Metadata {
  return {
    title: { template: '%s | vmotta.dev', default: 'vmotta.dev' },
    description:
      'Portfolio of Vinicius Motta, a Full-Stack Developer from Brazil. Here you can find information about me, my projects, certificates and my skills.',
    metadataBase: new URL('https://vmotta.dev'),
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
