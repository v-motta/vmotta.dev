import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="mx-auto content-center px-8 text-center sm:px-16 lg:text-start">
          <h1 className="font-mono text-xl font-bold xl:text-4xl 2xl:text-5xl">
            I am <span className="text-bracket">{'${'}</span>
            <span className="text-variable">Vinicius Motta</span>
            <span className="text-bracket">{'}'}</span>
          </h1>
          <h2 className="mb-4 font-mono text-base font-semibold xl:text-xl 2xl:text-3xl">
            Full-Stack Developer
          </h2>
          <p className="mb-8 text-zinc-400">
            Currently graduating a degree in Computer Science, with professional
            experience in TypeScript, React, Angular, Bootstrap, Go, Flutter,
            and DevOps.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://github.com/v-motta"
              className="group rounded-full border border-zinc-500 p-2 hover:border-zinc-200"
            >
              <GithubIcon
                width={28}
                height={28}
                className="text-zinc-500 transition-colors group-hover:text-zinc-200"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/v-motta/"
              className="group rounded-full border border-zinc-500 p-2 hover:border-sky-300"
            >
              <LinkedinIcon
                width={26}
                height={26}
                className="text-zinc-500 transition-colors group-hover:text-sky-300"
              />
            </Link>
          </div>
        </div>
        <div className="m-14 mb-10 mt-5 sm:m-36 sm:mb-10 sm:mt-5 md:m-28 xl:block">
          <Image
            src="/eu.jpeg"
            width={672}
            height={896}
            quality={100}
            priority
            alt=""
            className="aspect-square rounded-full object-cover"
          />
        </div>
      </div>
    </main>
  )
}
