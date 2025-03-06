import { CarouselCardButtons } from '@/app/(home)/(sections)/(top-projects)/carousel-card-buttons'
import { GitHubIcon } from '@/components/icons'
import { iconsNode } from '@/components/icons/icon-node'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getCleanText } from '@/lib/clean-text'
import { prisma } from '@/lib/prisma-client'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import { LinkButton } from './link-button'

async function getProjectDetails(slug: string) {
  return await prisma.project.findUnique({
    where: { slug },
    select: {
      title: true,
      subtitle: true,
      description: true,
      deployUrl: true,
      github: true,
      imagesUrl: true,
      technologies: { select: { name: true } },
    },
  })
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const projectDetails = await getProjectDetails(slug)

  if (!projectDetails)
    return {
      title: 'Project not found',
      description: `Project with slug ${slug} does not appear to exist 😢`,
    }

  return {
    title: `${projectDetails.title} Project`,
    description: projectDetails.description,
  }
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: { slug: true },
  })

  return projects.map(({ slug }) => ({ slug }))
}

export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const projectDetails = await getProjectDetails(slug)

  if (!projectDetails) {
    return (
      <div className="min-h-[calc(100vh-4rem-4rem)] content-center">
        <h1 className="text-center text-2xl">
          Project with slug <span className="font-bold">{slug}</span> does not
          appear to exist 😢
        </h1>
      </div>
    )
  }

  const simplifiedProjectDetails = {
    ...projectDetails,
    technologies: projectDetails.technologies.map((tech) =>
      getCleanText(tech.name)
    ),
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem-4rem)] flex-col gap-6 px-5 py-10 md:px-24 2xl:px-36 2xl:py-20">
      <h1 className="font-bold text-2xl text-primary">
        {projectDetails.title}
      </h1>

      {simplifiedProjectDetails.imagesUrl.length > 0 && (
        <Carousel className="flex flex-col gap-y-4">
          <CarouselContent>
            {simplifiedProjectDetails.imagesUrl.map((imageUrl) => (
              <CarouselItem
                key={imageUrl}
                className="md:basis-1/2 2xl:basis-1/3"
              >
                <Image
                  src={imageUrl}
                  alt=""
                  width={795}
                  height={447}
                  quality={50}
                  className="rounded-lg border border-border"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="not-md:hidden" />
          <CarouselNext className="not-md:hidden" />

          <div className="md:hidden">
            <CarouselCardButtons />
          </div>
        </Carousel>
      )}

      <div className="grid grid-cols-1 gap-5 md:gap-10 xl:grid-cols-2 2xl:grid-cols-[1.7fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-xl">{projectDetails.subtitle}</h2>
          <p className="text-muted-foreground">{projectDetails.description}</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
            {(projectDetails.deployUrl || projectDetails.github) && (
              <span className="not-md:hidden">You can check out</span>
            )}{' '}
            {projectDetails.deployUrl && (
              <div className="flex flex-nowrap items-end">
                <span className="not-md:hidden">the project on</span>
                <LinkButton
                  url={projectDetails.deployUrl}
                  IconComponent={Globe}
                />
                {projectDetails.github && (
                  <span className="not-md:hidden">and</span>
                )}
              </div>
            )}{' '}
            {projectDetails.github && (
              <div className="flex flex-nowrap items-end">
                <span className="not-md:hidden">the code on</span>
                <LinkButton
                  url={projectDetails.github}
                  IconComponent={GitHubIcon}
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p>All technologies used to develop this project:</p>
            <div className="flex flex-wrap gap-4">
              {simplifiedProjectDetails.technologies.map((tech) => {
                const Icon = iconsNode[tech]

                return <Icon key={tech} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
