import { createPageMetadata } from '@/app/lib/metadata'
import { PageHero } from '@/app/components/PageHero'
import { CTABanner } from '@/app/components/CTABanner'
import { testimonials } from '@/app/lib/testimonials'
import { TestimonialCard } from '@/app/components/TestimonialCard'

export const metadata = createPageMetadata({
  pageName: 'Testimonials',
  description:
    'Read customer feedback from homeowners and businesses served by JEM Heating and Air Conditioning.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Customers Say"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
      />

      <section className="bg-surface px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mb-4 text-2xl font-display font-bold text-primary md:text-4xl">Customer Reviews</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Had a great experience? We’d love to hear from you."
        subtext="Tell us about your service visit."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  )
}
