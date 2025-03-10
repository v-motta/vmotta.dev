import type { SVGProps } from 'react'

interface ShadcnuiIconProps extends SVGProps<SVGSVGElement> {}

export function ShadcnuiIcon(props: ShadcnuiIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <title>shadcn/ui</title>
      <path d="M22.219 11.784L11.784 22.219a1.045 1.045 0 001.476 1.476L23.695 13.26a1.045 1.045 0 00-1.476-1.476zM20.132.305L.305 20.132a1.045 1.045 0 001.476 1.476L21.608 1.781A1.045 1.045 0 0020.132.305z" />
    </svg>
  )
}
