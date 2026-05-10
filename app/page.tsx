import Link from 'next/link'
import { Building2, ChevronDown, Home, Wind } from 'lucide-react'
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
  { value: '1997', label: 'Since', description: 'Serving Carroll County' },
  { value: '24/7', label: 'Support', description: 'Emergency Service Available' },
  { value: '100%', label: 'Coverage', description: 'All Makes & Models Serviced' },
  { value: '2', label: 'Markets', description: 'Residential & Commercial' },
]

const serviceCards = [
  {
    icon: Home,
    title: 'Residential HVAC',
    description: 'Repair, replacement, and system upgrades for total home comfort.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial HVAC',
    description: 'Responsive maintenance and repair for business-critical systems.',
    href: '/services/commercial',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Filtration and purification options to improve indoor health and comfort.',
    href: '/indoor-air-quality',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[85vh] items-center justify-center bg-primary px-4 py-16 text-center text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Carroll County, Maryland</p>
          <h1 className="mb-4 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
            Carroll County&apos;s Trusted HVAC Experts Since 1997
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-base text-white/70 md:mb-8 md:text-xl">
            Professional heating &amp; cooling service, fast response times, and honest pricing for
            residential and commercial clients.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mb-10">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full bg-accent px-8 py-3 text-center font-semibold text-white hover:bg-orange-600 focus-visible:bg-orange-600 sm:w-auto md:py-4"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] min-w-[44px] w-full items-center justify-center rounded-full border-2 border-white px-8 py-3 text-center font-semibold text-white hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary sm:w-auto md:py-4"
            >
              View Services
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <ChevronDown className="h-8 w-8 animate-bounce text-white/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-primary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-0 divide-white/10 px-4 text-center md:grid-cols-4 md:divide-x md:px-6">
          {trustItems.map((item) => (
            <div key={item.description} className="px-2 py-6 md:py-8">
              <p className="text-xl font-bold text-accent md:text-2xl">{item.value}</p>
              <p className="text-sm uppercase tracking-wide text-white">{item.label}</p>
              <p className="text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What We Do</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border-t-4 border-accent bg-white p-6 shadow-md hover:shadow-xl md:p-8"
              >
                <card.icon className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-display font-bold text-primary md:text-xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-semibold text-accent hover:underline focus-visible:underline"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="order-last flex h-56 w-full items-center justify-center rounded-2xl bg-gray-200 text-lg text-gray-400 md:order-none md:h-80">
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
            <Link
              href="/about"
              className="mt-4 inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-accent hover:underline focus-visible:underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mb-4 text-center text-4xl font-display font-bold text-primary">What Our Customers Say</h2>
          <div className="mx-auto mb-12 h-1 w-16 bg-accent" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/testimonials"
              className="inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-accent hover:underline focus-visible:underline"
            >
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
