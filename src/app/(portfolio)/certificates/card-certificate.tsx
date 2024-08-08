import Image from 'next/image'

export interface CardCertificateProps {
  title: string
  company: string
  slug: string
  mainTechnology: string
  issueDate: Date | string
}

export function CardCertificate({
  title,
  company,
  slug,
  issueDate,
}: CardCertificateProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-zinc-200 p-5">
      <Image
        src={`/certificates/${slug}.webp`}
        alt=""
        width={1000}
        height={1000}
        quality={100}
        className="aspect-video h-52 rounded-lg object-cover object-center"
      />
      <div className="text-center lg:text-start">
        <h1 className="mb-2 line-clamp-2 h-14 font-mono text-xl font-bold">
          {title}
        </h1>
        <h2 className="font-semibold text-zinc-400">{company}</h2>
        {/* format ISO date to dd/MM/yyyy */}
        <p className="text-zinc-400">
          Issued:{' '}
          {new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }).format(new Date(issueDate))}
        </p>
      </div>
    </div>
  )
}
