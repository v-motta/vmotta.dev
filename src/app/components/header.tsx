import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export async function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold text-white">
        v-motta
      </Link>

      <div className="space-x-3">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="https://github.com/v-motta">
          <GithubIcon width={28} height={28} />
        </Link>
        <Link href="https://github.com/v-motta">
          <LinkedinIcon width={26} height={26} />
        </Link>
      </div>
    </nav>
  )
}
