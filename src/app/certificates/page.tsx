import { getCleanText } from '@/lib/clean-text'
import { prisma } from '@/lib/prisma-client'
import { CardCertificate } from '../(home)/(sections)/(latest-certificates)/card-certificate'

export default async function Certificates() {
  const allCertificates = await prisma.certificate.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      imageUrl: true,
      issueDate: true,
      technologies: true,
      hourDuration: true,
      company: true,
    },
    orderBy: { issueDate: 'desc' },
  })

  const allCertificatesSimplified = allCertificates.map((certificate) => ({
    ...certificate,
    technologies: certificate.technologies.map((tech) =>
      getCleanText(tech.name)
    ),
  }))

  return (
    <div className="flex flex-col gap-10 bg-topography px-5 py-10 md:px-20 lg:px-5 2xl:px-36 2xl:py-20">
      <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <h1 className="font-extrabold text-2xl">All my certificates</h1>

        <p className="text-muted-foreground">
          Showing{' '}
          <span className="font-extrabold">{allCertificates.length}</span>{' '}
          certificates
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {allCertificatesSimplified.map((certificate) => (
          <CardCertificate key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}
