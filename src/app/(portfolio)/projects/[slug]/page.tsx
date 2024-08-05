import data from '@/app/data.json'
import Image from 'next/image'

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
      <div className="grid grid-cols-2 gap-5">
        {project.pathImages && (
          <>
            <Image
              className="h-full w-full object-cover"
              src={project.pathImages[0]}
              width={800}
              height={600}
              quality={100}
              alt=""
            />
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              {project.pathImages.slice(1).map((image, index) => (
                <Image
                  key={index}
                  className="h-full w-full object-cover"
                  src={image}
                  width={400}
                  height={300}
                  quality={100}
                  alt=""
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-5 py-8 md:px-16 lg:px-0 xl:px-16 2xl:px-36">
        <div>
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-sm text-zinc-500">{project.subtitle}</p>
          <p className="mt-3">{project.description}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Technologies used:</h3>
          <ul>
            {project.technologies &&
              project.technologies.map((tech, index) => (
                // TODO: render each technology as a icon
                <li key={index}>
                  <p>{tech}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
