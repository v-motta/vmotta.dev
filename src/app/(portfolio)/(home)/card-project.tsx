import Link from 'next/link'
import { Button } from '../../components/button'
import { GithubIcon } from '../../components/icons/github-icon'

export interface CardProjectProps {
  title: string
  subtitle: string
  slug: string
  github?: string
}

export function CardProject(props: CardProjectProps) {
  return (
    <div className="flex h-56 flex-col rounded-2xl border border-zinc-200 px-5 py-4 pb-5">
      <div className="flex flex-1 flex-col gap-3 text-center lg:text-start">
        <h1 className="font-mono text-xl font-bold">{props.title}</h1>
        <p className="line-clamp-2 text-zinc-300">{props.subtitle}</p>
      </div>
      <div className="flex gap-5">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={`projects/${props.slug}`}>Show more</Link>
        </Button>
        {props.github && (
          <Button variant="outline" className="px-2" asChild>
            <Link
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get to know the code of this project"
            >
              <GithubIcon width={22} height={22} className="fill-zinc-50" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
