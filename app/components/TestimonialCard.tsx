import type { Testimonial } from '@/app/lib/testimonials'
import { Star } from 'lucide-react'

export function TestimonialCard({ name, quote }: Testimonial) {
  return (
    <article className="rounded-2xl border-l-4 border-accent bg-white p-6 shadow-md md:p-8">
      <p className="mb-3 flex gap-1" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </p>
      <p className="mb-4 text-sm italic leading-relaxed text-gray-600">“{quote}”</p>
      <p className="text-sm font-bold text-primary">{name}</p>
    </article>
  )
}
