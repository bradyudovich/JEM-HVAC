import Link from 'next/link'
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
  ['1997', 'Since', 'Serving Carroll County'],
  ['24/7', 'Support', 'Emergency Service Available'],
  ['100%', 'Coverage', 'All Makes & Models Serviced'],
  ['2', 'Markets', 'Residential & Commercial'],
]

const serviceCards = [
  {
    icon: '🏠',
    title: 'Residential HVAC',
    description: 'Repair, replacement, and system upgrades for total home comfort.',
    href: '/services/residential',
  },
  {
    icon: '🏢',
    title: 'Commercial HVAC',
    description: 'Responsive maintenance and repair for business-critical systems.',
    href: '/services/commercial',
  },
  {
    icon: '💨',
    title: 'Indoor Air Quality',
    description: 'Filtration and purification options to improve indoor health and comfort.',
    href: '/indoor-air-quality',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-primary px-6 text-center text-white flex items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Carroll County, Maryland</p>
          <h1 className="mb-6 text-6xl font-display font-bold leading-tight text-white md:text-7xl">
            Carroll County&apos;s Trusted HVAC Experts Since 1997
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/70">
            Professional heating &amp; cooling service, fast response times, and honest pricing for
            residential and commercial clients.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-10 py-4 font-semibold text-white hover:bg-orange-600"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-white px-10 py-4 font-semibold text-white hover:bg-white hover:text-primary"
            >
              View Services
            </Link>
          </div>
          <div className="mt-16 text-3xl text-white/40 animate-bounce" aria-hidden="true">
            ↓
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-primary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 text-center md:grid-cols-4">
          {trustItems.map(([number, label, description]) => (
            <div key={description} className="px-4 py-3">
              <p className="text-2xl font-bold text-accent">{number}</p>
              <p className="text-sm uppercase tracking-wide text-white">{label}</p>
              <p className="text-sm text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What We Do</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border-t-4 border-accent bg-white p-8 shadow-md hover:shadow-xl"
              >
                <p className="mb-4 text-3xl text-accent" aria-hidden="true">
                  {card.icon}
                </p>
                <h3 className="mb-2 text-xl font-display font-bold text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                <Link href={card.href} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-gray-200 text-lg text-gray-400">
            Team Photo Placeholder
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">About JEM</p>
            <h2 className="mb-4 text-4xl font-display font-bold text-primary">Built From the Ground Up</h2>
            <p>
              JEM was founded on February 19, 1997 — armed with only a pickup truck, a handful of
              tools, and a dream. While we&apos;ve grown over the years, our commitment to quality
              craftsmanship, prompt service, and honest prices has never changed.
            </p>
            <Link href="/about" className="mt-4 inline-block font-medium text-accent hover:underline">
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What Our Customers Say</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/testimonials" className="font-medium text-accent hover:underline">
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
