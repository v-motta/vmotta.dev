import type { SVGProps } from 'react'

interface DrizzleIconProps extends SVGProps<SVGSVGElement> {}

export function DrizzleIcon(props: DrizzleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <title>Drizzle</title>
      <path d="M5.353 11.823a1.036 1.036 0 00-.395-1.422 1.063 1.063 0 00-1.437.399L.138 16.702a1.035 1.035 0 00.395 1.422 1.063 1.063 0 001.437-.398l3.383-5.903zm11.216 0a1.036 1.036 0 00-.394-1.422 1.064 1.064 0 00-1.438.399l-3.382 5.902a1.036 1.036 0 00.394 1.422c.506.283 1.15.104 1.438-.398l3.382-5.903zm7.293-4.525a1.036 1.036 0 00-.395-1.422 1.062 1.062 0 00-1.437.399l-3.383 5.902a1.036 1.036 0 00.395 1.422 1.063 1.063 0 001.437-.399l3.383-5.902zm-11.219 0a1.035 1.035 0 00-.394-1.422 1.064 1.064 0 00-1.438.398l-3.382 5.903a1.036 1.036 0 00.394 1.422c.506.282 1.15.104 1.438-.399l3.382-5.902z" />
    </svg>
  )
}
