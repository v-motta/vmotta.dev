'use client'

import { cn } from '@/lib/utils'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const links = [
    { name: 'about_me', href: '/#about_me' },
    { name: 'all_my_projects', href: '/projects' },
    { name: 'all_my_certificates', href: '/certificates' },
    { name: 'contact_me', href: '/#contact_me' },
  ]

  return (
    <header className="flex h-28 items-center justify-between px-10 py-2 2xl:px-36">
      <Link href="/">
        <h1
          className={cn(
            'font-extrabold text-2xl',
            pathname === '/' && 'text-primary'
          )}
        >
          {'</vmotta.dev>'}
        </h1>
      </Link>

      <nav className="flex gap-8">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className={cn('font-medium', pathname === href && 'text-primary')}
          >
            {name}
          </a>
        ))}
      </nav>

      <div>
        <Github />
      </div>
    </header>
  )
}
