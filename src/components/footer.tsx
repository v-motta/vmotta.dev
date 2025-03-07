import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center border-t border-t-border bg-background/95 shadow-md xl:px-36">
      <p className="flex flex-nowrap items-end gap-2 text-muted-foreground text-sm">
        Made with{' '}
        <Heart className="size-5 animate-heartbeat fill-red-500 text-red-500" />{' '}
        by <a href="https://vmotta.dev">vmotta</a>
      </p>
    </footer>
  )
}
