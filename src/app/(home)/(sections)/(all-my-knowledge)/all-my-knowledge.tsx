import { iconsNode } from '@/components/icons/icon-node'
import { getCleanText } from '@/lib/clean-text'
import { prisma } from '@/lib/prisma-client'
import type { StackType } from '@prisma/client'

export const revalidate = 60 // revalidate every 1 minute

export async function AllMyKnowledge() {
  const allTechnologies = await prisma.technology.findMany({
    select: {
      name: true,
      stacks: true,
    },
  })

  const stackNames = {
    frontend: 'Front-End',
    backend: 'Back-End',
    database: 'Database',
    devops: 'DevOps',
  }

  const groupedStacks = Object.entries(stackNames).map(([key, displayName]) => {
    return {
      name: displayName,
      techs: allTechnologies
        .filter((tech) => {
          return tech.stacks.includes(key as StackType)
        })
        .map((tech) => {
          return getCleanText(tech.name)
        }),
    }
  })

  return (
    <section
      id="all_my_knowledge"
      className="flex flex-col gap-10 px-5 py-10 md:px-20 lg:px-5 2xl:min-h-[calc(100vh-4rem)] 2xl:gap-20 2xl:px-36 2xl:py-20"
    >
      <h1 className="text-center font-extrabold text-3xl">All My Knowledge</h1>

      <div className="grid flex-1 gap-px bg-primary lg:grid-cols-2 lg:grid-rows-2">
        {groupedStacks.map(({ name, techs }) => (
          <div
            key={name}
            className="flex flex-col gap-10 bg-background px-0 py-8 md:px-8 lg:py-5 2xl:px-16"
          >
            <h1 className="text-center text-xl underline underline-offset-4">
              {name}
            </h1>

            <div className="flex flex-wrap justify-center gap-5 px-10 md:gap-7 2xl:gap-8">
              {techs.map((tech) => {
                const Icon = iconsNode[tech]

                return (
                  <Icon key={tech} className="size-6 md:size-8 2xl:size-10" />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
