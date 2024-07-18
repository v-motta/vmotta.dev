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
      <div className="mt-10 text-center text-3xl font-bold">
        Project not found
      </div>
    )
  }

  return <div>{JSON.stringify(project)}</div>
}
