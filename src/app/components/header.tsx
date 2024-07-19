import Link from 'next/link'
import { WhatsappIcon } from './icons/whatsapp-icon'
import { LinkedinIcon } from './icons/linkedin-icon'
import { GithubIcon } from './icons/github-icon'

export async function Header() {
  return (
    <nav className="sticky top-0 flex flex-col items-center justify-between gap-3 border-b border-zinc-500 bg-zinc-950 bg-opacity-95 pb-3 pt-2 md:h-24 md:flex-row md:border-none md:px-8 md:py-8">
      <Link
        href="/"
        className="text-2xl font-extrabold text-white hover:text-zinc-200"
      >
        v-motta
      </Link>

      <div className="mb-1.5 space-x-3 md:mb-0">
        <Link
          href="/projects"
          className="hover:underline hover:underline-offset-8"
        >
          Projects
        </Link>
        <Link
          href="/certificates"
          className="hover:underline hover:underline-offset-8"
        >
          Certificates
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:underline-offset-8"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/v-motta" className="group">
          <GithubIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-zinc-200" />
        </Link>
        <Link
          href="https://linkedin.com/in/viniciusmottadacosta/"
          className="group"
        >
          <LinkedinIcon className="size-6 fill-zinc-500 transition-colors group-hover:fill-linkedin" />
        </Link>
        <Link href="https://wa.me/5511987977427" className="group">
          <WhatsappIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-whatsapp" />
        </Link>
      </div>
    </nav>
  )
}
