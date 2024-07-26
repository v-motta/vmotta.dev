import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextareaProps extends ComponentProps<'textarea'> {
  withError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, withError, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={twMerge(
          'flex min-h-[120px] w-full resize-y items-center gap-2 rounded-lg border border-zinc-400 bg-transparent px-3 py-1 outline-none 2xl:py-2',
          'focus-within:border-zinc-100 focus-within:ring-4 focus-within:ring-zinc-500/50',
          withError &&
            'border-red-500 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/40',
          className,
        )}
        {...rest}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
