import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bracket: '#f97180',
        variable: '#b392f0',
        whatsapp: '#25D366',
        linkedin: '#0A66C2',
        typescript: '#24A1C1',
        traefik: '#3178C6',
        javascript: '#F7DF1E',
        tailwind: '#06B6D4',
        react: '#61DAFB',
        vite: '#646CFF',
        gitea: '#609926',
        git: '#F05032',
        node: '#5FA04E',
        aws: '#232F3E',
        cloudflare: '#F38020',
        cypress: '#69D3A7',
        docker: '#2496ED',
        go: '#00ADD8',
        prisma: '#2D3748',
        python: '#3776AB',
        zod: '#3E67B1',
      },
    },
  },
  plugins: [],
}
export default config
