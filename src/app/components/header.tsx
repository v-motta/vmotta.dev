import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export async function Header() {
  return (
    <nav className="flex flex-col items-center justify-between border-b border-zinc-500 pb-6 md:flex-row md:border-none md:py-0">
      <Link
        href="/"
        className="text-2xl font-extrabold text-white hover:text-zinc-200"
      >
        v-motta
      </Link>

      <div className="mb-1.5 space-x-3 md:mb-0">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="https://github.com/v-motta">
          <GithubIcon
            width={28}
            height={28}
            className="text-zinc-500 transition-colors hover:text-zinc-200"
          />
        </Link>
        <Link href="https://github.com/v-motta">
          <LinkedinIcon
            width={26}
            height={26}
            className="text-zinc-500 transition-colors hover:text-sky-300"
          />
        </Link>
      </div>
    </nav>
  )
}
