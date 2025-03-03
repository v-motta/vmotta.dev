import { Button } from '@/components/ui/button'
import { getCleanText } from '@/lib/clean-text'
import { prisma } from '@/lib/prisma-client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CardCertificate } from './card-certificate'

export async function LatestCertificates() {
  const latestCertificates = await prisma.certificate.findMany({
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
    take: 3,
  })

  const latestCertificatesSimplified = latestCertificates.map(
    (certificate) => ({
      ...certificate,
      technologies: certificate.technologies.map((tech) =>
        getCleanText(tech.name)
      ),
    })
  )

  return (
    <section
      id="latest_certificates"
      className="flex h-screen flex-col gap-10 bg-topography px-10 py-10 2xl:gap-20 2xl:px-36 2xl:py-20"
    >
      <h1 className="text-center font-extrabold text-3xl">
        Latest certificates
      </h1>

      <div className="grid h-full grid-cols-3 gap-x-6">
        {latestCertificatesSimplified.map((certificate) => (
          <CardCertificate key={certificate.id} certificate={certificate} />
        ))}
      </div>

      <Button className="mx-auto w-fit" size="lg" asChild>
        <Link href="/certificates">
          See all certificates <ArrowRight />
        </Link>
      </Button>
    </section>
  )
}
