import { iconsNode } from '@/components/icons/icon-node'
import { format, formatDistance } from 'date-fns'
import Image from 'next/image'
import { Fragment } from 'react'

interface CardCertificateProps {
  certificate: {
    technologies: string[]
    id: string
    title: string
    slug: string
    company: string
    issueDate: Date
    imageUrl: string
    hourDuration: number
  }
}

export function CardCertificate({ certificate }: CardCertificateProps) {
  const formattedDate = formatDistance(certificate.issueDate, new Date(), {
    addSuffix: true,
  })

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/75 p-4 md:gap-6 md:p-6">
      <Image
        src={certificate.imageUrl}
        alt={certificate.title}
        width={1000}
        height={1000}
        quality={100}
        className="aspect-auto rounded-lg border border-border"
      />

      <h1 className="flex-1 font-extrabold text-primary text-xl md:text-2xl">
        {certificate.title}
      </h1>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          {certificate.technologies.map((technology) => (
            <Fragment key={technology}>{iconsNode[technology]}</Fragment>
          ))}
        </div>

        <div className="space-y-2 text-zinc-400">
          <p>Workload: {certificate.hourDuration} hours</p>
          <p>
            Issued by {certificate.company} {formattedDate} on{' '}
            {format(certificate.issueDate, 'dd MMM yyyy')}
          </p>
        </div>
      </div>
    </div>
  )
}
