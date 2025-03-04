'use client'

import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons'
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
      href: 'https://github.com/v-motta',
      icon: <GitHubIcon className="h-5 w-5" />,
      name: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/viniciusmottadacosta/',
      icon: <LinkedInIcon className="h-5 w-5" />,
      name: 'LinkedIn',
    },
    {
      href: 'https://wa.me/5511987977427',
      icon: <WhatsAppIcon className="h-5 w-5" />,
      name: 'WhatsApp',
    },
  ]

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-b-border bg-background/95 px-5 xl:px-36">
      <div className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className={cn(
            'font-extrabold text-2xl hover:underline hover:underline-offset-8',
            pathname === '/' && 'text-primary'
          )}
        >
          {'</vmotta.dev>'}
        </Link>

        <nav className="hidden gap-8 lg:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              aria-label={name}
              className={cn(
                'font-medium hover:underline hover:underline-offset-8',
                pathname === href && 'text-primary'
              )}
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
              className="transition-colors hover:text-primary"
              aria-label={link.name}
              rel="noopener noreferrer"
              target="_blank"
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

              <Separator className="bg-border" />

              <div className="flex items-center justify-center gap-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.name}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
