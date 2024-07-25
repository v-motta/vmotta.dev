import type { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string
  mandatory?: boolean
}

export function Label({ mandatory, children, className, ...rest }: LabelProps) {
  return (
    <label className={twMerge('pl-1', className)} {...rest}>
      {children} {mandatory && <span className="text-red-500">*</span>}
    </label>
  )
}
