import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Portfolio of Vinicius Motta'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

async function loadGoogleFont(font: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status === 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#18181b',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 32,
        fontFamily: 'JetBrains Mono',
      }}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: 'rgba(249, 113, 128, 0.2)',
          borderRadius: 9999,
        }}
      >
        <img
          src="https://vmotta.dev/myself.png"
          alt="Vinicius Motta"
          style={{
            height: '100%',
            borderRadius: 9999,
            filter: 'grayscale(75%)',
          }}
        />
      </div>

      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 80,
          color: '#fafafa',
        }}
      >
        <span style={{ fontSize: 20 }}>Hi, I am</span>
        <span style={{ fontSize: 40, marginTop: -8 }}>Vinicius Motta</span>

        <span style={{ fontSize: 32, color: '#f97180', marginTop: 24 }}>
          🚀 Full-Stack Developer
        </span>
      </p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: await loadGoogleFont('JetBrains Mono'),
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
