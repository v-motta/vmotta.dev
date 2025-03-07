import myself from '@/../public/myself.png'
import Image from 'next/image'
import { ScrollDownIcon } from '../../scroll-down-icon'

export function Main() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-10 px-5 py-10 text-center sm:px-10 md:px-20 lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.5fr_1fr] lg:text-start xl:grid-cols-[2fr_1fr] xl:gap-6 xl:px-36 2xl:grid-cols-[2fr_0.7fr]">
      <div className="order-last lg:order-first">
        <div className="flex flex-col gap-4 xl:gap-6">
          <div>
            <p className="font-semibold text-2xl">Hi, I am</p>
            <h1 className="font-bold text-4xl xl:text-5xl">Vinicius Motta</h1>
          </div>

          <p className="text-2xl text-primary xl:text-3xl">
            <span className="inline-block animate-rocket">🚀</span> Full-Stack
            Developer
          </p>

          <p className="text-balance text-base text-muted-foreground xl:text-lg">
            Currently graduating a degree in Computer Science, with professional
            experience in TypeScript, React, Angular, Bootstrap, Go, Flutter,
            and DevOps.
          </p>
        </div>
      </div>

      <div className="md: order-first w-2/3 sm:w-1/2 md:w-1/3 lg:order-last lg:w-auto">
        <div className="image-container flex aspect-square items-center justify-center rounded-full bg-primary/20">
          <Image
            src={myself}
            alt="Vinicius Motta"
            priority
            quality={100}
            className="rounded-full grayscale-75"
          />
        </div>
      </div>

      <ScrollDownIcon />
    </main>
  )
}
