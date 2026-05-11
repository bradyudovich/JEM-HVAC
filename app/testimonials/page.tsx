import { CTABanner } from '@/app/components/CTABanner'
import { PageHero } from '@/app/components/PageHero'
import { TestimonialCard } from '@/app/components/TestimonialCard'
import { createPageMetadata } from '@/app/lib/metadata'
import { layoutClasses } from '@/app/lib/styles'
import { testimonials } from '@/app/lib/testimonials'

export const metadata = createPageMetadata({
  pageName: 'Testimonials',
  description:
    'Read customer feedback from homeowners and businesses served by JEM Heating and Air Conditioning.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="What Our Customers Say" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} />

      <section className={`bg-surface ${layoutClasses.innerSection}`}>
        <div className={layoutClasses.container}>
          <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-3">Customer Reviews</h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Had a great experience? We’d love to hear from you."
        subtext="Call us or send a message. We respond quickly, show up on time, and always leave the job site clean."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
