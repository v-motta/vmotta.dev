import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface LinkButtonProps {
  url: string
  IconComponent: React.ComponentType<{ className?: string }>
}

export function LinkButton({ url, IconComponent }: LinkButtonProps) {
  return (
    <Button
      size="icon"
      variant="outline"
      className="border-primary text-primary transition-all hover:border-foreground md:mx-4"
      asChild
    >
      <Link href={url}>
        <IconComponent className="size-5" />
      </Link>
    </Button>
  )
}
