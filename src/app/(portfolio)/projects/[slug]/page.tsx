import data from '@/app/data.json'
import { GithubIcon } from '@/components/icons'
import { iconsNode } from '@/components/icons/icon-node'
import { Title } from '@/components/title'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectBySlugProps {
  params: {
    slug: string
  }
}

export default function ProjectBySlugPage({ params }: ProjectBySlugProps) {
  const project = data.projects.find((project) => project.slug === params.slug)

  if (!project) {
    return (
      <div className="mt-10 text-center text-3xl font-bold lg:min-h-[calc(100vh-6rem-6rem)]">
        Project not found
      </div>
    )
  }

  return (
    <div className="py-8 lg:min-h-[calc(100vh-6rem-6rem)]">
      <div className="grid grid-cols-2 gap-5 md:px-16 lg:px-0 xl:px-16 2xl:px-36">
        {project.pathImages && (
          <>
            <Image
              className="h-full w-full object-cover"
              src={project.pathImages[0]}
              width={800}
              height={600}
              quality={100}
              alt=""
            />
            <div className="grid grid-cols-2 gap-5 lg:grid-rows-2">
              {project.pathImages.slice(1).map((image, index) => (
                <Image
                  key={index}
                  className="h-full w-full object-cover"
                  src={image}
                  width={400}
                  height={300}
                  quality={100}
                  alt=""
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="grid gap-5 py-8 md:px-16 lg:grid-cols-2 lg:px-0 xl:px-16 2xl:px-36">
        <div>
          <Title title={project.title} className="text-lg lg:text-start" />
          <p className="text-center text-zinc-500 lg:text-start">
            {project.subtitle}
          </p>
          <p className="mt-3 text-center lg:text-start">
            {project.description}
          </p>
        </div>
        <div className="grid grid-cols-7 gap-5 lg:grid-cols-8 lg:gap-8 2xl:gap-16">
          <div className="col-span-5">
            <Title
              title="Technologies used"
              className="mb-5 text-lg lg:text-start"
            />
            <div className="grid grid-cols-4 gap-y-5 *:mx-auto *:size-10 *:fill-zinc-100 md:grid-cols-7 lg:gap-x-8 *:lg:size-full">
              {project.technologies.map((tech) => (
                <div key={tech} className="*:size-full">
                  {iconsNode[tech]}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 lg:col-span-3">
            <Title title="Links" className="mb-5 text-lg lg:text-start" />
            {!project.github && !project.deployUrl && (
              <p className="text-center lg:text-start">
                No links for this project.
              </p>
            )}
            <div className="grid gap-y-5 lg:grid-cols-4 lg:gap-x-8">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mx-auto lg:size-10"
                >
                  <GithubIcon className="size-10 fill-zinc-500 transition-colors group-hover:fill-zinc-200 lg:size-full" />
                </Link>
              )}
              {project.deployUrl && (
                <Link
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mx-auto"
                >
                  <Globe className="size-10 text-zinc-500 transition-colors group-hover:text-zinc-200 lg:size-full" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
