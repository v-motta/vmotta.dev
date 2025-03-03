import type { SVGProps } from 'react'

interface FlutterIconProps extends SVGProps<SVGSVGElement> {}

export function FlutterIcon(props: FlutterIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <title>Flutter</title>
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
    </svg>
  )
}
