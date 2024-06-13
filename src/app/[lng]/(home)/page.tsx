import { useTranslation } from '@/app/i18n'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

  return (
    <main>
      <h1>{t('key')}</h1>
    </main>
  )
}
