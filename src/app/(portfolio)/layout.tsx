import type { ReactNode } from 'react'
import { Header } from '@/app/components/header'

export default async function PortfolioLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto min-h-screen w-full space-y-5 p-8">
      <Header />
      {children}
    </div>
  )
}
