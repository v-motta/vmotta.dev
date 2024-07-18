import { Button } from '@/app/components/button'
import data from '@/app/data.json'
import * as Separator from '@radix-ui/react-separator'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CardProject } from './card-project'
import {
  DockerIcon,
  GithubIcon,
  GoIcon,
  LinkedinIcon,
  NextIcon,
  PrismaIcon,
  PythonIcon,
  WhatsappIcon,
  ZodIcon,
} from '@/app/components/icons'

export default async function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center xl:h-[calc(100vh-6rem)]">
        <div className="grid py-10 lg:grid-cols-2">
          <div className="order-2 content-center px-8 text-center sm:px-16 sm:ps-32 lg:text-start">
            <h1 className="font-mono text-xl font-bold xl:text-4xl 2xl:text-5xl">
              I am <span className="text-bracket">{'${'}</span>
              <span className="text-variable">Vinicius Motta</span>
              <span className="text-bracket">{'}'}</span>
            </h1>
            <h2 className="mb-4 font-mono text-base font-semibold xl:text-xl 2xl:text-3xl">
              Full-Stack Developer
            </h2>
            <p className="mb-8 text-zinc-400">
              Currently graduating a degree in Computer Science, with
              professional experience in TypeScript, React, Angular, Bootstrap,
              Go, Flutter, and DevOps.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://github.com/v-motta"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-zinc-500 p-3 hover:border-zinc-200"
              >
                <GithubIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-zinc-200" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/viniciusmottadacosta/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-zinc-500 p-3 hover:border-linkedin"
              >
                <LinkedinIcon className="size-6 fill-zinc-500 transition-colors group-hover:fill-linkedin" />
              </Link>
              <Link
                href="https://wa.me/5511987977427"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-zinc-500 p-3 hover:border-whatsapp"
              >
                <WhatsappIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-whatsapp" />
              </Link>
            </div>
          </div>
          <div className="order-1 m-14 mb-10 mt-5 sm:m-36 sm:mb-10 sm:mt-5 md:m-28 lg:order-2 xl:block">
            <Image
              src="/me.jpeg"
              width={672}
              height={896}
              quality={100}
              priority
              alt=""
              className="mx-auto aspect-square rounded-full object-none"
            />
          </div>
        </div>
      </main>

      <Separator.Root
        orientation="horizontal"
        className="my-10 h-px bg-zinc-50"
      />

      <section id="projects" className="flex flex-col gap-8">
        <h2 className="text-center font-mono text-3xl font-bold">
          Newest projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:px-8 2xl:px-40">
          {data.projects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              github={project.github}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-3 text-center"
            >
              See all projects
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <Separator.Root
        orientation="horizontal"
        className="my-10 h-px bg-zinc-50"
      />

      <section id="technologies">
        <h2 className="text-center font-mono text-3xl font-bold">
          Main technologies
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:px-8 2xl:px-40">
          <div></div>
          <div className="grid grid-cols-7 gap-5 *:h-14 *:w-14 *:fill-zinc-50">
            <DockerIcon />
            <GithubIcon />
            <LinkedinIcon />
            <PrismaIcon />
            <PythonIcon />
            <WhatsappIcon />
            <ZodIcon />
            <NextIcon />
            <GoIcon />
          </div>
        </div>
      </section>
    </>
  )
}
