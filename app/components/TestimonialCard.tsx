import type { Testimonial } from '@/app/lib/testimonials'

export function TestimonialCard({ name, quote }: Testimonial) {
  return (
    <article className="rounded-2xl border-l-4 border-accent bg-white p-8 shadow-md">
      <p className="mb-3 text-lg text-yellow-400" aria-label="5 stars">
        ★★★★★
      </p>
      <p className="mb-4 text-sm italic leading-relaxed text-gray-600">“{quote}”</p>
      <p className="text-sm font-bold text-primary">{name}</p>
    </article>
  )
}
