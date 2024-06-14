export default async function Home() {
  return (
    <main className="flex h-[87vh] flex-col items-center justify-center">
      <div className="grid w-full grid-cols-2">
        <div className="mx-auto content-center">
          <h1 className="conten font-mono text-5xl font-bold">
            I am <span className="text-[#f97180]">{'${'}</span>
            <span className="text-[#b392f0]">Vinicius Motta</span>
            <span className="text-[#f97180]">{'}'}</span>
          </h1>
          <h2 className="font-mono text-3xl font-semibold">
            Full-Stack Developer
          </h2>
        </div>
        <div className="p-24">
          <div className="aspect-square content-center rounded-full bg-slate-500 text-center">
            <h1 className="font-mono text-9xl font-extrabold text-zinc-800">
              VM
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}
