import type { SVGProps } from 'react'

interface BrazilIconProps extends SVGProps<SVGPathElement> {}

export function BrazilIcon({ width, height }: BrazilIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <rect x={1} y={4} width={30} height={24} rx={4} ry={4} fill="#459a45" />
      <path
        d="M27 4H5a4 4 0 00-4 4v16a4 4 0 004 4h22a4 4 0 004-4V8a4 4 0 00-4-4zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16z"
        opacity={0.15}
      />
      <path d="M3.472 16L16 24l12.528-8L16 8 3.472 16z" fill="#fedf00" />
      <circle cx={16} cy={16} r={5} fill="#0a2172" />
      <path
        d="M14 14.5c-.997 0-1.958.149-2.873.409-.078.35-.126.71-.127 1.083a9.456 9.456 0 012.999-.493c2.524 0 4.816.996 6.519 2.608a4.98 4.98 0 00.356-1.026 10.443 10.443 0 00-6.875-2.583z"
        fill="#fff"
      />
      <path
        d="M27 5H5a3 3 0 00-3 3v1a3 3 0 013-3h22a3 3 0 013 3V8a3 3 0 00-3-3z"
        fill="#fff"
        opacity={0.2}
      />
    </svg>
  )
}
