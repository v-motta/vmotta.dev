import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CardProject } from './card-project'

export async function TopProjects() {
  const topThreeProjects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      slug: true,
      github: true,
      imagesUrl: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
    where: { topProject: true },
    take: 3,
  })

  return (
    <section
      id="top_projects"
      className="flex flex-col gap-10 px-5 py-10 md:px-20 lg:px-5 2xl:h-[calc(100vh-4rem)] 2xl:gap-20 2xl:px-36 2xl:py-20"
    >
      <h1 className="text-center font-extrabold text-3xl">Top projects</h1>

      <div className="grid h-full gap-x-6 gap-y-5 lg:grid-cols-3">
        {topThreeProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>

      <Button className="mx-auto w-fit" size="lg" asChild>
        <Link href="/projects">
          See all projects <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
