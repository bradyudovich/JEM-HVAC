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

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
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
