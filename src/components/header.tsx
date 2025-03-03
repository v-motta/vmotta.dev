'use client'

import { cn } from '@/lib/utils'
import { Github, Linkedin, Menu, Twitter } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'about_me', href: '/#about_me' },
    { name: 'all_my_projects', href: '/projects' },
    { name: 'all_my_certificates', href: '/certificates' },
    { name: 'contact_me', href: '/#contact_me' },
  ]

  const socialLinks = [
    {
      href: 'https://github.com',
      icon: <GitHubIcon className="h-5 w-5" />,
      name: 'GitHub',
    },
    {
      href: 'https://twitter.com',
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
    },
    {
      href: 'https://linkedin.com',
      icon: <LinkedInIcon className="h-5 w-5" />,
      name: 'LinkedIn',
    },
  ]

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-b-zinc-800 bg-background/95 px-5 shadow-md xl:px-36">
      <div className="flex h-16 items-center justify-between">
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

        <nav className="hidden gap-8 lg:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={cn('font-medium', pathname === href && 'text-primary')}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 lg:flex">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom">
            <SheetTitle />

            <div className="flex h-full flex-col gap-y-4 py-4">
              <nav className="flex flex-col items-center gap-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.name}
                    className="font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-center gap-x-4">
                {socialLinks.map((link) => (
                  <Link key={link.href} href={link.href} aria-label={link.name}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
