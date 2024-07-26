import type { ReactNode } from 'react'
import { Header } from '@/components/header'

export default async function PortfolioLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto min-h-screen w-screen">
      <Header />
      <div className="p-8 py-0">{children}</div>
    </div>
  )
}
