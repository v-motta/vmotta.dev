import data from '@/app/data.json'

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
      <p>{JSON.stringify(project, null, 2)}</p>
    </div>
  )
}
