import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface PrefixProps extends HTMLAttributes<HTMLDivElement> {}

export function Prefix({ className, ...rest }: PrefixProps) {
  return <div {...rest} className={twMerge('', className)} />
}
