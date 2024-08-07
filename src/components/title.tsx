import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
}

export function Title({ title, className, ...rest }: TitleProps) {
  return (
    <h1
      {...rest}
      className={twMerge(
        'text-center font-mono text-2xl font-bold xl:text-3xl',
        className,
      )}
    >
      <span className="text-bracket">{'${'}</span>
      <span className="text-variable">{title}</span>
      <span className="text-bracket">{'}'}</span>
    </h1>
  )
}
