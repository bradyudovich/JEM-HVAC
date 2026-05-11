import type { Testimonial } from '@/app/lib/testimonials'
import { Star } from 'lucide-react'

function getInitials(name: string): string {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TestimonialCard({ name, quote }: Testimonial) {
  return (
    <article className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 md:p-8">
      <p className="mb-3 flex gap-1" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </p>
      <p className="mb-4 text-sm italic leading-relaxed text-gray-600">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white" aria-hidden="true">
          {getInitials(name)}
        </div>
        <p className="text-sm font-bold text-primary">{name}</p>
      </div>
    </article>
  )
}
