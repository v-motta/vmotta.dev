'use client'

import { Button } from '@/components/ui/button'
import { useCarousel } from '@/components/ui/carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function CarouselCardButtons() {
  const { scrollNext, canScrollNext, scrollPrev, canScrollPrev } = useCarousel()

  function handleScrollPrev(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    scrollPrev()
  }

  function handleScrollNext(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    scrollNext()
  }

  return (
    <div className="flex gap-x-4">
      <Button
        variant="outline"
        size="icon"
        disabled={!canScrollPrev}
        onClick={handleScrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        disabled={!canScrollNext}
        onClick={handleScrollNext}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
