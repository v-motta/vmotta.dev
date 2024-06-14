export default async function Home() {
  return (
    <main className="flex h-[77vh] flex-col items-center justify-center md:h-[87vh]">
      <div className="grid w-full xl:grid-cols-2">
        <div className="mx-auto content-center">
          <h1 className="font-mono text-xl font-bold xl:text-5xl">
            I am <span className="text-[#f97180]">{'${'}</span>
            <span className="text-[#b392f0]">Vinicius Motta</span>
            <span className="text-[#f97180]">{'}'}</span>
          </h1>
          <h2 className="font-mono text-base font-semibold xl:text-3xl">
            Full-Stack Developer
          </h2>
        </div>
        <div className="m-24 hidden aspect-square content-center rounded-full bg-slate-500 text-center xl:block">
          <h1 className="font-mono text-9xl font-extrabold text-zinc-800">
            VM
          </h1>
        </div>
      </div>
    </main>
  )
}
