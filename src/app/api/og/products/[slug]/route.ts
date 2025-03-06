import { prisma } from '@/lib/prisma-client'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  const projectDetails = await prisma.project.findUnique({
    where: { slug },
    select: {
      imagesUrl: true,
    },
  })

  if (!projectDetails) {
    return Response.json({ message: 'Project does not exist' }, { status: 404 })
  }

  return Response.json(projectDetails)
}
