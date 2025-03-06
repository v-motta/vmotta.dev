import { GitHubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { formatDistance } from 'date-fns'
import { ArrowRight, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CarouselCardButtons } from './carousel-card-buttons'

interface CardProjectProps {
  project: {
    id: string
    title: string
    subtitle: string
    slug: string
    github: string | null
    deployUrl: string | null
    imagesUrl: string[]
    createdAt: Date
  }
}

export function CardProject({ project }: CardProjectProps) {
  const formattedDate = formatDistance(project.createdAt, new Date(), {
    addSuffix: true,
  })

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/75 p-4 md:gap-6 md:p-6">
      {project.imagesUrl.length > 0 ? (
        <Carousel className="flex flex-col gap-y-4">
          <CarouselContent>
            {project.imagesUrl.map((imageUrl, index) => (
              <CarouselItem key={imageUrl}>
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  alt={project.title}
                  width={795}
                  height={447}
                  quality={50}
                  className="aspect-video rounded-lg border border-border"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center">
            <CarouselCardButtons />

            <p className="ml-auto text-muted-foreground">{formattedDate}</p>
          </div>
        </Carousel>
      ) : (
        <div className="flex flex-col gap-y-4">
          <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-secondary">
            <h1>Project without image</h1>
          </div>

          <div className="flex h-9 items-center">
            <p className="ml-auto text-muted-foreground">{formattedDate}</p>
          </div>
        </div>
      )}

      <div className="flex-1 space-y-4">
        <h1 className="font-extrabold text-primary text-xl md:text-2xl">
          {project.title}
        </h1>
        <p>{project.subtitle}</p>
      </div>

      <div className="flex gap-x-4 md:gap-x-6">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={`/projects/${project.slug}`}>
            All project details <ArrowRight />
          </Link>
        </Button>

        {project.github && (
          <Button
            variant="outline"
            size="icon"
            className="hidden xl:flex"
            asChild
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Github repository of ${project.title} link`}
            >
              <GitHubIcon />
            </Link>
          </Button>
        )}

        {project.deployUrl && (
          <Button
            variant="outline"
            size="icon"
            className="hidden xl:flex"
            asChild
          >
            <Link
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo of ${project.title} link`}
            >
              <Globe />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
