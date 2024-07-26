import { forwardRef, type InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={twMerge(
          'flex-1 border-0 bg-transparent p-0 focus-visible:outline-none',
          className,
        )}
      />
    )
  },
)

Control.displayName = 'Control'
