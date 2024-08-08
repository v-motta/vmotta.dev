import { Title } from '@/components/title'
import { CardCertificate } from './card-certificate'
import data from '@/app/data.json'

export default function CertificatesPage() {
  return (
    <div className="lg:min-h-[calc(100vh-6rem-4rem)]">
      <Title title="Certificates" className="mt-8 lg:mt-0" />
      <div className="grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.certificates.map((certificate) => (
          <CardCertificate
            key={certificate.id}
            title={certificate.title}
            company={certificate.company}
            mainTechnology={certificate.mainTechnology}
            issueDate={certificate.issueDate}
            slug={certificate.slug}
          />
        ))}
      </div>
    </div>
  )
}
