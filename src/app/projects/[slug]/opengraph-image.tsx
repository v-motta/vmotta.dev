import ky from 'ky'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'
export const alt = 'OpenGraph image for projects'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const productDetails = await ky
    .get(`http://localhost:3000/api/og/products/${slug}`)
    .json<{
      title: string
      subtitle: string
      description: string
      github: string | null
      deployUrl: string | null
      imagesUrl: string[]
      technologies: {
        name: string
      }[]
    } | null>()

  if (!productDetails) return undefined

  return new ImageResponse(
    <div
      style={{
        background: '#18181b',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img src={productDetails.imagesUrl[0]} alt="" style={{ width: '100%' }} />
    </div>,
    { ...size }
  )
}
