import type { Testimonial } from '@/app/lib/testimonials'

export function TestimonialCard({ name, quote }: Testimonial) {
  return (
    <article className="rounded-2xl border-l-4 border-accent bg-white p-6 shadow-md">
      <div className="flex text-amber-400" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} aria-hidden="true">★</span>
        ))}
      </div>
      <p className="mt-4 italic text-muted">“{quote}”</p>
      <p className="mt-4 font-semibold text-primary">{name}</p>
    </article>
  )
}
