import data from '@/app/data.json'
import { CardProject } from './card-project'

export default function ProjectsPage() {
  return (
    <div className="grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 lg:py-0 xl:grid-cols-4 2xl:grid-cols-5">
      {data.projects.map((project) => (
        <CardProject
          key={project.id}
          image="https://github.com/v-motta.png"
          title={project.title}
          subtitle={project.subtitle}
          slug={project.slug}
          github={project.github}
          deployUrl={project.deplyUrl}
        />
      ))}
    </div>
  )
}
