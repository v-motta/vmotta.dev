import { Button } from '@/components/button'
import data from '@/app/data.json'
import * as Separator from '@radix-ui/react-separator'
import { ArrowRight, ChevronDown, Mouse } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CardProject } from './card-project'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/icons'
import { Title } from '@/components/title'
import { iconsNode } from '@/components/icons/icon-node'

export default async function HomePage() {
  const mainTechnologies = [
    'aws',
    'cloudflare',
    'cypress',
    'docker',
    'fastify',
    'flask',
    'git',
    'gitea',
    'githubactions',
    'github',
    'golang',
    'javascript',
    'next',
    'nodejs',
    'prisma',
    'python',
    'react',
    'tailwind',
    'traefik',
    'typescript',
    'vite',
    'zod',
  ]

  return (
    <>
      <main className="flex flex-col items-center justify-center xl:h-[calc(100vh-6rem)]">
        <div className="relative grid py-10 lg:grid-cols-2 lg:py-0">
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
                aria-label="Discover my GitHub and my project codes"
              >
                <GithubIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-zinc-200" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/viniciusmottadacosta/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-zinc-500 p-3 hover:border-linkedin"
                aria-label="Check out my profile on Linkedin"
              >
                <LinkedinIcon className="size-6 fill-zinc-500 transition-colors group-hover:fill-linkedin" />
              </Link>
              <Link
                href="https://wa.me/5511987977427"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full border border-zinc-500 p-3 hover:border-whatsapp"
                aria-label="Contact me via Whatsapp"
              >
                <WhatsappIcon className="size-7 fill-zinc-500 transition-colors group-hover:fill-whatsapp" />
              </Link>
            </div>
          </div>
          <div className="order-1 m-14 mb-10 mt-5 sm:m-36 sm:mb-10 sm:mt-5 md:m-28 lg:order-2 xl:block">
            <Image
              src="/myself.webp"
              width={1100}
              height={1100}
              quality={100}
              priority
              alt=""
              className="mx-auto aspect-square rounded-full object-cover"
            />
          </div>
          <Mouse className="absolute bottom-16 left-1/2 hidden size-9 -translate-x-1/2 text-white lg:block" />
          <ChevronDown
            className="absolute bottom-8 left-1/2 hidden size-7 animate-bounce text-bracket lg:block"
            style={{ translate: '-50%' }}
          />
          <ChevronDown
            className="absolute bottom-6 left-1/2 hidden size-7 translate-x-1/2 animate-bounce text-bracket lg:block"
            style={{ translate: '-50%' }}
          />
        </div>
      </main>

      <Separator.Root
        orientation="horizontal"
        className="mb-10 h-px bg-zinc-50"
      />

      <section id="projects" className="flex flex-col gap-8">
        <Title title="Newest Projects" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:px-8 2xl:px-40">
          {data.projects.slice(0, 4).map((project) => (
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

      <section id="technologies" className="flex flex-col gap-8 pb-8">
        <Title title="Main Technologies" />
        <div className="xl:px-8 2xl:px-40">
          {/* <div className="flex flex-col justify-center gap-3">
            <h3 className="font-mono text-2xl font-semibold">Filter</h3>
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Database</li>
              <li>DevOps</li>
            </ul>
          </div> */}
          <div className="grid grid-cols-5 gap-8 *:mx-auto *:size-full *:fill-zinc-50 lg:gap-16 xl:grid-cols-12">
            {mainTechnologies.map((tech) => (
              <div key={tech}>{iconsNode[tech]}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
