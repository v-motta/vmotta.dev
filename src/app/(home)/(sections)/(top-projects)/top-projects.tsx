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
      className="flex h-screen flex-col gap-10 px-10 py-10 2xl:gap-20 2xl:px-36 2xl:py-20"
    >
      <h1 className="text-center font-extrabold text-3xl">Top projects</h1>

      <div className="grid h-full grid-cols-3 gap-x-6">
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
