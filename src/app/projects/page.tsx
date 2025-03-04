import { prisma } from '@/lib/prisma-client'
import { CardProject } from '../(home)/(sections)/(top-projects)/card-project'

export default async function Projects() {
  const allProjects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      slug: true,
      github: true,
      imagesUrl: true,
      createdAt: true,
    },
    orderBy: [{ topProject: 'desc' }, { createdAt: 'desc' }],
  })

  return (
    <div className="flex flex-col gap-10 bg-topography px-5 py-10 md:px-20 lg:px-5 2xl:px-36 2xl:py-20">
      <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <h1 className="font-extrabold text-2xl">All my projects</h1>

        <p className="text-zinc-400">
          Showing <span className="font-extrabold">{allProjects.length}</span>{' '}
          projects
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
