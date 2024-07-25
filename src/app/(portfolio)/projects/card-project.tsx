import Link from 'next/link'
import { Button } from '../../components/button'
import { GithubIcon } from '../../components/icons/github-icon'
import Image from 'next/image'
import { Globe, SearchX } from 'lucide-react'

export interface CardProjectProps {
  image?: string[]
  title: string
  subtitle: string
  slug: string
  github?: string
  deployUrl?: string
}

export function CardProject(props: CardProjectProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-zinc-200 p-5">
      {props.image ? (
        <Image
          src={props.image[0]}
          alt=""
          width={500}
          height={500}
          quality={50}
          className="aspect-video h-32 rounded-lg object-cover object-center"
        />
      ) : (
        <div className="flex h-32 items-center justify-center gap-3 rounded-lg text-sm font-bold text-zinc-400">
          <SearchX />
          <h1>Project without image</h1>
        </div>
      )}
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
            <Link href={props.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon width={22} height={22} className="fill-zinc-50" />
            </Link>
          </Button>
        )}
        {props.deployUrl && (
          <Button variant="outline" className="px-2" asChild>
            <Link
              href={props.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe width={22} height={22} className="text-zinc-50" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
