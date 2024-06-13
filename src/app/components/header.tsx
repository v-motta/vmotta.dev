import Link from 'next/link'
import { GithubIcon } from './github-icon'
import { LinkedinIcon } from './linkedin-icon'

export function Header() {
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
        <Link href="https://github.com/v-motta" className="group">
          <GithubIcon
            className="fill-zinc-600 group-hover:fill-zinc-400"
            width={28}
            height={28}
          />
        </Link>
        <Link href="https://github.com/v-motta" className="group">
          <LinkedinIcon
            className="fill-zinc-600 group-hover:fill-sky-400/65"
            width={26}
            height={26}
          />
        </Link>
        <Link href="/" locale="pt">
          PT
        </Link>
      </div>
    </nav>
  )
}
