import { prisma } from '@/lib/prisma-client'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  const projectDetails = await prisma.project.findUnique({
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

  if (!projectDetails) {
    return Response.json({ message: 'Project does not exist' }, { status: 404 })
  }

  const simplifiedProject = {
    ...projectDetails,
    technologies: projectDetails.technologies.map(
      (technology) => technology.name
    ),
  }

  return Response.json(simplifiedProject)
}
