import Link from 'next/link'
import { GithubIcon } from './github-icon'
import { LinkedinIcon } from './linkedin-icon'
import { useTranslation } from '../i18n'
import { BrazilIcon } from './brazil-icon'
import { USAIcon } from './usa-icon'

export async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation(`${lng}`, 'header')

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold text-white">
        v-motta
      </Link>

      <div className="space-x-3">
        <Link href="/projects">{t('projects')}</Link>
        <Link href="/contact">{t('contact')}</Link>
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
        <Link href="/pt">
          <BrazilIcon width={30} height={30} />
        </Link>
        <Link href="/en">
          <USAIcon width={30} height={30} />
        </Link>
      </div>
    </nav>
  )
}
