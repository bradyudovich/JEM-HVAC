import { Star } from 'lucide-react'
import type { Testimonial } from '@/app/lib/testimonials'
import { cardStyles } from '@/app/lib/styles'

function getInitials(name: string): string {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase()
}

export function TestimonialCard({ name, quote }: Testimonial) {
  return (
    <article className={`${cardStyles.standard} h-full flex flex-col`}>
      <p className="mb-3 flex gap-1" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </p>
      <p className="mb-4 flex-1 text-sm text-gray-500 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-green-light text-xs font-semibold text-primary"
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>
        <p className="text-sm font-semibold text-primary">{name}</p>
      </div>
    </article>
  )
}
