import type { ReactNode } from 'react'
import { Header } from '@/app/components/header'

export default async function PortfolioLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto min-h-screen w-screen">
      <Header />
      <div className="p-8 pt-0">{children}</div>
    </div>
  )
}
