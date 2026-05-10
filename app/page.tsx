import Link from 'next/link'
import Image from 'next/image'
import { createPageMetadata } from '@/app/lib/metadata'
import { testimonials } from '@/app/lib/testimonials'
import { CTABanner } from '@/app/components/CTABanner'
import { TestimonialCard } from '@/app/components/TestimonialCard'

export const metadata = createPageMetadata({
  pageName: 'Home',
  description:
    'Carroll County’s trusted HVAC experts since 1997 for residential and commercial heating and cooling service.',
  path: '/',
})

const trustItems = [
  ['Since 1997', 'In Business'],
  ['Residential & Commercial', 'Service'],
  ['All Makes & Models', 'Serviced'],
  ['Emergency Service', 'Available'],
]

const serviceCards = [
  {
    title: 'Residential HVAC',
    description: 'Repair, replacement, and system upgrades for total home comfort.',
    href: '/services/residential',
  },
  {
    title: 'Commercial HVAC',
    description: 'Responsive maintenance and repair for business-critical systems.',
    href: '/services/commercial',
  },
  {
    title: 'Indoor Air Quality',
    description: 'Filtration and purification options to improve indoor health and comfort.',
    href: '/indoor-air-quality',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-primary via-[#14233C] to-primary text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <h1 className="font-display text-white text-4xl sm:text-6xl max-w-4xl">
            Carroll County&apos;s Trusted HVAC Experts Since 1997
          </h1>
          <p className="mt-6 max-w-3xl text-white/85 text-lg">
            Professional heating &amp; cooling service, fast response times, and honest pricing for
            residential and commercial clients.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 font-semibold text-white hover:opacity-90"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white" aria-hidden="true">
          ↓
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {trustItems.map(([title, subtitle]) => (
            <div key={title} className="py-6 px-4 text-center">
              <p className="font-semibold">{title}</p>
              <p className="text-sm uppercase tracking-wider text-white/75">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-display text-4xl">What We Do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl shadow-md bg-white border-t-4 border-accent p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-3 text-muted">{card.description}</p>
                <Link href={card.href} className="mt-4 inline-block font-semibold text-accent hover:text-primary">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-4xl">Built From the Ground Up</h2>
            <p className="mt-4 text-muted">
              JEM was founded on February 19, 1997 — armed with only a pickup truck, a handful of
              tools, and a dream. While we&apos;ve grown over the years, our commitment to quality
              craftsmanship, prompt service, and honest prices has never changed.
            </p>
            <Link href="/about" className="mt-4 inline-block font-semibold text-accent hover:text-primary">
              Our Story →
            </Link>
          </div>
          <div className="rounded-2xl shadow-md bg-surface overflow-hidden">
            <Image
              src="/images/placeholder.svg"
              alt="JEM Heating and Air Conditioning team at work"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-display text-4xl">What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/testimonials" className="font-semibold text-accent hover:text-primary">
              See All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Schedule Service?"
        subtext="Call us toll-free or send a message — we respond quickly."
        primaryLabel="Call 1-888-684-0657"
        primaryHref="tel:1-888-684-0657"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />
    </>
  )
}
