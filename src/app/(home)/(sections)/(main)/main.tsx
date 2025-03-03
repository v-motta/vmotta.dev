import { ScrollDownIcon } from '../../scroll-down-icon'

export function Main() {
  return (
    <main className="relative grid h-[calc(100vh-7rem)] grid-cols-12 items-center gap-6 px-32 2xl:px-[8.625rem]">
      <div className="hidden 2xl:block" />

      <div className="col-span-7 2xl:col-span-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-semibold text-2xl">Hi, I am</p>
            <h1 className="font-bold text-5xl">Vinicius Motta</h1>
          </div>

          <p className="text-3xl text-primary">
            <span className="rocket">🚀</span> Full-Stack Developer
          </p>

          <p className="text-balance text-lg text-zinc-400">
            Currently graduating a degree in Computer Science, with professional
            experience in TypeScript, React, Angular, Bootstrap, Go, Flutter,
            and DevOps.
          </p>
        </div>
      </div>

      <div />

      <div className="col-span-4 2xl:col-span-3">
        <div className="flex aspect-square items-center justify-center rounded-full border border-primary">
          <span>My photo</span>
        </div>
      </div>

      <ScrollDownIcon />
    </main>
  )
}
