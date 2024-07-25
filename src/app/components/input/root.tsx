import type { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  withError?: boolean
}

export function Root({ className, withError, ...rest }: RootProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-400 bg-transparent px-3 py-1 shadow-sm outline-none 2xl:py-2',
        'focus-within:border-zinc-100 focus-within:ring-4 focus-within:ring-zinc-500/50',
        withError &&
          'border-red-500 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-100',
        className,
      )}
    />
  )
}
