import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { WhatsappIcon } from './icons/whatsapp-icon'

export async function Header() {
  return (
    <nav className="sticky top-0 flex flex-col items-center justify-between border-b border-zinc-500 bg-zinc-950 bg-opacity-95 pb-3 pt-2 md:h-24 md:flex-row md:border-none md:px-8 md:py-8">
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

      <div className="flex items-center gap-3">
        <Link href="https://github.com/v-motta" className="group">
          <GithubIcon
            width={28}
            height={28}
            className="text-zinc-500 transition-colors group-hover:text-zinc-200"
          />
        </Link>
        <Link
          href="https://linkedin.com/in/viniciusmottadacosta/"
          className="group"
        >
          <LinkedinIcon
            width={26}
            height={26}
            className="text-zinc-500 transition-colors group-hover:text-sky-300"
          />
        </Link>
        <Link href="https://wa.me/5511987977427" className="group">
          <WhatsappIcon
            width={28}
            height={28}
            className="fill-zinc-500 transition-colors group-hover:fill-whatsapp"
          />
        </Link>
      </div>
    </nav>
  )
}
