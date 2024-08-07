import data from '@/app/data.json'
import { CardProject } from './card-project'
import { Title } from '@/components/title'

export default function ProjectsPage() {
  return (
    <div className="xl:min-h-[calc(100vh-6rem-6rem)]">
      <Title title="Projects" className="mt-8 lg:mt-0" />
      <div className="grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:py-0 2xl:grid-cols-5">
        {data.projects.map((project) => (
          <CardProject
            key={project.id}
            image={project.pathImages}
            title={project.title}
            subtitle={project.subtitle}
            slug={project.slug}
            github={project.github}
            deployUrl={project.deployUrl}
          />
        ))}
      </div>
    </div>
  )
}
