interface ProjectBySlugProps {
  params: {
    slug: string
  }
}

export default function ProjectBySlugPage({ params }: ProjectBySlugProps) {
  return <div>{params.slug}</div>
}
