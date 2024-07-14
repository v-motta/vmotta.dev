import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg py-2 px-4 text-sm font-bold text-center outline-none cursor-pointer',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bios-500',
    'disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-500',
    'border transition',
  ],
  variants: {
    variant: {
      primary: [
        'bg-zinc-50 border-zinc-50 text-zinc-950',
        'hover:border-zinc-300 hover:bg-zinc-300',
      ],
      outline: [
        'bg-transparent text-zinc-50 border-zinc-50',
        'hover:bg-zinc-800',
      ],
      ghost: [
        'bg-transparent px-2 border-transparent text-zinc-50',
        'hover:border-zinc-800 hover:bg-zinc-800',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, className })} />
}
